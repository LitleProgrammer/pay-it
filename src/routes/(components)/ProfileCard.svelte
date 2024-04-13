<script lang="ts">
    import avatar from "$lib/images/avatar.png";
    import "../style.css";

    export var user: {};
    var date: Date = new Date(user.creationDate);
    export var logoutBtn: boolean;
</script>

<div class="wrapper">
    {#if user.picture}
        <img class="profileImage" src={user.picture} alt="" />
    {:else}
        <img class="profileImage" src={avatar} alt="" />
    {/if}
    <div class="information">
        <h2>{user.userName}</h2>
        <p class="label">E-Mail:</p>
        <p>{user.email}</p>
        <p class="label">User since:</p>
        <p>{date.toLocaleDateString()}</p>
        {#if logoutBtn}
            <form method="post" action="?/logout"><button>Logout</button></form>
        {/if}
    </div>
</div>

<style>
    .wrapper {
        height: auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .profileImage {
        height: 100px;
        margin: -30px;
        object-fit: cover;
        border-radius: 50%;
        z-index: 1;
    }

    .information {
        height: 70%;
        width: 50%;
        background-color: var(--color-bg-1);
        border-radius: 30px;
        padding: 3%;
        padding-bottom: 1%;
    }

    p {
        margin-top: 0;
    }

    .label {
        text-decoration: underline;
        font-size: 1.1em;
        margin-bottom: 1%;
        margin-top: 6%;
    }

    form {
        width: 100%;
        text-align: center;
    }

    button {
        width: 50%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 1.2em;
        border: 2px solid var(--color-bg-0);
        border-radius: 30px;
        background-color: var(--color-bg-1);
        color: var(--color-text);
        margin: 1%;
        transition: scale 0.3s;
    }

    button:hover {
        background-color: var(--color-bg-2);
        cursor: pointer;
        scale: 1.07;
    }

    @media screen and (max-width: 991px) {
        /* start of large tablet styles */
    }

    @media screen and (max-width: 767px) {
        /* start of medium tablet styles */
    }

    @media screen and (max-width: 479px) {
        /* start of phone styles */
        .information {
            height: auto;
            width: auto;
        }
    }
</style>
