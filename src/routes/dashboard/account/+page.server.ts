import { fail, redirect } from "@sveltejs/kit";
import { checkUserToken } from "../../(database)/checkUserToken.js";
import { getUserByID } from "../../(database)/getUserByID.js";
import { addFriendToUser } from "../../(database)/addFriendToUser"
import { acceptFriend } from "../../(database)/acceptFriend.js";
import { denyFriend } from "../../(database)/denyFriend.js";
import { BSON, EJSON } from "bson";
import { disconnect } from "../../(database)/mongodb.js";

export async function load({ cookies, params }) {
    let id: string = cookies.get('userID') || '';
    let token: string = cookies.get('sessionID') || '';

    if (!await checkUserToken(id, token)) {
        throw redirect(303, '/login')
    }

    const result = await getUserByID(id);
    const json = EJSON.deserialize(result);

    var friends = await loadUsers(json.friends);
    var incomingFriends = await loadUsers(json.incomingFriends);

    return { user: json, friends: friends, incomingFriends: incomingFriends };
}


async function loadUsers(friends: []): Promise<any[]> {
    if (friends) {
        const friendDocsPromises = friends.map(async (friend) => {
            return EJSON.deserialize(await getUserByID(friend));
        });
        const friendDocs = await Promise.all(friendDocsPromises);
        return friendDocs;
    }
    return [];
}


export const actions = {
    logout: async ({ cookies, request }) => {
        const data = await request.formData();
        cookies.delete('userID', { path: '/' });
        cookies.delete('sessionID', { path: '/' });
        throw redirect(302, '/login')
    },
    addFriend: async ({ cookies, request }) => {
        const data = await request.formData();
        const userID = cookies.get('userID');
        const email = data.get('email');
        switch ((await addFriendToUser(userID, email)).toString()) {
            case "ok":
                redirect(303, "/dashboard/account");
                break;
            case "alreadyFriend":
                //User is already friend with this person
                return fail(400, { alreadyFriend: true });
                break;
            case "noFriend":
                //Friend does not exists in db
                return fail(400, { notExistent: true });
                break;
            case "cantSelf":
                //Friend does not exists in db
                return fail(400, { cantSelf: true });
                break;
            case "alreadyRequest":
                return fail(400, { alreadyRequested: true });
                break;
            default:
                break;
        }
    },
    acceptRequest: async ({ cookies, request }) => {
        const data = await request.formData();
        const name = data.get('friendName');
        const userID = cookies.get('userID');

        await acceptFriend(userID, name);
        redirect(303, "/dashboard/account");
    },
    denyRequest: async ({ cookies, request }) => {
        const data = await request.formData();
        const name = data.get('friendName');
        const userID = cookies.get('userID');

        await denyFriend(userID, name);
        redirect(303, "/dashboard/account");
    }
};