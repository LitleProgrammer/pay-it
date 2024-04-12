<script lang="ts">
    import "../style.css";
    import Fa from "svelte-fa";
    import {
        faArrowRight,
        faTrashCan,
    } from "@fortawesome/free-solid-svg-icons";

    export var data = { cols: [""], data: [] };
</script>

<div class="list">
    <table>
        <tr>
            {#each data.cols as heading}
                <th>{heading}</th>
            {/each}
        </tr>
        {#each data.data as { name, sum, reason, direction, id }}
            {#if direction == "<"}
                <tr class="tr-red">
                    <td>You</td>
                    <td><Fa icon={faArrowRight} size="1.3x" /></td>
                    <td>{name}</td>
                    <td>{sum}€</td>
                    <td>{reason}</td>
                    <td>
                        <form method="post" action="?/removeDebt">
                            <input type="hidden" name="debtID" value={id} />
                            <button type="submit"
                                ><Fa icon={faTrashCan} size="1.7x" /></button
                            >
                        </form>
                    </td>
                </tr>
            {:else if direction == ">"}
                <tr class="tr-green">
                    <td>{name}</td>
                    <td><Fa icon={faArrowRight} size="1.3x" /></td>
                    <td>You</td>
                    <td>{sum}€</td>
                    <td>{reason}</td>
                    <td>
                        <form method="post" action="?/removeDebt">
                            <input type="hidden" name="debtID" value={id} />
                            <button type="submit"
                                ><Fa icon={faTrashCan} size="1.7x" /></button
                            >
                        </form>
                    </td>
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
        height: 95%;
        overflow-y: scroll;
    }

    table {
        padding-left: 0.5%;
        padding-right: 0.5%;
        width: 100%;
        height: 100%;
        background-color: var(--color-bg-1);
        overflow-y: hidden;
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

    td,
    th {
        padding-top: 5px;
        padding-bottom: 5px;
        border-bottom: 3px solid var(--color-bg-2);
    }

    th {
        text-align: left;
    }

    button {
        background-color: rgb(0, 0, 0, 0);
        border: none;
        color: var(--color-text);
        transition: scale, 0.3s;
    }

    button:hover {
        cursor: pointer;
        scale: 1.2;
    }
</style>
