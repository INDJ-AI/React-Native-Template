module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
				alias: {
						'@': '.',
						'@/apis': './apis',
						'@/assets': './assets',
						'@/components': './components',
						'@/configs': './configs',
						'@/containers': './containers',
						'@/hooks': './hooks',
						'@/redux': './redux',
						'@/styles': './styles',
						'@/types': './types',
						'@/utils': './utils',
						'@/views': './views',
					},
			},
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: "@env",
				path: "src/configs/env/.env.dev",
				blocklist: null,
				allowlist: null,
				safe: false,
				allowUndefined: true,
			},
		]
	]
};
