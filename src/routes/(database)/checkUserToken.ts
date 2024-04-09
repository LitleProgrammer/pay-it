import {connect, disconnect, getDB} from "./mongodb";
import { USER_COLLECTION } from '$env/static/private';

export async function checkUserToken(userID: string, sessionToken: string): Promise<boolean> {
    connect();

    const db = getDB();
    const usersCollection = await db.collection(USER_COLLECTION);

    const result = await usersCollection.findOne({ userID: userID, sessionID: sessionToken });
    
    return result;
}