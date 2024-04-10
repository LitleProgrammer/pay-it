import {connect, disconnect, getDB} from "./mongodb";
import {getUserByID} from'./getUserByID';
import { USER_COLLECTION } from '$env/static/private';

export async function denyFriend(userID: any, friendName: any): Promise<string> {
    connect();

    const db = getDB();
    const usersCollection = await db.collection(USER_COLLECTION);
    const friend = await usersCollection.findOne({userName: friendName});

    if (friend) {
        if (!friend.userID !== userID) {
            const result = await usersCollection.findOne({userID: userID, friends: friend.userID});
            if(!result) {
                usersCollection.updateOne({userID: userID}, {$pull:{incomingFriends: friend.userID}});
                usersCollection.updateOne({userID: friend.userID}, {$pull:{outgoingFriends: userID}});
            }
        }
    }

    return "";
}