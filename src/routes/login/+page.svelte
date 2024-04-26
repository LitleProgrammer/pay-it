<script lang="ts">
    import type { PageData, ActionData } from "./$types";
    import "../style.css";
    import Footer from "../(components)/Footer.svelte";
    import SubmitButton from "../(components)/SubmitButton.svelte";
    import TextInput from "../(components)/TextInput.svelte";
    import PasswordInput from "../(components)/PasswordInput.svelte";

    export let form: ActionData;
</script>

<div class="wrapper">
    {#if form?.problem}
        <div class="error">
            <p>Name and password doesn't match</p>
        </div>
    {/if}
    {#if form?.otherError}
        <div class="error">
            <p>An error occured. Try again later.</p>
        </div>
    {/if}
    <div class="form-wrapper">
        <h1>Welcome back 👋</h1>
        <form method="POST">
            <TextInput name="username" placeholder="Username" />
            <br />
            <PasswordInput name="password" placeholder="Password" />
            <br />
            <SubmitButton>Login</SubmitButton>
        </form>
        <p>Want to make an account? Go to <a href="/register">Register</a></p>
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
        overflow: hidden;
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
