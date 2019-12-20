![](https://github.com/minghz/top_role_front/workflows/Tests/badge.svg)

## About
This project aims to create a fully dynamic D&D character sheet. This means that any changes to a particular attribute in one location of the sheet will propagate to all of the other other affected areas of the sheet, thus rendering it fully "Reactive".

For example, increasing Strength attribute points will auto-update the attribute modifer, and the total bonus for all skill checks, and saving throws.

This will enable a fully dynamic character sheet, where you can tweak individual parts and have it be reflected immediately everywhere. No more need to create a character level-by-level from scratch!

## Technology
React, Jest, GithubActions, Javascript, HTML/CSS

## Data Source
Shamelessly parsed from [5e.tools source](https://github.com/TheGiddyLimit/TheGiddyLimit.github.io).
Also sticking to PHB sources for now.

## Setup
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Contributing
Send me pull requests :)
