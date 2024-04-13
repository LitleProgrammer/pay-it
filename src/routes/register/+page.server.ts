import { redirect } from "@sveltejs/kit";
import { checkUserToken } from "../(database)/checkUserToken.js";
import { registerUser } from "../(database)/registerUser.js";
import { goto } from "$app/navigation";

export async function load({ cookies }) {
    let id: string = cookies.get('userID') || '';
    let token: string = cookies.get('sessionID') || '';

    if (await checkUserToken(id, token)) {
        throw redirect(303, '/dashboard')
    }
}

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const userName: string = data.get('username')?.toString() || '';
        const email: string = data.get('email')?.toString().toLowerCase() || '';
        const passwd: string = data.get('password')?.toString() || '';

        if (await registerUser(userName, email, passwd)) {
            throw redirect(303, '/login');
        } else {
            //Send error message
        }
    },
};