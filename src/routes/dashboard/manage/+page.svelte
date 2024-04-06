<script>
    import Table from '../(components)/ManageTable.svelte';
    import '../../style.css';
    import Fa from 'svelte-fa';
    import { faPlus } from '@fortawesome/free-solid-svg-icons';
    import Modal from '../(components)/Modal.svelte';
    import SearchInput from '../(components)/SearchInput.svelte';

    const listData = {
        cols: ["Debtor", "", "Creditor", "Sum", "Reason"],
        data: [
            {name: "Bill", sum: -79, reason: "https://link.de", direction: "<"},
            {name: "Alice", sum: 39, reason: "https://link.de", direction: ">"},
            {name: "David", sum: 18, reason: "https://link.de", direction: ">"},
            {name: "Grace", sum: 0, reason: "https://link.de", direction: ">"},
            {name: "Eve", sum: -64, reason: "https://link.de", direction: "<"},
            {name: "Charlie", sum: 88, reason: "https://link.de", direction: ">"},
            {name: "Jerome", sum: 97, reason: "https://link.de", direction: ">"},
            {name: "Bob", sum: -25, reason: "https://link.de", direction: "<"},
            {name: "Bill", sum: -79, reason: "https://link.de", direction: "<"},
            {name: "Alice", sum: 39, reason: "https://link.de", direction: ">"},
            {name: "David", sum: 18, reason: "https://link.de", direction: ">"},
            {name: "Grace", sum: 0, reason: "https://link.de", direction: ">"},
            {name: "Eve", sum: -64, reason: "https://link.de", direction: "<"},
            {name: "Charlie", sum: 88, reason: "https://link.de", direction: ">"},
            {name: "Jerome", sum: 97, reason: "https://link.de", direction: ">"},
            {name: "Bob", sum: -25, reason: "https://link.de", direction: "<"},
            {name: "Bill", sum: -79, reason: "https://link.de", direction: "<"},
            {name: "Alice", sum: 39, reason: "https://link.de", direction: ">"},
            {name: "David", sum: 18, reason: "https://link.de", direction: ">"},
            {name: "Grace", sum: 0, reason: "https://link.de", direction: ">"},
            {name: "Eve", sum: -64, reason: "https://link.de", direction: "<"},
            {name: "Charlie", sum: 88, reason: "https://link.de", direction: ">"},
            {name: "Jerome", sum: 97, reason: "https://link.de", direction: ">"},
            {name: "Bob", sum: -25, reason: "https://link.de", direction: "<"}
        ]
    }

    const mockNames = [
      "Alice",
      "Bob",
      "Catherine",
      "David",
      "Emily",
      "Frank",
      "Grace",
      "Henry",
      "Ivy",
      "Jack",
      "Kate",
      "Liam",
      "Mia",
      "Noah",
      "Olivia",
      "Peter",
      "Quinn",
      "Rachel",
      "Samuel",
      "Tracy",
      "Uma",
      "Vincent",
      "Wendy",
      "Xavier",
      "Yvonne",
      "Zachary",
      "Adam",
      "Bella",
      "Carlos",
      "Diana",
      "Ethan",
      "Fiona",
      "George",
      "Hannah",
      "Isaac",
      "Jasmine",
      "Kevin",
      "Linda",
      "Michael",
      "Natalie",
      "Oscar",
      "Penelope",
      "Quincy",
      "Rebecca",
      "Samantha",
      "Thomas",
      "Ursula",
      "Violet",
      "William",
      "Xena",
      "Yolanda",
      "Zoe",    
    ];

    let showModal = false;
</script>

<div class="manage">
    <div class="infoBlock wrapper">
        
    </div>
    
    <div class="sidebar wrapper">
        <div class="buttonWrapper">
            <button on:click={() => (showModal = true)}><Fa icon={faPlus}  size="6x" /></button>
            <div class="modalWrapper">
                <Modal bind:showModal>
                    <form method="POST">
                        <SearchInput placeholder="User" data={mockNames}/>
                    </form>
                </Modal>
            </div>
        </div>
    </div>
    
    <div class="openList wrapper">
        <Table data={listData}/>
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

    .sidebar button {
        border-radius: 40px;
        border: none;
        width: 40%;
        background-color: var(--color-bg-0);
        transition: 0.2s linear;
        color: var(--color-text);
    }

    .sidebar button:hover {
        cursor: pointer;
        background-color: var(--hover);
    }

    .openList {
        grid-row-start: 2;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
        height: 100%;
        width: 100%;
    }

</style>