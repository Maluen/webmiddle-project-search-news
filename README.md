# webmiddle-project-search-news

> [webmiddle](https://webmiddle.github.io/) application for searching articles from news sites

## NOTE: THIS PROJECT IS DEPRECATED AS IS NOT SUPPORTED ANYMORE.

Currently supported sites:
- [The New York Times](https://github.com/Maluen/webmiddle-site-nytimes)
- [Fox News](https://github.com/Maluen/webmiddle-site-foxnews)

## Install

Clone this repository, then:

```sh
npm install
npm run build
```

## Usage

- Set the search options in the `search.json` file.
- Set your api keys in the `search-private.json` file.
- Run the application by executing `node dist`.

The result will be saved in JSON format in the `output/newsSearch.json` file.

## Resuming

The application uses the [Resume](https://github.com/webmiddle/webmiddle/tree/master/packages/webmiddle-component-resume) component, this means that the search will be resumed
in case the process is stopped before the search is complete (crash, etc.).

To start a fresh new search, just delete the `output` folder.

## Learn more

Head to https://webmiddle.github.io/docs/example/ for a step-by-step guide on how this application was implemented by using [webmiddle](https://webmiddle.github.io/).

## Screenshots

#### Console output:

![Console output](https://webmiddle.github.io/assets/img/documentation/sample_execution_console.png)

#### JSON output:

![JSON output](https://webmiddle.github.io/assets/img/documentation/sample_execution_output.png)
