<script lang="ts">
    import ProfileCard from "../../(components)/ProfileCard.svelte";
    import type { PageData } from "../$types";

    export let data: PageData;
</script>

<div class="wrapper">
    <div class="cardWrapper">
        <h1>{data.user.userName}</h1>
        <h1>{data.user.email}</h1>
        <h1>{data.user.creationDate}</h1>
        <h1>{data.user.userID}</h1>
        <ProfileCard />
    </div>
    <div class="settingsWrapper">

    </div>
</div>

<style>

</style>