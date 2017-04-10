// TODO: use the framework to define a search project with Main.js as entrypoint

import { evaluate, createContext } from 'webmiddle';
import newsSearchWebmiddle, { searchProps, evaluateOptions } from './newsSearchWebmiddle';
import Main from './Main';
import path from 'path';
import fs from 'fs';

evaluate(createContext(newsSearchWebmiddle, evaluateOptions), <Main {...searchProps} />)
.then(outputResource => {
  const outputFilename = path.resolve(
    newsSearchWebmiddle.setting('outputBasePath'),
    './newsSearch.json'
  );

  const outputContentString = JSON.stringify(outputResource.content, null, 2);

  fs.writeFileSync(outputFilename, outputContentString);
  console.log('Search completed, result saved!');
});
