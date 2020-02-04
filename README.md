<h1>
  Firebase React Admin Biolerplate <sup><i>incl. GitHub Actions deploment</i></sup><br>
  <a href="https://discord.gg/uSv2EZ"><img src="https://img.shields.io/badge/chat-Discord-green.svg?style=social&amp;maxAge=3600" height="20"></a>
</h1>

**Firebase React Admin Biolerplate** is a project template (aka, boilerplate) for building
modern, scalable web applications with React using serverless infrastructure
provided by <a href="https://console.firebase.google.com/">Google Firebase</a>.
It allows you to save time and build upon a solid foundation and design patterns.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Tech Stack

- [Create React App][cra] (★ 76k) for development and test infrastructure (see [user guide][cradocs])
- [Material UI][mui] (★ 54k) to reduce development time by integrating Google's [Material Design][material]
- [React Dashboard][mui] (★ 2k) Free React Dashboard made with Material UI’s components
- [Reach Router][router] (★ 6k) for declarative routing and client-side navigation
- [React Dropzone][dropzone] (★ 7k) Simple React hook to create a HTML5-compliant drag'n'drop zone for files.
- [TypeScript][ts] (★ 58k) TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
- [Google Cloud][gcp] & [Firebase][firebase] for serverless architecture - Cloud SQL, Cloud Functions, CDN hosting, file storage ([docs][fbdocs])

Also, you need to be familiar with [HTML][html], [CSS][css], [JavaScript][js] ([ES2015][es2015]), [TypeScript][ts] and [React](https://reactjs.org/docs/).

### Prerequisites

- [Node.js][nodejs] v10.15 or higher + [Yarn][yarn] v1.17 or higher &nbsp; (_HINT: On Mac install
  them via [Brew][brew]_)
- [VS Code][vc] editor (preferred) + [EditorConfig][vceditconfig],
  [ESLint][vceslint], [Prettier][vcprettier], and [Babel JavaScript][vcjs] plug-ins
- [Watchman][watchman] file watcher used by Relay Modern
- [PostgreSQL][postgres] v9.6 or newer, only if you're planning to use a local db for development

### Getting Started

Just clone the repo, update environment variables in `.env` and/or `.env.local` file, and start
hacking:

```bash
$ git clone git@github.com:nightillusions/pushtrade-app-web.git MyApp
$ cd MyApp
$ yarn                             # Installs dependencies
$ yarn start                       # Compile the app and opens it in a browser with "live reload"
```

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>

<p align='center'><img src='https://camo.githubusercontent.com/506a5a0a33aebed2bf0d24d3999af7f582b31808/687474703a2f2f692e696d6775722e636f6d2f616d794e66434e2e706e67' width='600' alt='npm start'></p>

### How to Deploy

1. Copy `.github/workflows/main.yml`
   ...

For more information refer to the [Deployment](https://github.com/nightillusions/pushtrade-app-web/wiki/Deploment)
guide in the project's Wiki.

### How to Update

If you keep the original Git history after cloning this repo, you can always fetch and merge
the recent updates back into your project by running:

```bash
$ git remote add frab git@github.com:nightillusions/pushtrade-app-web.git
$ git checkout master
$ git fetch frab
$ git merge frab/master
$ yarn install
```

\_NOTE: Try to merge as soon as the new changes land on the `master` branch in the upstream
repository, otherwise your project may differ too much from the base/upstream repo.

### License

Copyright © 2015-present Kriasoft. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/kriasoft/react-firebase-starter/blob/master/LICENSE.txt) file.

---

Made with ♥ by Pascal Jordin ([website](https://jordin.eu))
[Get in touch!](https://jordin.eu)

[cra]: https://github.com/facebook/create-react-app
[cradocs]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md
[mui]: https://material-ui.com/
[rmd]: https://github.com/devias-io/react-material-dashboard
[material]: https://material.io/
[router]: https://github.com/reach/router
[firebase]: https://firebase.google.com/
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS
[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[es2015]: http://babeljs.io/learn-es2015/
[react]: https://facebook.github.io/react/
[dropzone]: https://react-dropzone.js.org/
[ts]: https://www.typescriptlang.org/
[rfs]: https://github.com/kriasoft/react-firebase-starter
[kriasoft]: https://github.com/kriasoft
[telegram]: https://t.me/ReactStarter
[psql]: https://www.postgresql.org/
[cloudsql]: https://cloud.google.com/sql/
[knex]: http://knexjs.org/
[gqljs]: http://graphql.org/graphql-js/
[relay]: http://facebook.github.io/relay/
[passport]: http://www.passportjs.org/
[relay]: https://facebook.github.io/relay/
[gcp]: https://cloud.google.com/
[fbdocs]: https://firebase.google.com/docs/web
[history]: https://github.com/ReactTraining/history
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[brew]: https://brew.sh/
[wm]: https://facebook.github.io/watchman/
[relaycompiler]: http://facebook.github.io/relay/docs/relay-compiler.html
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vcjs]: https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel
[watchman]: https://github.com/facebook/watchman
[postgres]: https://www.postgresql.org/
