import { expect } from "chai";

function isLeapYear(year: number) {
    return true;
}

describe('Leap Year', () => {
    it('should return TRUE for 1996', () => {
        expect(isLeapYear(1996)).eql(true);
    });

    it('should return TRUE for 2000', () => {
        expect(isLeapYear(2000)).eql(true);
    });

    it('should return FALSE for a non-leap year like 1997', () => {
        expect(isLeapYear(1997)).eql(false);
    })
});
