<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    interface $$Props extends Partial<HTMLInputAttributes> {}

    export let value: string = "";
</script>

<input type="text" bind:value {...$$restProps} />

<style>
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
</style>
