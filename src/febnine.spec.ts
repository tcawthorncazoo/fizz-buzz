import { expect } from "chai";

function fizzBuzz(input: number): string {
    if (input === 2) {
        return "2";
    }
    return "1";
}

describe('Fizz Buzz on 09 Feb', () => {
    it('should return "1" when 1', () => {
        expect(fizzBuzz(1)).eql('1');
    });

    it('should return "2" when 2', () => {
        expect(fizzBuzz(2)).eql('2');
    });

    it('should return "4" when 4', () => {
        expect(fizzBuzz(4)).eql('4');
    });
});