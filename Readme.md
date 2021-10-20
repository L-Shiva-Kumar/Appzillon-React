# Environment and Project Setup

```bash
git rm --cached config/default.json
```

	1. Install Node JS
	2. Create a folder, cmd - 
	```bash 
	mkdir <folder-name> 
	```
	3. Inside the folder run cmd - ```bash 
	npm init ``` (to create a project with meta-data like name, description, author, etc...)
	4. Install React Dev Depenencies, run cmd - ```bash npm i -D @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader
	style-loader css-loader sass sass-loader webpack webpack-cli webpack-dev-server@3.11.1 html-webpack-plugin jest enzyme babel-jest react-test-renderer ```
	5. Install React Dependencies, run cmd - ```bash npm i react react-dom axios redux redux-thunk react-redux redux-devtools-extension ```
	6. Create a folder name `src`
	7. Create a file named `.babelrc` and define the presets in it
		`{
    		"presets": ["@babel/preset-env", "@babel/preset-react"]
		}`
	8. Create a file named `webpack.config.js` and define the configure the rules
		`const path = require('path');
		const HtmlWebpackPlugin = require('html-webpack-plugin');
		
		module.exports = [
			{
				mode: 'development',
				devtool: 'inline-source-map',
				entry: './src/index.js',
				output: {
					path: path.join(__dirname, '/dist'),
					filename: 'index.bundle.js',
				},
				devServer: {
					port: 3000,
					open: true,
					hot: true
				},
				module: {
					rules: [
						{
							test: /\.(js|jsx)$/,
							exclude: /node_modules/,
							use: {
								loader: "babel-loader"
							}
						},
						{
							test: /\.scss$/,
							use: ["style-loader", "css-loader", "sass-loader"]
						}
					]
				},
				resolve: { extensions: ["*", ".js", ".jsx"] },
				plugins: [
					new HtmlWebpackPlugin({
						template: './src/index.html',
					}),
				],
				performance: {
					hints: "warning"
				},
				stats: {
					preset: "errors-only",
					// logging: true,
					// loggingDebug: /webpack/,

					errors: true,
					// show errors
					errorDetails: true,
					// show details for errors
					errorStack: true,
					// show internal stack trace for errors
					moduleTrace: true,
					// show module trace for errors
					// (why was causing module referenced)

					builtAt: true,
					// show timestamp in summary
					errorsCount: true,
					// show errors count in summary
					warningsCount: true,
					// show warnings count in summary
					timings: true,
					// show build timing in summary
					version: true,
					// show webpack version in summary
				}
			},
			{
				mode: 'production',
				entry: './src/index.js',
				output: {
					path: path.join(__dirname, '/dist'),
					filename: 'index.bundle.js',
				},
				module: {
					rules: [
						{
							test: /\.(js|jsx)$/,
							exclude: /node_modules/,
							use: {
								loader: "babel-loader"
							}
						},
						{
							test: /\.scss$/,
							use: ["style-loader", "css-loader", "sass-loader"]
						}
					]
				},
				resolve: { extensions: ["*", ".js", ".jsx"] },
				plugins: [
					new HtmlWebpackPlugin({
						template: './src/index.html',
					}),
				],
			}
		];`
	9. Add start and build into script tag of `package.json` for serving and building the react app
		    `{
				"start": "webpack serve --mode development",
    			"build": "webpack --mode production"
			}`
	10. Create a file named `index.html` in src folder and copy the delow code
			`<!DOCTYPE html>
			<html lang="en">

			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
			</head>

			<body>
				<div id="root">

				</div>
			</body>

			</html>`
	11. Create a file named `index.js` in `src` folder and copy the below code.
			`import React from 'react';
			import ReactDom from 'react-dom';

			ReactDom.render(<div>This is a react app</div>, document.getElementById('root'))`
			
			Note: Replace the Div tag and it's content by placing a component there
	12. open cmd and navigate to the above folder and then run cmd - ```bash npm run start ```
	13. Integrating the testing framework, install by running cmd - ```bash npm i -D jest babel-jest react-test-renderer enzyme enzyme-adapter-react-16 enzyme-to-json ```
	14. Configure `package.json` by adding test into script tag
	 	`{
			test: 'jest'
		}
		and also add tag -
		"jest": {
  			"snapshotSerializers": ["enzyme-to-json/serializer"]
		}`
		anywhere inside the `package.json` object to serialize the snapshots
	15. Configure Enzyme by creating a file name `setupTests.js` file at `./src/setupTests.js` and add the below code in the file
			`import { configure } from 'enzyme';
			import Adapter from 'enzyme-adapter-react-16';
			configure({ adapter: new Adapter() });`
		and also add this script inside the "jest" script after "snapshotSerializers" in `package.json` - `"setupFilesAfterEnv": ["<rootDir>src/setupTests.js"]`
	16. To run tests just run the cmd - ```bash npm run test ```
	17. Jest will look for tests in any of the following places:
			Files with `.js` suffix in `__tests__` folders.
			Files with `.test.js` suffix.
			Files with `.spec.js` suffix.
		Hence, naming and arranging files is upto your convenient convention
	18. Jest Creates the snapshots only once, if you wanted to update the snapshots then run cmd - ```bash npm run test -- ```
