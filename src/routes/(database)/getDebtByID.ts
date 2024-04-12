import { connect, disconnect, getDB } from "./mongodb";
import { DEBTS_COLLECTION } from '$env/static/private';
import type { Collection, WithId } from "mongodb";

export async function getDebtByID(id: string): Promise<Document> {
    connect();

    const db = getDB();
    const debts_Collection = await db.collection(DEBTS_COLLECTION);

    const result = await debts_Collection.findOne({ debtID: id });

    return result;
}