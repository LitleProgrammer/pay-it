import {connect, disconnect, getDB} from "./mongodb";
import { USER_COLLECTION } from '$env/static/private';
import type { Collection, WithId } from "mongodb";

export async function checkUserToken(userID: string, sessionToken: string): Promise<WithId<Document> | null> {
    connect();

    const db = getDB();
    const usersCollection = await db.collection(USER_COLLECTION);

    const result: Promise<WithId<Document> | null> = await usersCollection.findOne({ userID: userID, sessionID: sessionToken });

    return result;
}