<script lang="ts">
    import { goto } from "$app/navigation";
    import SearchInput from "./SearchInput.svelte";

    export var friendNames: any;

    let username: string;
    const setUsername = (value: string) => {
        username = value;
    };
</script>

<form action="?/addDebt" method="POST">
    <h1>Add a new debt</h1>

    <input required type="hidden" name="username" bind:value={username} />
    <SearchInput placeholder="User" data={friendNames} setValue={setUsername} />
    <br /><br />
    <input
        type="number"
        placeholder="Debt in €"
        name="debt"
        id=""
        min="-100000.00"
        step="0.01"
        max="100000.00"
        required
    /><br /><br />
    <input
        type="text"
        maxlength="64"
        placeholder="Reason (Max 64 chars)"
        name="reason"
        id=""
    />
    <br />
    <button type="submit">Submit</button>
</form>

<style>
    input {
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 1.2em;
        border: 2px solid var(--color-bg-0);
        border-radius: 5px;
        background-color: var(--color-bg-1);
        color: var(--color-text);
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
</style>
