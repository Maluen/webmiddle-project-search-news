import test from 'ava';
import newsSearchWebmiddle, { searchProps, evaluateOptions } from '../src/newsSearchWebmiddle';
import Main from '../src/Main';

test('Main', async t => {
  await newsSearchWebmiddle.evaluate((
    <Main {...searchProps} />
  ), evaluateOptions, {
    expectResource: true,
  });
});
