import { DEBTS_COLLECTION, USER_COLLECTION } from "$env/static/private";
import { EJSON } from "bson";
import { getDebtByID } from "./getDebtByID";
import { connect, getDB } from "./mongodb";

export async function editDebt(userID: any, debt: any, reason: any, debtID: any): Promise<string> {
    connect();

    const db = await getDB();
    const debtsCollection = await db.collection(DEBTS_COLLECTION);
    const usersCollection = await db.collection(USER_COLLECTION);

    const debtObject = await debtsCollection.findOne({ debtID: debtID });
    const user = await usersCollection.findOne({ userID: userID });

    if (debtObject) {
        if (user) {
            if (user.debts.includes(debtID)) {
                await debtsCollection.updateOne({ debtID: debtID }, { $set: { debt: Math.abs(debt), reason: reason } });
            }
        }
    }
    return "";
}