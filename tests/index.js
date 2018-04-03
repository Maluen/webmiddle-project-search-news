import test from 'ava';
import webmiddle, { evaluate, createContext } from 'webmiddle';
import newsSearchContext, { Start } from '../src/newsSearch';

test('Main', async t => {
  await evaluate(createContext(newsSearchContext, {
    expectResource: true,
  }), (
    <Start />
  ));

  t.pass();
});
