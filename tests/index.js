import test from 'ava';
import { evaluate, createContext } from 'webmiddle';
import newsSearchWebmiddle, { searchProps, evaluateOptions } from '../src/newsSearchWebmiddle';
import Main from '../src/Main';

test('Main', async t => {
  await evaluate(createContext(newsSearchWebmiddle, {
    ...evaluateOptions,
    expectResource: true,
  }), (
    <Main {...searchProps} />
  ));
});
