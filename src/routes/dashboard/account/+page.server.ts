import { redirect } from "@sveltejs/kit";
import { checkUserToken } from "../../(database)/checkUserToken.js";
import { getUserByID } from "../../(database)/getUserByID.js";

export async function load({ cookies, params }) {
    let id: string = cookies.get('userID') || '';
    let token: string = cookies.get('sessionID') || '';    

    if (!await checkUserToken(id, token)) {
        throw redirect(303, '/login')
    }

    const result = await getUserByID(id);

    return {
        user: result
    }
}