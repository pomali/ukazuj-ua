module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.{html,webmanifest,css,eot,svg,ttf,woff,woff2,js}'
	],
	swDest: '_site/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^source/
	]
};