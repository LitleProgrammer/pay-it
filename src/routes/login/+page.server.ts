import { fail, redirect } from "@sveltejs/kit";
import { checkUserToken } from "../(database)/checkUserToken.js";
import { loginUser } from "../(database)/loginUser.js";

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
        const passwd: string = data.get('password')?.toString() || '';

        const result = await loginUser(userName, passwd, cookies);
        if (result.text == "ok") {
            throw redirect(303, '/dashboard');
        } else if (result.text == "wrong password") {
            return fail(400, { problem: true });
        } else if (result.text == "couldn't find user") {
            return fail(400, { problem: true });
        } else {
            return fail(400, { otherError: true });
        }

    },
};