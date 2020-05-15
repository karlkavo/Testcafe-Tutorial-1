import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

test('My first test', async (t) => {
  await t
    .typeText('#developer-name', 'Karl Kavanagh')
    .wait(2000)

    .click('#tried-test-cafe')
    .wait(2000)

    .click('#macos')
    .wait(2000)

    .typeText(
      '#comments',
      'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!'
    )
    .wait(2000)

    .click('#submit-button')
    .wait(2000)

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, Karl Kavanagh!')
    .wait(2000);
});
