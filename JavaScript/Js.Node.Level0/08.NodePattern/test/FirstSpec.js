const assert = require('assert');
const moment = require('moment');

describe('First Feature', () => {
    before(function () {
        console.log(`Before Invoked ${moment()}`);
    });
    describe('First Scenario', () => {
        it('Feature>Scenario Does Something Expected', () => assert(true));
    });
});

describe('User Registration Feature', () => {
    before(function () {
        console.log(`Before Invoked ${moment()}`);
    });
    describe('New User Signup Scenario Email,Name,Age', () => {
        it('Feature>Scenario Signup With Email');
        it('Feature>Scenario Signup With Name');
        it('Feature>Scenario Signup With Age');
    });
});

describe('Third Feature', () => {
    describe('Third Scenario', () => {
        it.skip('01.Feature>Scenario Does Something Expected', () => assert(true));
        it.skip('02.Feature>Scenario Does Something Expected', () => assert(true));//  only
    });
});