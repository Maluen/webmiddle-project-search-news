// TODO: use the framework to define a search project with Main.js as entrypoint

import { rootContext } from "webmiddle";
import { contextOptions, Start } from "./newsSearch";
import path from "path";
import fs from "fs";

rootContext.evaluate(<Start />, contextOptions).then(outputResource => {
  const outputFilename = path.resolve(
    contextOptions.outputBasePath,
    "./newsSearch.json"
  );

  const outputContentString = JSON.stringify(outputResource.content, null, 2);

  fs.writeFileSync(outputFilename, outputContentString);
  console.log("Search completed, result saved!");
});
