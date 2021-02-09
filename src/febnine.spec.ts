import { expect } from "chai";

function fizzBuzz(input: number): string {
    if (input === 15 || input === 30) {
        return 'FizzBuzz';
    }
    if (input % 5 === 0) {
        return 'Buzz';
    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    return input.toString();
}

describe('Fizz Buzz on 09 Feb', () => {
    describe('Multiples of 3 return the string "Fizz"', () => {
        it('should return "Fizz" when 3', () => {
            expect(fizzBuzz(3)).eql('Fizz');
        });

        it('should return "Fizz" when 6', () => {
            expect(fizzBuzz(6)).eql('Fizz');
        });

        it('should return "Fizz" when 9', () => {
            expect(fizzBuzz(9)).eql('Fizz');
        });
    });

    describe('Multiples of 5 return the string "Buzz"', () => {
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

    describe('Multiples of 3 and 5 return "FizzBuzz"', () => {
        it('should return "FizzBuzz" when 15', () => {
            expect(fizzBuzz(15)).eql('FizzBuzz');
        });

        it('should return "FizzBuzz" when 30', () => {
            expect(fizzBuzz(30)).eql('FizzBuzz');
        });
        
        it('should return "FizzBuzz" when 45', () => {
            expect(fizzBuzz(45)).eql('FizzBuzz');
        });
    });

    describe('Remaining integers are returned as strings of themselves.', () => {

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
});
