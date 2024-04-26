<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";
    interface $$Props extends Partial<HTMLButtonAttributes> {}
</script>

<button type="submit">
    <slot />
</button>

<style>
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
