import { redirect } from "@sveltejs/kit";
import { checkUserToken } from "../../(database)/checkUserToken.js";
import { getUserByID } from "../../(database)/getUserByID.js";
import {addFriendToUser} from "../../(database)/addFriendToUser"
import { acceptFriend } from "../../(database)/acceptFriend.js";
import { denyFriend } from "../../(database)/denyFriend.js";
import { BSON, EJSON } from "bson";

export async function load({ cookies, params }) {
    let id: string = cookies.get('userID') || '';
    let token: string = cookies.get('sessionID') || '';    

    if (!await checkUserToken(id, token)) {
        throw redirect(303, '/login')
    }

    const result = await getUserByID(id);
    const json = EJSON.deserialize(result);
    
    return {user: json};
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
                console.log("ok");
                break;
            case "alreadyFriend":
                //User is already friend with this person
                console.log("already");
                break;

            case "noFriend":
                //Friend does not exists in db
                console.log("no");
                break;

            case "cantSelf":
                //Friend does not exists in db
                console.log("self");
                break;
        
            default:
                break;
        }
    },
    acceptRequest: async ({cookies, request}) => {
        const data = await request.formData();
        const name = data.get('friendName');
        const userID = cookies.get('userID');

        acceptFriend(userID, name);
    },
    denyRequest: async ({cookies, request}) => {
        const data = await request.formData();
        const name = data.get('friendName');  
        const userID = cookies.get('userID');

        denyFriend(userID, name);
    }
};