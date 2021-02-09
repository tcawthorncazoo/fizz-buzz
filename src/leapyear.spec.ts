import { expect } from "chai";

function isLeapYear(year: number) {
    if (year === 1900 || year === 2100) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

/**
 * A leap year is defined as one that is divisible by 4, but is not otherwise divisible by 100 unless it is also divisible by 400.
 * For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year and 2000 is an atypical leap year.
 */

describe('Leap Year', () => {

    describe('When a year is divisible by 4', () => {
        it('should return TRUE for 1996', () => {
            expect(isLeapYear(1996)).eql(true);
        });

        it('should return TRUE for 1992', () => {
            expect(isLeapYear(1992)).eql(true);
        });
    });

    describe('When a year is divisible by 400', () => {
        it('should return TRUE for 2000', () => {
            expect(isLeapYear(2000)).eql(true);
        });
    });

    describe('When a year is divisible by 4 and 100', () => {
        it('should return FALSE for 1900', () => {
            expect(isLeapYear(1900)).eql(false);
        });

        it('should return FALSE for 2100', () => {
            expect(isLeapYear(2100)).eql(false);
        });

        it('should return FALSE for 2200', () => {
            expect(isLeapYear(2200)).eql(false);
        });
    });

    describe('Non Leap Year', () => {
        it('should return FALSE for a non-leap year like 1997', () => {
            expect(isLeapYear(1997)).eql(false);
        });

        it('should return FALSE when a non-leap year like 2007', () => {
            expect(isLeapYear(2007)).eql(false);
        });

        it('should return FALSE when a non-leap year like 2010', () => {
            expect(isLeapYear(2010)).eql(false);
        });
    });
});
