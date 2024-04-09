import {connect, disconnect, getDB} from "./mongodb";
import { USER_COLLECTION } from '$env/static/private';
import type { Collection } from "mongodb";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";

export async function registerUser(userName: string, email: string, password: string): Promise<boolean> {
    connect();

    const userId = uuidv4();
    const hashPasswd = await bcrypt.hash(password, 5);
    const date = new Date();

    const db = getDB();
    const usersCollection: Collection = await db.collection(USER_COLLECTION);
    const result = await usersCollection.insertOne({userID: userId, userName: userName, email: email, password: hashPasswd, creationDate: date});

    disconnect();

    return true;
}