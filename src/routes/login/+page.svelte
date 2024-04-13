<script>
    import "../style.css";
</script>

<div class="wrapper">
    <div class="form-wrapper">
        <h1>Welcome back 👋</h1>
        <form method="POST">
            <input type="text" name="username" placeholder="Username" /><br />
            <input type="password" name="password" placeholder="Password" /><br
            />
            <button>Login</button>
        </form>
        <p>Want to make an account? Go to <a href="/register">Register</a></p>
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
</style>
