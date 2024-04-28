<script lang="ts">
    import "../style.css";
    import Fa from "svelte-fa";
    import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
    import Modal from "./Modal.svelte";
    import CurrencyInput from "./CurrencyInput.svelte";
    import TextInput from "./TextInput.svelte";
    import SubmitButton from "./SubmitButton.svelte";

    export var data = { cols: [""], data: [] };
    export var friends: string[] = [];

    let showModal: boolean = false;
    let debtID: string = "";
    let debtObject: object = {};

    function openEditModal(id: string) {
        debtObject = data.data.find((debt) => debt.id === id) || {};

        if (debtObject !== null && debtObject.canRemove) {
            debtID = id;
            showModal = true;
        }
    }
</script>

<div class="list">
    <table>
        <tr>
            {#each data.cols as heading}
                <th>{heading}</th>
            {/each}
        </tr>
        {#each data.data as { name, sum, reason, direction, id, canRemove }}
            {#if direction == "<"}
                <tr
                    class="tr-red {canRemove ? 'cursorPointer' : ''}"
                    on:click={openEditModal(id)}
                >
                    <td>You</td>
                    <td><Fa icon={faArrowRight} size="1.3x" /></td>
                    <td>{name}</td>
                    <td>{sum}€</td>
                    <td>{reason}</td>
                </tr>
            {:else if direction == ">"}
                <tr
                    class="tr-green {canRemove ? 'cursorPointer' : ''}"
                    on:click={openEditModal(id)}
                >
                    <td>{name}</td>
                    <td><Fa icon={faArrowRight} size="1.3x" /></td>
                    <td>You</td>
                    <td>{sum}€</td>
                    <td>{reason}</td>
                </tr>
            {/if}
        {/each}
    </table>
</div>

<div class="modal">
    <Modal bind:showModal>
        <div class="editDebtModal">
            <form action="?/editDebt" method="post">
                <h1>Edit debt</h1>
                <input type="hidden" name="debtID" value={debtObject.id} />
                <CurrencyInput
                    name="debt"
                    value={debtObject.sum}
                    style="width: 90%"
                    placeholder="Debt"
                />
                <TextInput
                    name="reason"
                    value={debtObject.reason}
                    style="width: 90%"
                    maxlength="64"
                    placeholder="Reason"
                />
                <SubmitButton>Save</SubmitButton>
            </form>
            <form action="?/removeDebt" method="post">
                <input type="hidden" name="debtID" value={debtObject.id} />
                <SubmitButton>Delete</SubmitButton>
            </form>
        </div>
    </Modal>
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
        overflow-x: hidden;
    }

    h1 {
        color: var(--color-text);
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

    .cursorPointer:hover {
        cursor: pointer;
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

    .editDebtModal form {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 991px) {
        /* start of large tablet styles */
    }

    @media screen and (max-width: 767px) {
        /* start of medium tablet styles */
    }

    @media screen and (max-width: 479px) {
        /* start of phone styles */
        .list {
            height: auto;
            overflow-y: visible;
        }

        table {
            font-size: 0.74em;
        }

        .mobile-hidden {
            display: none;
        }
    }
</style>
