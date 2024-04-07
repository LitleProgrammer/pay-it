<script lang="ts">

    interface $Props extends HTMLInputElement {
        
    }

    export var data: string[];
    export var placeholder: string;
    export let setValue: (selected: string) => void;

    var input: HTMLInputElement;
    var isFocussed: boolean = true;
    var inputValue = '';

    var suggestions: string[] = [];

    const inputChange = () => {
        suggestions = [];
        if (inputValue) {
            data.forEach(date => {
                if (date.toLocaleLowerCase().startsWith(inputValue.toLowerCase())) {
                    suggestions = [...suggestions, date];
                }
            });
        }
    }

    const setInputValue = (selected: string) => {
        inputValue = selected;
        setValue(selected);
        if (isFocussed) {
            isFocussed = false;
            input.blur();
        } else {
            isFocussed = true;
            input.focus();
        }
    }

    const focusChange = () => {
        if (isFocussed) {
            isFocussed = false;
            input.blur();
        } else {
            isFocussed = true;
            input.focus();
        }
    }

    const handleBlur = () => {
        setTimeout(() => {
            isFocussed = false;
        }, 100);
    }
</script>

<input type="text" name="" id="" placeholder="{placeholder}" bind:value={inputValue} on:keyup={inputChange} bind:this={input} on:focus={() => isFocussed = true} on:blur={handleBlur}>

{#if suggestions.length > 0 && isFocussed}
    <ul>
        {#each suggestions as suggestion}
            <li class="suggesion"><button type="button" on:click={() => setInputValue(suggestion)} >{suggestion}</button></li>
        {/each}
    </ul>
{/if}

<style>
    input {
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 1.2em;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border: none;
        background-color: var(--color-bg-1);
        border: 2px solid var(--color-bg-0);
        color: var(--color-text);
    }

    ul {
        position: relative;
        border: 2px solid var(--color-bg-0);
        border-radius: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: none;
        width: 100%;
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
</style>