<script lang="ts">
	export let showModal: boolean; // boolean

	let dialog: HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
	dialog {
		width: 50%;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		background-color: var(--color-bg-1);
		border-radius: 30px;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
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
		dialog {
			width: 100%;
			padding: 5%;
		}
	}
</style>
