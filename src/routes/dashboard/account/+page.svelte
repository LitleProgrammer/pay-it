<script lang="ts">
  import ProfileCard from "../../(components)/ProfileCard.svelte";
  import type { PageData } from "../$types";
  import AvatarList from "../../(components)/AvatarList.svelte";
  import Modal from "../../(components)/Modal.svelte";
  import type { PageData, ActionData } from "./$types";
  import MailInput from "../../(components)/MailInput.svelte";
  import SubmitButton from "../../(components)/SubmitButton.svelte";

  export let data: PageData;
  export let form: ActionData;

  let showModal: boolean;
  let showRequestModal: boolean;
</script>

<div class="wrapper">
  {#if form?.alreadyFriend}
    <div class="error">
      <p>This user is already your friend.</p>
    </div>
  {/if}
  {#if form?.notExistent}
    <div class="error">
      <p>This user does not exist.</p>
    </div>
  {/if}
  {#if form?.cantSelf}
    <div class="error">
      <p>You can't send yourself a friend request.</p>
    </div>
  {/if}
  {#if form?.alreadyRequested}
    <div class="error">
      <p>This user already has a pending frined request from you.</p>
    </div>
  {/if}

  <div class="grid">
    <div class="cardWrapper">
      <ProfileCard user={data.user} logoutBtn={true} />
    </div>
    <div class="wrappidy">
      <div class="settingsWrapper">
        <h2>Friends:</h2>
        <AvatarList friends={data.friends} />

        <Modal bind:showModal>
          <form method="post" action="?/addFriend">
            <MailInput
              name="email"
              id="email"
              placeholder="E-Mail"
              required
              style="width:90%"
            /><br />
            <SubmitButton>Add Friend</SubmitButton>
          </form>
        </Modal>
        <button on:click={() => (showModal = true)}>Add Friend</button>

        <button on:click={() => (showRequestModal = true)}
          >Show open requests</button
        >

        <Modal bind:showModal={showRequestModal}>
          <div class="modal">
            {#each data.incomingFriends as friend, i}
              <div class="avatarWrapper">
                <div class="inlineBtns">
                  <form method="post" action="?/acceptRequest">
                    <input
                      type="hidden"
                      name="friendName"
                      id="friendName"
                      value={friend.userName}
                    />
                    <button type="submit" class="friendRequestActionBtn tick"
                      ><svg
                        height="169px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g><g id="SVGRepo_iconCarrier">
                          <path
                            d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                            stroke="#000000"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g></svg
                      ></button
                    >
                  </form>
                  <form method="post" action="?/denyRequest">
                    <input
                      type="hidden"
                      name="friendName"
                      id="friendName"
                      value={friend.userName}
                    />
                    <button type="submit" class="friendRequestActionBtn cross"
                      ><svg
                        height="256px"
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#000000"
                        stroke-width="0.00024000000000000003"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke="#CCCCCC"
                          stroke-width="0.048"
                        ></g><g id="SVGRepo_iconCarrier">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"
                            fill="#000000"
                          ></path>
                        </g></svg
                      ></button
                    >
                  </form>
                </div>
                {#if friend.picture}
                  <img
                    src={friend.picture}
                    alt="Useravatar"
                    class="userAvatarModal"
                  />
                  <!-- using this custome variable to set the z-index to get the stacking look-->
                {:else}
                  <img
                    src="https://api.dicebear.com/8.x/identicon/png?seed={user.userName}&backgroundColor=b6e3f4,c0aede,d1d4f9&size=128"
                    alt="Useravatar"
                    class="userAvatarModal"
                  />
                  <!-- using this custome variable to set the z-index to get the stacking look-->
                {/if}
                <p>{friend.userName}</p>
              </div>
            {/each}
          </div>
        </Modal>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid {
    height: 70%;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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

  .friendRequestActionBtn {
    background-color: rgb(0, 0, 0, 0);
    width: 100%;
    border: none;
  }

  .friendRequestActionBtn svg {
    height: 45px;
  }

  .tick path {
    stroke: var(--color-green);
  }

  .cross path {
    stroke: var(--color-red);
    fill: var(--color-red);
  }

  .error {
    position: absolute;
    top: 0;
    background-color: var(--color-red);
    border-radius: 30px;
    padding-left: 1%;
    padding-right: 1%;
    margin-top: 1%;
    font-size: 1.5em;
    animation-name: disapear;
    animation-duration: 6s;
    animation-iteration-count: 1;
    opacity: 0;
  }

  @keyframes disapear {
    0% {
      opacity: 1;
      display: block;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media screen and (max-width: 991px) {
    /* start of large tablet styles */
  }

  @media screen and (max-width: 767px) {
    /* start of medium tablet styles */
  }

  @media screen and (max-width: 479px) {
    /* start of phone styles */
    body {
      overflow: scroll;
    }

    .grid {
      height: 100dvh;
      width: 100%;
      margin-top: 15%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 1%;
      grid-column-gap: 1%;
    }

    .cardWrapper {
      width: 100%;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .settingsWrapper {
      background-color: var(--color-bg-1);
      width: max-content;
      border-radius: 30px;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    .wrappidy {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
