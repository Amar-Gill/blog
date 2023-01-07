/** @type {import("@types/prettier").Options} */
module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	useTabs: false,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require.resolve("prettier-plugin-tailwindcss") /* Must come last */,
	],
	pluginSearchDirs: false,
	overrides: [
		{
			files: "**/*astro",
			options: {
				parser: "astro",
			},
		},
	],
};
