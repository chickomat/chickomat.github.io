<template>
	<div id="third_section" class="section blueprintBackground">
		<headline>Bilder der Maschine</headline>
		<div id="pictures_container">
			<gallery>
				<galleryImage id="1" src="1.jpg" alt="" />
				<galleryImage id="2" src="2.jpg" alt="" />
				<galleryImage id="3" src="3.jpg" alt="" />
				<galleryImage id="3" src="4.jpg" alt="" />
				<galleryImage id="3" src="5.jpg" alt="" />
			</gallery>
		</div>

		<headline>Verlauf</headline>
		<div id="history_container">
			<location content="Neumarkt / Regionalentscheid" />
			<date content="20. - 21.02.2016" />
			<gallery>
				<galleryImage id="1" src="6.jpg" alt="" source="Röhrl" />
			</gallery>
			<news-container>
				<news content="Mittelbayerische" href="https://www.mittelbayerische.de/region/regensburg-stadt/schulgeschichten-nachrichten/domspatzen-erfinden-den-chickomat-23482-art1344720.html" />
			</news-container>
			<spacer />

			<location content="Dingolfing / Landesentscheid" />
			<date content="18. - 19.04.2016" />
			<gallery>
				<galleryImage id="1" src="7.jpg" alt="" />
				<galleryImage id="2" src="8.jpg" alt="" />
				<galleryImage id="3" src="9.jpg" alt="" />
			</gallery>
			<spacer />
		</div>
	</div>
</template>
<script>
import Location from '~/components/Location.vue';
import Date from '~/components/Date.vue';
import News from '~/components/News.vue';
import NewsContainer from '~/components/NewsContainer.vue';
import Gallery from '~/components/Gallery.vue';
import GalleryImage from '~/components/GalleryImage.vue';
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
