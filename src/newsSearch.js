// TODO: use the framework to define a search project with Main.js as entrypoint

//import { SearchProject } from 'webmiddle-project-search';
import path from "path";
import fs from "fs";
import Main from "./Main";

// TODO: json can't specify functions for options, etc. Maybe use a js file?
const searchJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../search.json"))
);
const searchPrivateJson = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../search.private.json"))
);

const giveupErrorCodes = [410];
function isRetriable(err) {
  return (
    !(err instanceof Error && err.name === "HttpError") ||
    giveupErrorCodes.indexOf(err.statusCode) === -1
  );
}

export const searchProps = {
  ...(searchJson.searchProps || {}),
  ...(searchPrivateJson.searchProps || {})
};

const Start = props =>
  <Main
    {...{
      ...searchProps,
      ...props,
    }}
  />;

const contextOptions = {
  outputBasePath: path.resolve(__dirname, "../output"),
  verbose: false,
  ...(searchJson.contextOptions || {}),
  ...(searchPrivateJson.contextOptions || {}),
};

export { contextOptions };

export { Start };
