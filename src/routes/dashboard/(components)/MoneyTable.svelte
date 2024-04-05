<script lang="ts">
    import '../../style.css';
    import Fa from 'svelte-fa';
    import { faCaretUp, faCaretDown, faMinus } from '@fortawesome/free-solid-svg-icons';

    export var data = { cols: [""], data: [{name: "", sum: 0, link: ""}] };
</script>

<div class="list">
    <table>
        <tr>
            {#each data.cols as heading}
                <th>{heading}</th>
            {/each}
        </tr>
        {#each data.data as {name, sum, link}}
            {#if sum > 0}
                <tr class="tr-green">
                    <td>{name}</td>
                    <td>{sum}€ <Fa icon={faCaretUp}  size="1.3x"/></td>
                    <td>{link}</td>
                </tr>
            {:else if sum < 0}
                <tr class="tr-red">
                    <td>{name}</td>
                    <td>{sum}€ <Fa icon={faCaretDown}  size="1.3x" /></td>
                    <td>{link}</td>
                </tr>
            {:else}
                <tr>
                    <td>{name}</td>
                    <td>{sum}€ <Fa icon={faMinus}  size="1.1x" /></td>
                    <td>{link}</td>
                </tr>
            {/if}
        {/each}
    </table>
</div>

<style>
    .list {
        background-color: var(--color-bg-1);
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        padding: 1%;
        border-radius: 30px;
    }

    table {
        padding-left: 0.5%;
        padding-right: 0.5%;
        width: 100%;
        background-color: var(--color-bg-1);
    }

    tr {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .tr-red {
        color: var(--color-red);
    }

    .tr-green {
        color: var(--color-green);
    }

    td, th {
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 3px solid var(--color-bg-2);
    }
</style>