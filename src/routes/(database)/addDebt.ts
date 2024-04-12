import { DEBTS_COLLECTION, USER_COLLECTION } from "$env/static/private";
import { connect, getDB } from "./mongodb";
import { v4 as uuidv4 } from 'uuid';

export async function addDebt(userID: any, friendName: any, debt: any, reason: any): Promise<string> {
    connect();

    const db = await getDB();
    const debtsCollection = await db.collection(DEBTS_COLLECTION);
    const usersCollection = await db.collection(USER_COLLECTION);

    const friend = await usersCollection.findOne({ userName: friendName });
    const user = await usersCollection.findOne({ userID: userID });

    const debtID = uuidv4();
    const date = new Date();


    if (friend) {
        if (debt < 0) {
            debtsCollection.insertOne({ debtID: debtID.toString().toString(), creatorID: userID, creationDate: date, debtorName: user.userName, debtorID: user.userID, creditorName: friend.userName, creditorID: friend.userID, reason: reason, debt: Math.abs(debt) });
            usersCollection.updateOne({ userID: userID }, { $push: { debts: debtID } });
            usersCollection.updateOne({ userID: friend.userID }, { $push: { debts: debtID } });
        } else {
            debtsCollection.insertOne({ debtID: debtID.toString(), creatorID: userID, creationDate: date, debtorName: friend.userName, debtorID: friend.userID, creditorName: user.userName, creditorID: user.userID, reason: reason, debt: Math.abs(debt) });
            usersCollection.updateOne({ userID: userID }, { $push: { debts: debtID } });
            usersCollection.updateOne({ userID: friend.userID }, { $push: { debts: debtID } });
        }
    } else {
        if (debt < 0) {
            debtsCollection.insertOne({ debtID: debtID.toString(), creatorID: userID, creationDate: date, debtorName: user.userName, debtorID: user.userID, creditorName: friendName, reason: reason, debt: Math.abs(debt) });
            usersCollection.updateOne({ userID: userID }, { $push: { debts: debtID } });
        } else {
            debtsCollection.insertOne({ debtID: debtID.toString(), creatorID: userID, creationDate: date, debtorName: friendName, creditorName: user.userName, creditorID: user.userID, reason: reason, debt: Math.abs(debt) });
            usersCollection.updateOne({ userID: userID }, { $push: { debts: debtID } });
        }
    }
    return "";
}