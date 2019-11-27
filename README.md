
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Image to Base64 Converter Project

Basically, the project is to convert images to Base64 (DataURI) code output to use it in templates or CSS files directly.
`Image to Base64 Converter` project authored by Osman Fikret Ceylan to help open-source community. 

## Usage

### Using the project on live environment

The final app hosted on [https://base64.pictures](https://base64.pictures).

### Using the project on local environment and using it on Stackblitz

Simply go to this URL: [https://stackblitz.com/github/ofcyln/image-to-base64](https://stackblitz.com/github/ofcyln/image-to-base64)

Stackblitz can only show you the visible UI of the project without cloning it to your local environment. Please not that, for security reasons `Stackblitz` doesn't show images, fonts or font icons that used on the project.

----------------

Run these commands in the terminal to run the app on your local environment

    git clone https://github.com/ofcyln/image-to-base64.git

    npm install

    npm start

or if you use yarn as package manager

    git clone https://github.com/ofcyln/image-to-base64.git

    yarn

    yarn start

### Development server

Run `npm start` or `yarn start` for a dev server to initialize. 
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running scripts 

To build the app in `Ahead-Of-Time compilation` you need to run `yarn build:prod` or `npm run build:prod`

To run linter and check the code over tslint rules simply run `yarn lint` or `npm run lint`

### Code scaffolding

Run `ng generate component component-name` to generate a new component. If you don't have `@angular/cli` as a global package on your system, you can run `npx ng generate component component-name`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `yarn build:prod` or `npm run build:prod` to build the project. 
The build artifacts will be stored in the `dist/` directory.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## App's Architecture
*   Used latest Angular CLI v8.1.2

*   Used code scaffolding for effective working and clean development environment. Specialized `build`, `deploy`, `lint`, `pre-commit` scripts added to package.json.

*   `lint-staged` script cleans and checks the `TypeScript`, `SCSS` codes before committing any changes to the repository. `prettier`, `stylelint` and `tslint` plugins run in this script.

*   Image to Base64 Converter Project has one major component, 3 shared minor components, one directive and one shared service. 
Major component is **`Converter Component`** - _Responsible converting images to Base64 (DataURI)_, 
Minor components are **`Footer Component`**, **`Header Component`**, **`Not Found Component`**  -wildcard routing redirection component, 404 page-_.
Directive is **`DragDrop Directive`** and the service is **`Alert Service`**.

*   Used `SCSS` as a CSS preprocessor to write efficient CSS codes.

*   Used new generation `JavaScript (ES6+)` with `TypeScript`.

*   Used latest `Bootstrap v4.3.1` version to integrate powerful responsive design powered by CSS FlexBox model.

*   Used `semantic` HTML tags and elements with semantic class names.

*   Modular components created for reusing components elsewhere to improve modularity in the app.

*   Used readonly private properties to prevent magic numbers and strings in the project where it needed into the methods.

*   Instead of using images for icons, font icons are integrated into the project with `Fontello` icon package. `Fontello` just includes preferred icons, this helps to balance the file size of the icon package.

*   The app has multiple icons for various Android, IOS devices.

*   Modular components created for reusing components elsewhere to improve modularity in the app.

*   PWA integration has been made for the installation of the app to the devices which supports installation.

## Motivation of Choices on Implementation

*   The upload area is being activated immediately by dragging an image on it. Also, images can be uploaded by upload button as well.

*   In case of navigating to a page which doesn't exist in the app, a `wildcard route (404)` is integrated to the project. It redirects users to the `Not Found` page. 

*   If a user doesn't authenticate, page routing redirects users to the `Login` page to be authenticated. After authorization, with the help of the routerSnapshot queryParams, the user can continue to browsing.

*   Mobile device UI behaviours designed to improve User Experience in a performing way and coded with the usage of the @media queries.

*   `PWA` support helps users to install the app on their mobile phone and make them use it as a native app. With the integration of `PWA`, it is possible to use the app even if there is no connection to the internet. The offline mode makes the app run under unexpected circumstances. `PWA` integration caches the files with the developer choices. Mostly static files for example image files, icons, font libraries etc.

*   `Angular production build configuration` is used for optimizing bundle, using tree-shaking, aot compilation, compression.

*   The total bundle size of the app is `~385KB` including all CSS, JS, FONT, ICONS for PWA and HTML files.
