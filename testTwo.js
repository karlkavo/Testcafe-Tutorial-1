import { Selector } from 'testcafe';

fixture`Example page`.page`http://127.0.0.1:5500/thd/test.html`;

test('Check property of element', async (t) => {
  await t.click('#macos').wait(2000);
});
