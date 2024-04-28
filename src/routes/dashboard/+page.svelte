<script>
    import Chart from "../(components)/Chart.svelte";
    import List from "../(components)/MoneyTable.svelte";
    import "../style.css";

    const data = [
        { x: 0, y: 24 },
        { x: 5, y: 7 },
        { x: 10, y: 14 },
        { x: 15, y: 35 },
        { x: 20, y: 13 },
        { x: 25, y: 19 },
        { x: 30, y: 27 },
        { x: 35, y: 11 },
        { x: 40, y: 9 },
        { x: 45, y: 28 },
        { x: 50, y: 33 },
        { x: 55, y: 20 },
        { x: 60, y: 8 },
    ];

    const data1 = [
        { x: 0, y: 16 },
        { x: 5, y: 29 },
        { x: 10, y: 4 },
        { x: 15, y: 22 },
        { x: 20, y: 9 },
        { x: 25, y: 31 },
        { x: 30, y: 3 },
        { x: 35, y: 27 },
        { x: 40, y: 18 },
        { x: 45, y: 5 },
        { x: 50, y: 13 },
        { x: 55, y: 26 },
        { x: 60, y: 7 },
    ];

    const listData = {
        cols: ["Name", "Sum", "Link"],
        data: [
            { name: "Bill", sum: -79, link: "https://link.de" },
            { name: "Alice", sum: 39, link: "https://link.de" },
            { name: "David", sum: 18, link: "https://link.de" },
            { name: "Grace", sum: 0, link: "https://link.de" },
            { name: "Eve", sum: -64, link: "https://link.de" },
            { name: "Charlie", sum: 88, link: "https://link.de" },
            { name: "Jerome", sum: 97, link: "https://link.de" },
            { name: "Bob", sum: -25, link: "https://link.de" },
        ],
    };
</script>

<div class="dashboard">
    <h1>
        Nothing here at the moment! <br />Manage your debts in the
        <a href="/dashboard/manage">manage</a> tab or edit your account in the
        <a href="/dashboard/account">account</a>
        tab
    </h1>
    <h1></h1>
</div>

<style>
    .dashboard {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100%;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .listWrapper {
        width: 100%;
        order: 1;
        margin-left: 1%;
        margin-right: 1%;
    }

    .wrapper {
        background-color: var(--color-bg-1);
        padding: 1%;
        border-radius: 30px;
        margin-left: 1%;
        margin-right: 1%;
        overflow: hidden;
    }

    h2 {
        z-index: 1;
        position: absolute;
        margin: 0;
        text-shadow:
            -1px -1px 0 var(--color-bg-1),
            1px -1px 0 var(--color-bg-1),
            -1px 1px 0 var(--color-bg-1),
            1px 1px 0 var(--color-bg-1);
    }

    a {
        color: var(--color-text);
    }

    h1 {
        text-align: center;
        font-size: 2.3em;
    }
</style>
