// TODO: use the framework to define a search project with Main.js as entrypoint

import WebMiddle, { evaluate, createContext } from "webmiddle";
import newsSearchContext from "./newsSearchContext";
import path from "path";
import fs from "fs";

const Start = newsSearchContext.webmiddle.service("start");
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
