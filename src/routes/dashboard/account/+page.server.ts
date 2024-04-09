import { redirect } from "@sveltejs/kit";
import { checkUserToken } from "../../(database)/checkUserToken.js";
import { getUserByID } from "../../(database)/getUserByID.js";
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