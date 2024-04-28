import { redirect } from "@sveltejs/kit";
import { checkUserToken } from "../../(database)/checkUserToken.js";
import { EJSON } from "bson";
import { getUserByID } from "../../(database)/getUserByID.js";
import { getUserByName } from "../../(database)/getUserByName.js";
import { addDebt } from "../../(database)/addDebt.js";
import { getDebtByID } from "../../(database)/getDebtByID.js";
import { removeDebt } from "../../(database)/removeDebt.js";
import { editDebt } from "../../(database)/editDebt.js";

export async function load({ cookies }) {
    let id: string = cookies.get('userID') || '';
    let token: string = cookies.get('sessionID') || '';

    if (!await checkUserToken(id, token)) {
        throw redirect(303, '/login')
    }

    const result = await getUserByID(id);
    const json = EJSON.deserialize(result);

    var friends = await loadUserNames(json.friends);
    var debts = await generateDebtList(json.debts, id);

    return { user: json, friends: friends, debts: debts };
}

async function loadUserNames(friends: []): Promise<any[]> {
    if (friends) {
        const friendDocsPromises = friends.map(async (friend) => {
            return EJSON.deserialize(await getUserByID(friend)).userName;
        });
        const friendDocs = await Promise.all(friendDocsPromises);
        return friendDocs;
    }
    return [];
}

async function generateDebtList(debts: [], userID: any): Promise<any[]> {
    if (debts) {
        const debtsDocsPromises = debts.map(async (debt) => {
            const debtDoc = EJSON.deserialize(await getDebtByID(debt));
            if (debtDoc) {
                if (debtDoc.debtorID) {
                    if (!debtDoc.creditorID) {
                        return { name: debtDoc.creditorName, sum: debtDoc.debt, reason: debtDoc.reason, direction: "<", id: debt, canRemove: true };
                    }

                    if (debtDoc.debtorID !== userID) {
                        return { name: debtDoc.debtorName, sum: debtDoc.debt, reason: debtDoc.reason, direction: ">", id: debt, canRemove: debtDoc.creatorID === userID };
                    } else {
                        return { name: debtDoc.creditorName, sum: debtDoc.debt, reason: debtDoc.reason, direction: "<", id: debt, canRemove: debtDoc.creatorID === userID };
                    }
                } else {
                    return { name: debtDoc.debtorName, sum: debtDoc.debt, reason: debtDoc.reason, direction: ">", id: debt, canRemove: true };
                }
            } else {
                return null;
            }
        });

        const debtDocs = ((await Promise.all(debtsDocsPromises)).filter(doc => doc !== null));
        return debtDocs;
    }
    return [];
}

export const actions = {
    addDebt: async ({ cookies, request }) => {
        const data = await request.formData();
        const friendName = data.get('username');
        const debt = data.get('debt');
        const reason = data.get('reason');
        const id = cookies.get('userID');

        await addDebt(id, friendName, debt, reason);
        redirect(303, '/dashboard/manage');
    },
    removeDebt: async ({ cookies, request }) => {
        const data = await request.formData();
        const debtID = data.get('debtID');
        const id = cookies.get('userID');

        await removeDebt(id, debtID);
        redirect(303, '/dashboard/manage');
    },
    editDebt: async ({ cookies, request }) => {
        const data = await request.formData();
        const debt = data.get('debt');
        const reason = data.get('reason');
        const debtID = data.get('debtID');
        const id = cookies.get('userID');

        await editDebt(id, debt, reason, debtID);
        redirect(303, '/dashboard/manage');
    }
};