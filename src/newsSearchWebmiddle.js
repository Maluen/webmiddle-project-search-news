// TODO: use the framework to define a search project with Main.js as entrypoint

//import { SearchProject } from 'webmiddle-project-search';
import WebMiddle from 'webmiddle';
import path from 'path';
import fs from 'fs';

// TODO: json can't specify functions for settings, etc. Maybe use a js file?
const searchJson = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../search.json')
));
const searchPrivateJson = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '../search.private.json')
));

const giveupErrorCodes = [410];
function isRetriable(err) {
  return !(err instanceof Error && err.name === 'HttpError') ||
    giveupErrorCodes.indexOf(err.statusCode) === -1;
}

const newsSearchWebmiddle = new WebMiddle({
  settings: {
    outputBasePath: path.resolve(__dirname, '../output'),
    verbose: false,
    network: {
      retries: (err) => {
        if (!isRetriable(err)) return 0;
        return -1;
      },
    },
    ...(searchJson.webmiddleSettings || {}),
    ...(searchPrivateJson.webmiddleSettings || {}),
  },
});

export const evaluateOptions = {
  expectResource: true,
  ...(searchJson.evaluateOptions || {}),
  ...(searchPrivateJson.evaluateOptions || {}),
};

export const searchProps = {
  ...(searchJson.searchProps || {}),
  ...(searchPrivateJson.searchProps || {}),
};

export default newsSearchWebmiddle;
