<script lang="ts">
    import Table from "../../(components)/ManageTable.svelte";
    import "../../style.css";
    import Fa from "svelte-fa";
    import type { PageData } from "../$types";
    import { faPlus } from "@fortawesome/free-solid-svg-icons";
    import Modal from "../../(components)/Modal.svelte";
    import SearchInput from "../../(components)/SearchInput.svelte";
    import NewDebtForm from "../../(components)/NewDebtForm.svelte";

    export let data: PageData;

    const debtList = {
        cols: ["Debtor", "", "Creditor", "Sum", "Reason", ""],
        data: data.debts,
    };

    let showModal = false;
</script>

<div class="manage">
    <div class="sidebar wrapper">
        <div class="buttonWrapper">
            <button on:click={() => (showModal = true)}>Add debt</button>
            <div class="modalWrapper">
                <Modal bind:showModal>
                    <NewDebtForm friendNames={data.friends} />
                </Modal>
            </div>
        </div>
    </div>

    <div class="openList wrapper">
        <Table data={debtList} />
    </div>
</div>

<style>
    .manage {
        display: grid;
        grid-template-columns: 70% 30%;
        grid-template-rows: 30% 30% 30%;
        width: 95vw;
        height: 90%;
        column-gap: 1%;
        row-gap: 2.5%;
        padding: 1%;
    }

    .wrapper {
        background-color: var(--color-bg-1);
        border-radius: 30px;
    }

    .infoBlock {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 100%;
        width: 100%;
    }

    .sidebar {
        grid-row-start: 1;
        grid-row-end: 4;
        grid-column-start: 2;
        grid-column-end: 3;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .buttonWrapper {
        padding-top: 10%;
        width: 100%;
        text-align: center;
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
        transition: scale 0.3s;
    }

    button:hover {
        background-color: var(--color-bg-2);
        cursor: pointer;
        scale: 1.07;
    }

    .openList {
        grid-row-start: 1;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 991px) {
        /* start of large tablet styles */
    }

    @media screen and (max-width: 767px) {
        /* start of medium tablet styles */
    }

    @media screen and (max-width: 479px) {
        /* start of phone styles */
        .manage {
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 1fr;
            width: 95vw;
            height: 90%;
            column-gap: 1%;
            row-gap: 2.5%;
            padding: 1%;
        }

        .sidebar {
            grid-row-start: 2;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .openList {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 1;
            grid-column-end: 2;
            height: 100%;
            width: 100%;
        }
        .buttonWrapper {
            padding-top: 5%;
            padding-bottom: 5%;
        }
    }
</style>
