module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,webmanifest,css,eot,svg,ttf,woff,woff2,js}'
	],
	swDest: '_site/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^source/
	]
};