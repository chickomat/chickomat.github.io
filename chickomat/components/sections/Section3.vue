<template>
	<div id="third_section" class="section blueprintBackground">
		<headline>Bilder der Maschine</headline>
		<div id="pictures_container">
			<gallery>
				<galleryImage src="1.jpg" alt="" />
				<galleryImage src="2.jpg" alt="" />
				<galleryImage src="3.jpg" alt="" />
				<galleryImage src="4.jpg" alt="" />
				<galleryImage src="5.jpg" alt="" />
			</gallery>
		</div>

		<headline>Verlauf</headline>
		<div id="history_container">
			<location content="Neumarkt / Regionalentscheid" />
			<date content="20. - 21.02.2016" />
			<gallery>
				<galleryImage src="6.jpg" alt="" source="Röhrl" />
			</gallery>
			<news-container>
				<news content="Mittelbayerische" href="https://www.mittelbayerische.de/region/regensburg-stadt/schulgeschichten-nachrichten/domspatzen-erfinden-den-chickomat-23482-art1344720.html" />
			</news-container>
			<spacer />

			<location content="Dingolfing / Landesentscheid" />
			<date content="18. - 19.04.2016" />
			<gallery>
				<galleryImage src="7.jpg" alt="" />
				<galleryImage src="8.jpg" alt="" />
				<galleryImage src="9.jpg" alt="" />
			</gallery>
			<spacer />
		</div>
	</div>
</template>
<script>
import Gallery from 'modern-vue-gallery/src/Gallery.vue';
import GalleryImage from 'modern-vue-gallery/src/GalleryImage.vue';
import Location from '~/components/Location.vue';
import Date from '~/components/Date.vue';
import News from '~/components/News.vue';
import NewsContainer from '~/components/NewsContainer.vue';
import Spacer from '~/components/Spacer.vue';
import Headline from '~/components/Headline.vue';

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
