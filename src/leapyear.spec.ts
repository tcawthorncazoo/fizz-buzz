import { expect } from "chai";

function isLeapYear(year: number) {
    return null;
}

describe('Leap Year', () => {

    it('should return TRUE for 1996', () => {
        expect(isLeapYear(1996)).eql(true);
    });

});
