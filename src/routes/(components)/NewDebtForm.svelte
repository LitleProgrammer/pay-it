<script lang="ts">
    import CurrencyInput from "./CurrencyInput.svelte";
    import SearchInput from "./SearchInput.svelte";
    import TextInput from "./TextInput.svelte";

    export var friendNames: any;

    let username: string;
    const setUsername = (value: string) => {
        username = value;
    };
</script>

<form action="?/addDebt" method="POST">
    <h1>Add a new debt</h1>

    <SearchInput
        data={friendNames}
        name="username"
        placeholder="Username"
        wipth="90%"
    /> <br />
    <CurrencyInput
        placeholder="Debt in €"
        name="debt"
        required
        style="width: 90%"
    />
    <TextInput
        maxlength="64"
        placeholder="Reason (Max 64 chars)"
        name="reason"
        style="width: 90%"
    />
    <button type="submit">Submit</button>
</form>

<style>
    form {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        color: var(--color-text);
    }

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

    @media screen and (max-width: 991px) {
        /* start of large tablet styles */
    }

    @media screen and (max-width: 767px) {
        /* start of medium tablet styles */
    }

    @media screen and (max-width: 479px) {
        /* start of phone styles */

        input {
            margin: 0;
        }
    }
</style>
