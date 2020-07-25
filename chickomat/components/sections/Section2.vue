<template>
	<div class="section" id="second_section">
		<headline>About</headline>
		<p class="about_text">Landwirte sind beim Verreisen eingeschränkt, weil sie Tiere versorgen müssen.</p>
		<p class="about_text">Darunter zählt auch das Füttern. Um mehr Flexibilität zu bieten haben wir einen vollautomatischen Tierfütterautomat für Hühner entwickelt und gebaut.</p>
		<p class="about_text">Er übernimmt die Versorgung der Hühner mit Futter und Wasser vollautomatisch.</p>
		<p class="about_text">Dazu können täglich bis zu zwei Fütterungen mit programmierten Zeitschaltuhren eingestellt werden.</p>
		<p class="about_text">Die Elektronik basiert auf einem Arduino und einem Raspberry Pi. Die Software wurde mit Processing geschrieben.</p>
	</div>
</template>
<script>
	import Headline from "~/components/Headline.vue";

	export default {
		components: {
			Headline,
		},
	};
</script>
<style>
	#second_section{
		width: 100%;
		background-color: white;
	}
	.about_text{
			margin-bottom: 2px;
			margin-top: 2px;
			margin-left: 10%;
			margin-right: 10%;
			font-size: 26px;
	}
</style>
