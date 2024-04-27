<script lang="ts">
    import type { PageData, ActionData } from "./$types";
    import "../style.css";
    import Footer from "../(components)/Footer.svelte";
    import TextInput from "../(components)/TextInput.svelte";
    import MailInput from "../(components)/MailInput.svelte";
    import PasswordInput from "../(components)/PasswordInput.svelte";
    import SubmitButton from "../(components)/SubmitButton.svelte";

    export let form: ActionData;
</script>

<div class="wrapper">
    {#if form?.nameExists}
        <div class="error">
            <p>The name already exists</p>
        </div>
    {/if}
    {#if form?.emailExists}
        <div class="error">
            <p>The email already exists</p>
        </div>
    {/if}
    <div class="form-wrapper">
        <h1>Welcome 👋</h1>
        <form method="POST">
            <TextInput name="username" placeholder="Username" required /><br />
            <MailInput name="email" placeholder="E-Mail" required /><br />
            <PasswordInput name="password" placeholder="Password" required /><br
            />
            <SubmitButton>Register</SubmitButton>
        </form>
        <p>Already have an account? Go to <a href="/login">Login</a></p>
    </div>
    <div class="footerWrapper">
        <Footer />
    </div>
</div>

<style>
    .wrapper {
        height: 100dvh;
        width: 100dvw;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(42, 46, 46);
        background: linear-gradient(
            25deg,
            rgba(42, 46, 46, 1) 25%,
            rgba(4, 4, 4, 1) 100%
        );
        flex-direction: column;
    }

    .form-wrapper {
        text-align: center;
    }

    h1 {
        font-size: 4em;
        margin: 0;
        margin-bottom: 1%;
    }

    input {
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 1.2em;
        border: 2px solid var(--color-bg-0);
        border-radius: 5px;
        background-color: var(--color-bg-1);
        color: var(--color-text);
        margin: 1%;
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

    a {
        color: var(--color-text);
    }

    .error {
        position: absolute;
        top: 0;
        background-color: var(--color-red);
        border-radius: 30px;
        padding-left: 1%;
        padding-right: 1%;
        margin-top: 1%;
        font-size: 1.5em;
        animation-name: disapear;
        animation-duration: 6s;
        animation-iteration-count: 1;
        opacity: 0;
    }

    @keyframes disapear {
        0% {
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            display: none;
        }
    }

    .footerWrapper {
        position: absolute;
        bottom: 0;
    }
</style>
