<script lang="ts">
    import "../style.css";
    import Modal from "./Modal.svelte";

    export var friends: any[];
    var showModal: boolean;
</script>

<button on:click={() => (showModal = true)}>
    <div class="avatarList">
        {#each friends as friend, i}
            {#if i < 8}
                {#if friend.picture}
                    <img
                        src={friend.picture}
                        alt="Useravatar"
                        class="userAvatar"
                        style="--z: {i}"
                    />
                    <!-- using this custome variable to set the z-index to get the stacking look-->
                {:else}
                    <img
                        src="https://api.dicebear.com/8.x/identicon/png?seed={friend.userName}&backgroundColor=b6e3f4,c0aede,d1d4f9&size=128"
                        alt="Useravatar"
                        class="userAvatar"
                        style="--z: {i}"
                    />
                    <!-- using this custome variable to set the z-index to get the stacking look-->
                {/if}
            {/if}
        {/each}
        {#if friends.length > 8}
            <div class="moreAvatars">+</div>
        {/if}
    </div>
</button>

<Modal bind:showModal>
    <div class="modal">
        {#each friends as friend, i}
            <div class="avatarWrapper">
                {#if friend.picture}
                    <img
                        src={friend.picture}
                        alt="Useravatar"
                        class="userAvatarModal"
                    />
                {:else}
                    <img
                        src="https://api.dicebear.com/8.x/identicon/png?seed={friend.userName}&backgroundColor=b6e3f4,c0aede,d1d4f9&size=128"
                        alt="Useravatar"
                        class="userAvatarModal"
                    />
                {/if}
                <p>{friend.userName}</p>
            </div>
        {/each}
    </div>
</Modal>

<style>
    :root {
        --avatar-size: 72px;
        --avatar-shaddow: -10px 0px 4px 0px rgba(0, 0, 0, 0.63);
        --avatar-spacing: -25px;
    }

    button {
        background-color: rgb(0, 0, 0, 0);
        border: none;
        color: var(--color-text);
    }

    .avatarList {
        display: inline-flex;
    }

    .avatarList:hover {
        cursor: pointer;
    }

    .userAvatar {
        width: var(--avatar-size);
        height: var(--avatar-size);
        object-fit: cover;
        border-radius: 50%;
        z-index: var(--z);
    }

    .userAvatar:not(:first-child) {
        margin-left: var(--avatar-spacing);
        box-shadow: var(--avatar-shaddow);
    }

    .moreAvatars {
        height: var(--avatar-size);
        width: var(--avatar-size);
        border-radius: 50%;
        background-color: var(--color-bg-2);
        box-shadow: var(--avatar-shaddow);
        margin-left: var(--avatar-spacing);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4em;
        z-index: 9;
    }

    .modal {
        display: flex;
        flex-wrap: wrap;
    }

    .avatarWrapper {
        margin: 1%;
        color: var(--color-text);
        text-align: center;
    }

    .avatarWrapper p {
        margin-top: 4%;
    }

    .userAvatarModal {
        width: var(--avatar-size);
        height: var(--avatar-size);
        object-fit: cover;
        border-radius: 50%;
        margin: 1%;
    }
</style>
