<script lang="ts">
    import Footer from "./(components)/Footer.svelte";
    import "./style.css";
</script>

<div class="content">
    <div class="textWrapper">
        <h1>
            Hi 👋, nothing here at the moment<br />Go to the
            <a href="/login">login page </a> to log in or got to the
            <a href="/register">registration page 🤩</a>
            to make an account
        </h1>
    </div>
    <div class="footerWrapper">
        <Footer />
    </div>
</div>

<style>
    .content {
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
    }

    .textWrapper {
        text-align: center;
        width: 90%;
        font-size: 2em;
    }

    .footerWrapper {
        position: absolute;
        bottom: 0;
    }

    a {
        color: var(--color-text);
    }

    @media screen and (max-width: 991px) {
        /* start of large tablet styles */
    }

    @media screen and (max-width: 767px) {
        /* start of medium tablet styles */
    }

    @media screen and (max-width: 479px) {
        /* start of phone styles */
        .textWrapper {
            font-size: 1em;
        }
    }
</style>
