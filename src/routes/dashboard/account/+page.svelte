<script lang="ts">
    import ProfileCard from "../../(components)/ProfileCard.svelte";
    import type { PageData } from "../$types";
    import AvatarList from "../../(components)/AvatarList.svelte";
    import Modal from "../../(components)/Modal.svelte";

    export let data: PageData;
    let showModal: boolean;
    let showRequestModal: boolean;

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
    name: "Fanti Bear"
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

const mockRequests = [
  "254365dc-31a1-4e13-999b-0d5f1232b069"
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

            <Modal bind:showModal>
              <form method="post" action="?/addFriend">
                <input type="email" name="email" id="email" placeholder="E-Mail" required><br>
                <button type="submit">Add Friend</button>
              </form>
            </Modal>
            <button on:click={() => showModal = true}>Add Friend</button>

    
            <button on:click={() => showRequestModal = true}>Show open requests</button>


            <Modal bind:showModal={showRequestModal}>
              <div class="modal">
                {#each mockFriends as {image, name}, i}
                <div class="avatarWrapper">
                    <div class="inlineBtns">
                      <form method="post" action="?/acceptRequest">
                        <input type="hidden" name="friendName" id="friendName" value={name}>
                        <button type="submit" class="friendRequestActionBtn tick"><svg height="169px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></button>
                      </form>
                      <form method="post" action="?/denyRequest">
                        <input type="hidden" name="friendName" id="friendName" value={name}>
                        <button type="submit" class="friendRequestActionBtn cross"><svg height="256px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z" fill="#000000"></path> </g></svg></button>
                      </form>
                    </div>
                    <img src={image} alt="Useravatar" class="userAvatarModal">
                    <p>{name}</p>
                </div>
                {/each}
              </div>
            </Modal>
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
        width: 100%;
        height: 100%;
        background-color: var(--color-bg-1);
        border-radius: 30px;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        display: flex;
        align-items: center;
        flex-direction: column;
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
        margin: 1%;
        transition: scale 0.3s;
    }

    button:hover {
        background-color: var(--color-bg-2);
        cursor: pointer;
        scale: 1.07;
    }

    form {
      text-align: center;
    }

    input {
        width: 100%;
        padding-top: 1%;
        padding-bottom: 1%;
        font-size: 1.2em;
        border: 2px solid var(--color-bg-0);
        border-radius: 5px;
        background-color: var(--color-bg-1);
        color: var(--color-text);
    }

    a {
      cursor: pointer;
      text-decoration: underline;
    }

    .modal {
        display: flex;
        flex-wrap: wrap;
    }

    .avatarWrapper {
        margin: 1%;
        color: var(--color-text);
        text-align: center;
    }

    .avatarWrapper p {
        margin-top: 4%;
    }

    .inlineBtns {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    .userAvatarModal {
        width: var(--avatar-size);
        height: var(--avatar-size);
        object-fit: cover;
        border-radius: 50%;
        margin: 1%;
        
    }

    .friendRequestActionBtn{
      background-color: rgb(0, 0, 0, 0);
      width: 100%;
      border: none;
    }

    .friendRequestActionBtn svg{
      height: 45px;
    }
    
    .tick path{
      stroke: var(--color-green);
    }

    .cross path {
      stroke: var(--color-red);
      fill: var(--color-red);
    }
</style>