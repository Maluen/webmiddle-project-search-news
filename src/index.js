// TODO: use the framework to define a search project with Main.js as entrypoint

import webmiddle, { evaluate, createContext } from "webmiddle";
import { context as newsSearchContext, Start } from "./newsSearch";
import path from "path";
import fs from "fs";

const context = createContext(newsSearchContext);
evaluate(context, <Start />).then(outputResource => {
  const outputFilename = path.resolve(
    context.options.outputBasePath,
    "./newsSearch.json"
  );

  const outputContentString = JSON.stringify(outputResource.content, null, 2);

  fs.writeFileSync(outputFilename, outputContentString);
  console.log("Search completed, result saved!");
});
