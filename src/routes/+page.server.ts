import { fail, redirect } from "@sveltejs/kit";
import { checkUserToken } from "./(database)/checkUserToken.js";
import { loginUser } from "./(database)/loginUser.js";

export async function load({ cookies }) {
    let id: string = cookies.get('userID') || '';
    let token: string = cookies.get('sessionID') || '';

    if (await checkUserToken(id, token)) {
        throw redirect(303, '/dashboard')
    }
}