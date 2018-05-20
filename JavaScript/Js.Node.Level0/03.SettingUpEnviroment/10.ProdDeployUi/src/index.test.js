import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';/**FileSystem*/

describe("FirstTest", () => {
  it("Should Always Pass", () => {
    expect(true).to.equal(true);
  });
});

describe("Index.html Test", () => {
  /**JsDom Test Asynchronously,Use doneCallback To Notify Mocha That Test Is Done*/
  it("Should Say Welcome To Javascript Development Environment 2018", (doneCallback) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h2text = window.document.getElementsByTagName('h2')[0];
      expect(h2text.innerHTML).to.equal("Welcome To Javascript Development Environment 2018");
      doneCallback();
      window.close();
    });
  });
});
