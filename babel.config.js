module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['.'],
					extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
					alias: {
						'@components': './src/components',
						'@pages': './src/pages',
						'@routes': './src/routes',
						'@services': './src/services',
						'@styles': './src/styles',
					},
				},
			],
		],
	};
};
