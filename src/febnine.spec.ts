import { expect } from "chai";

function fizzBuzz(input: number): string {
    if (input === 5 || input === 10) {
        return 'Buzz';
    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    return input.toString();
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

    it('should return "Fizz" when 3', () => {
        expect(fizzBuzz(3)).eql('Fizz');
    });

    it('should return "Fizz" when 6', () => {
        expect(fizzBuzz(6)).eql('Fizz');
    });

    it('should return "Fizz" when 9', () => {
        expect(fizzBuzz(9)).eql('Fizz');
    });

    it('should return "Buzz" when 5', () => {
        expect(fizzBuzz(5)).eql('Buzz');
    });

    it('should return "Buzz" when 10', () => {
        expect(fizzBuzz(10)).eql('Buzz');
    });

    it('should return "Buzz" when 20', () => {
        expect(fizzBuzz(20)).eql('Buzz');
    });
});
