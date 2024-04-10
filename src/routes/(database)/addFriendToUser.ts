import {connect, disconnect, getDB} from "./mongodb";
import {getUserByID} from'./getUserByID';
import { USER_COLLECTION } from '$env/static/private';


export async function addFriendToUser(userID: any, friendEmail: any): Promise<string> {
    connect();

    const db = getDB();
    const usersCollection = await db.collection(USER_COLLECTION);
    const friend = await usersCollection.findOne({email: friendEmail});
    if (friend) {
        if (!friend.userID !== userID) {
            //Friend is valid -> checking if the user already has this friend
            const result = await usersCollection.findOne({userID: userID, friends: friend.userID});
            if(!result) {
                //User doesn't have this friend
                usersCollection.updateOne({userID: userID}, {$push:{outgoingFriends: friend.userID}});
                usersCollection.updateOne({userID: friend.userID}, {$push:{incomingFriends: userID}});
                disconnect();
                return "ok";
            }
            disconnect();
            return "alreadyFriend";
        }
        disconnect();
        return "cantSelf";
    }

    disconnect();
    return "noFriend";
}