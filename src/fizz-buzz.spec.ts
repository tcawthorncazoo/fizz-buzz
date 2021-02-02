import { expect } from "chai";

function fizzBuzz(number: number): string {
    return '4';
}

describe('Fizz Buzz', () => {
    it('should return "4" when 4', () => {
        expect(fizzBuzz(4)).eql('4');
    });
});
