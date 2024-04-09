<script lang="ts">
    import ProfileCard from "../../(components)/ProfileCard.svelte";
    import type { PageData } from "../$types";
    import AvatarList from "../../(components)/AvatarList.svelte";

    export let data: PageData;

    const mockFriends = [
  {
    image: "https://wallpapers.com/images/featured/image-79gc4p3mqu7an848.jpg",
    name: "Bill"
  },
  {
    image: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=",
    name: "David"
  },
  {
    image: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
    name: "Sophia"
  },
  {
    image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOV9jbG9zZV91cF9vZl9oYXBweV9lbGVwaGFudF9zaW1wbGVfbWluaW1hbF9jYV83MDhmZWM0MC05NjBmLTRiNmItODljZC1mZDYyYjkxYjM0MmRfMS5qcGc.jpg",
    name: "Liam"
  },
  {
    image: "https://thumbs.dreamstime.com/b/paris-eiffel-tower-river-seine-sunset-france-one-most-iconic-landmarks-107376702.jpg",
    name: "Isabella"
  },
  {
    image: "https://images.sportschau.de/image/f5591d46-a201-4659-ad02-836de66a235c/AAABjq_cF7U/AAABibBx4co/original/buehl-104.jpg",
    name: "Emma"
  },
  {
    image: "https://images.sportschau.de/image/0ea7607d-930a-4b59-8526-a199c1675159/AAABjpSxNxI/AAABibBx4co/original/pauli-130.jpg",
    name: "Frank"
  },
  {
    image: "https://t3.ftcdn.net/jpg/01/76/97/96/360_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg",
    name: "Ryan"
  },
  {
    image: "https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-193950.jpg",
    name: "Jack"
  },
  {
    image: "https://media.istockphoto.com/id/1161841968/photo/d-qld-sp-rise-sunlight-2-north.jpg?s=612x612&w=0&k=20&c=e51fEpicg3envmoKlfEkWkk2FeIhhw5THVEKGGvEJ-Q=",
    name: "Quinn"
  },
  {
    image: "https://media.gettyimages.com/id/936563406/vector/heart-shape.jpg?s=612x612&w=gi&k=20&c=ZnjalZSAVIUROxR2ZxqVs7XPAvUfnWu2owZsI8XIIxs=",
    name: "Charlie"
  }
];
</script>

<div class="wrapper">
    <div class="grid">
        <div class="cardWrapper">
            <ProfileCard name={data.user.userName} email={data.user.email} creationDate={new Date(data.user.creationDate)} logoutBtn={true}/>
        </div>
        <div class="settingsWrapper">
            <h2>Friends:</h2>
            <AvatarList images={mockFriends}/>
        </div>
    </div>
</div>

<style>
    .wrapper {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .grid {
        height: 70%;
        width: 70%;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 60% 20%;
        grid-row-gap: 1%;
        grid-column-gap: 1%;
    }

    .cardWrapper {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .settingsWrapper {
        background-color: var(--color-bg-1);
        border-radius: 30px;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }
</style>