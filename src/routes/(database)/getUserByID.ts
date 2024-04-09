import {connect, disconnect, getDB} from "./mongodb";
import { USER_COLLECTION } from '$env/static/private';
import type { Collection, WithId } from "mongodb";

export async function getUserByID(id: string): Promise<Document> {
    connect();

    const db = getDB();
    const usersCollection = await db.collection(USER_COLLECTION);

    const result = await usersCollection.findOne({ userID: id });
    
    return result;
}