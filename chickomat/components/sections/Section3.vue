<template>
	<div class="section blueprintBackground" id="third_section">
		<headline>Bilder der Maschine</headline>
		<div id="pictures_container">
			<gallery>
				<galleryImage id="1" src="1.jpg" alt=""></galleryImage>
				<galleryImage id="2" src="2.jpg" alt=""></galleryImage>
				<galleryImage id="3" src="3.jpg" alt=""></galleryImage>
                <galleryImage id="3" src="4.jpg" alt=""></galleryImage>
				<galleryImage id="3" src="5.jpg" alt=""></galleryImage>
			</gallery>
		</div>

        <headline>Verlauf</headline>
		<div id="history_container">
			<location content="Neumarkt / Regionalentscheid"></location>
			<date content="20. - 21.02.2016"></date>
			<gallery>
				<galleryImage id="1" src="6.jpg" alt="" source="Röhrl"></galleryImage>
			</gallery>
			<news-container>
				<news content="Mittelbayerische" href="https://www.mittelbayerische.de/region/regensburg-stadt/schulgeschichten-nachrichten/domspatzen-erfinden-den-chickomat-23482-art1344720.html"></news>
			</news-container>
			<spacer></spacer>

			<location content="Dingolfing / Landesentscheid"></location>
			<date content="18. - 19.04.2016"></date>
			<gallery>
				<galleryImage id="1" src="7.jpg" alt=""></galleryImage>
				<galleryImage id="2" src="8.jpg" alt=""></galleryImage>
				<galleryImage id="3" src="9.jpg" alt=""></galleryImage>
			</gallery>
			<spacer></spacer>
		</div>
	</div>
</template>
<script>
	import Location from '~/components/Location.vue';
	import Date from '~/components/Date.vue';
	import News from '~/components/News.vue';
	import NewsContainer from '~/components/NewsContainer.vue';
	import Gallery from '~/components/Gallery.vue'
	import GalleryImage from '~/components/GalleryImage.vue'
	import Spacer from '~/components/Spacer.vue'
	import Headline from '~/components/Headline.vue'

	export default {
		components: {
			Location,
			Date,
			News,
			NewsContainer,
			Gallery,
			GalleryImage,
			Spacer,
			Headline,
		},
	};
</script>
<style>
	#pictures_container{
		display: flex;
		flex-flow: column;
		flex-wrap: nowrap;
	}
</style>