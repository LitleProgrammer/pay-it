<script lang="ts">
    import type { HTMLInputAttributes } from "svelte/elements";
    interface $$Props extends Partial<HTMLInputAttributes> {}

    export let value: string = "";
    export var wipth: string = "";

    export var data: string[];

    var input: HTMLInputElement;
    var isFocussed: boolean = true;

    var suggestions: string[] = [];

    const inputChange = () => {
        suggestions = [];
        if (value) {
            data.forEach((date) => {
                if (date.toLocaleLowerCase().startsWith(value.toLowerCase())) {
                    suggestions = [...suggestions, date];
                }
            });
        }
    };

    const setInputValue = (selected: string) => {
        value = selected;
        if (isFocussed) {
            isFocussed = false;
            input.blur();
        } else {
            isFocussed = true;
            input.focus();
        }
    };

    const focusChange = () => {
        if (isFocussed) {
            isFocussed = false;
            input.blur();
        } else {
            isFocussed = true;
            input.focus();
        }
    };

    const handleBlur = () => {
        setTimeout(() => {
            isFocussed = false;
        }, 100);
    };
</script>

<slot />

<div class="wrapper" style="width: {wipth};">
    <input
        type="text"
        bind:value
        bind:this={input}
        on:keyup={inputChange}
        on:focus={() => (isFocussed = true)}
        on:blur={handleBlur}
        {...$$restProps}
    />

    {#if suggestions.length > 0 && isFocussed}
        <ul>
            {#each suggestions as suggestion}
                <li class="suggesion">
                    <button
                        type="button"
                        on:click={() => setInputValue(suggestion)}
                        >{suggestion}</button
                    >
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 1.2em;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        background-color: var(--color-bg-1);
        border: 2px solid var(--color-bg-0);
        color: var(--color-text);
    }

    ul {
        width: 100%;
        position: relative;
        border: 2px solid var(--color-bg-0);
        border-radius: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: none;
        list-style: none;
        margin: 0;
        padding: 0;
        top: 0;
        padding-top: 2%;
        max-height: 25vh;
        overflow-y: scroll;
    }

    button {
        background-color: rgb(0, 0, 0, 0);
        border: none;
        cursor: pointer;
        font: var(--font-body);
        color: var(--color-text);
    }

    li {
        color: var(--color-text);
        padding-bottom: 1%;
    }

    li:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 991px) {
        /* start of large tablet styles */
    }

    @media screen and (max-width: 767px) {
        /* start of medium tablet styles */
    }

    @media screen and (max-width: 479px) {
        /* start of phone styles */
        ul {
            padding-right: 6%;
        }
    }
</style>
