import {connect, disconnect, getDB} from "./mongodb";
import { USER_COLLECTION } from '$env/static/private';
import type { Collection } from "mongodb";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import type { Cookies } from "@sveltejs/kit";

export async function loginUser(userName: string, password: string, cookies: Cookies): Promise<{text: string}> {
    connect();
    
    const db = getDB();
    const usersCollection: Collection = await db.collection(USER_COLLECTION);
    const result = await usersCollection.findOne({userName: userName});
    if (result) {
        const passwdHash = result.password;
        const userID = result.userID;

        if (await bcrypt.compare(password, passwdHash)) {
            const sessionID = uuidv4();
            var currentTime = new Date();
            var addDate = currentTime.setDate(currentTime.getDate() + 5);
            var expireDate = new Date(addDate);

            await usersCollection.updateOne({userID: userID, userName: userName}, {$set:{sessionID: sessionID, sessionExpire: expireDate}});

            cookies.set('userID', userID, {path: '/', expires: expireDate});
            cookies.set('sessionID', sessionID, {path: '/', expires: expireDate});

            return {text: "ok"};
        } else {
            return {text: 'wrong password'};
        }
    }

    return {text: "couldn't find user"};
}