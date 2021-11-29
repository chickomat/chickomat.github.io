
export default {
	mode: "spa",
	telemetry: false,
	head: {
		title: "Chickomat Projekt Jugend Forscht",
		meta: [
			{ charset: "utf-8", },
			{ name: "viewport", content: "width=device-width, initial-scale=1", },
			{ name: "google-site-verification", content: "", },
			{ hid: "description", name: "description", content: "Informationen und Bilder zum Jugend Forscht Projekt Chickomat. Von Jonathan Treffler, Janik Atzenbeck, Christoph Greger.", },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.jpg", },
			{ rel: "preload", href: "/fonts/Archistico.woff2", as: "font", type: "font/woff2", crossorigin: "", },
		],
		script: [
			{
				src: "https://cdn.jsdelivr.net/npm/mobile-detect@1.4.3/mobile-detect.min.js",
				type: "text/javascript",
			},
			{
				src: "https://www.googletagmanager.com/gtag/js?id=",
				type: "text/javascript",
			},
		],
	},
	loading: { color: "#fff", },
	css: [
		"css/global.css",
	],
	plugins: [
	],
	buildModules: [
		"@aceforth/nuxt-optimized-images",
	],
	optimizedImages: {
		optimizeImages: true,
	},
	modules: [
		"@nuxtjs/pwa",
	],
	pwa: {
		icon: {
			fileName: "logo.png",
			sizes: [ 64, 120, 144, 152, 192, 384, 512, ],
			purpose: [ "any", "maskable", ],
		},
		manifest: {
			name: "Chickomat",
			lang: "de",
			background_color: "#269",
		},
	},
	build: {
		extend() {
		},
	},
};
