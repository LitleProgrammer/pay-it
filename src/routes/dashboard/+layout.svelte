<script lang="ts">
    import type { LayoutData } from "./$types";
    import Header from "../(components)/Header.svelte";
    import "../style.css";
</script>

<div class="dashboard">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    .dashboard {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
        width: 100dvw;
        background-color: var(--color-bg-1);
    }

    main {
        display: flex;
        justify-content: center;
        padding-top: 1rem;
        margin: 0;
        height: 100%;
    }
</style>
