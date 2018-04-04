import test from 'ava';
import { rootContext } from 'webmiddle';
import { contextOptions, Start } from '../src/newsSearch';

test('Main', async t => {
  await rootContext.extend({
    ...contextOptions,
    expectResource: true,
  }).evaluate(
    <Start />
  );

  t.pass();
});
