<template>
	<div id="first_section" class="section blueprintBackground">
		<span id="main_headline">Der Chickomat</span>
		<svg
			id="scroll_button"
			xmlns="http://www.w3.org/2000/svg"
			width="75"
			height="75"
			viewBox="0 0 24 24"
			@click="scrollToSection2"
		><path fill="var(--blueprintColor)" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /><path fill="none" d="M0 0h24v24H0V0z" /></svg>
	</div>
</template>
<script>
export default {
	methods: {
		scrollToSection2() {
			const yPosition = document.getElementById('second_section').offsetTop;

			window.scroll({
				top: yPosition,
				behavior: 'smooth',
			});
		},
	},
};
</script>
<style>
	#first_section {
		min-width: 100%;
		min-height: 100%;
		display: grid;
		place-items: center;
	}
	.blueprintBackground {
		background-color: var(--blueprintColor);
		background-image: linear-gradient(rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.5) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.28) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.28) 1px, transparent 1px);
		background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
		background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
	}
	#main_headline {
		position: absolute;
		bottom: 50%;
		left: 50%;
		font-family: "archistico";
		color: white;
		vertical-align: middle;
		margin: 0px;
		transform: translate(-50%, 50%);
		width: 90%;
		text-align: center;
	}

	html:not(.phone) #main_headline {
		font-size: 100px;
	}

	html.phone #main_headline {
		font-size: 30px;
    overflow-wrap: break-word;
	}

	#scroll_button {
		position: absolute;
		bottom: 30px;
		border-radius: 100%;
		left: 50%;
		transform: translateX(-50%);
		background-color: white;
	}

	html.phone #scroll_button {
		display: none;
	}

	html:not(.mobile) #scroll_button:hover {
		background-color: lightgray;
	}
</style>
