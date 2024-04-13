import { DEBTS_COLLECTION, USER_COLLECTION } from "$env/static/private";
import { connect, getDB } from "./mongodb";

export async function removeDebt(userID: any, debtID: any): Promise<string> {
    connect();

    const db = await getDB();
    const debtsCollection = await db.collection(DEBTS_COLLECTION);
    const usersCollection = await db.collection(USER_COLLECTION);

    const debt = await debtsCollection.findOne({ debtID: debtID });
    const user = await usersCollection.findOne({ userID: userID });

    if (debt) {
        if (debt.creatorID === userID) {
            if (debt.debtorID) {
                usersCollection.updateOne({ userID: debt.debtorID }, { $pull: { debts: debtID } });
            }

            if (debt.creditorID) {
                usersCollection.updateOne({ userID: debt.creditorID }, { $pull: { debts: debtID } });
            }
            debtsCollection.deleteOne({ debtID: debtID });
        }
    }
    return "";
}