/**
 * @author Conner Eilenfeldt
 * @description Project Onboarding Weekly Coding Challenges, Week of March 14, 2022
 **/

// Implement a stack that has the following methods:
// • push ( val ) : push val onto the stack
// • pop: pop off and return the topmost element of the stack. If there are no elements in the stack, throw an error.
// • max: return the maximum value in the stack currently. If there are no elements in the stack, throw an error.

// Each method should run in constant time.


class stack {
    data;

    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        try {
            if (this.data.length == 0)
                throw new Error("Stack is empty");

            return this.data.pop();
        }
        catch (err) {
            return err;
        }
    }

    // does not run in constant time
    max() {
        try {
            if (this.data.length == 0)
                throw new Error("Stack is empty");

            return Math.max(...this.data);
        }
        catch (err) {
            return err;
        }
    }
}

// function for testing the given examples
function testExamples() {
    s = new stack();
    s.push(13);
    s.push(74);
    s.push(61);
    s.push(78);
    s.push(57);
    s.push(5);
    s.push(30);
    s.push(72);
    s.push(6);
    s.push(41);

    let output = s.pop();
    test(output, 41);

    output = s.max()
    test(output, 78);
}

// compares the actual and expected outputs
function test(actual, expected) {
    if (actual instanceof Error)
        console.log("Failed: " + actual.message);
    else
        JSON.stringify(actual) === JSON.stringify(expected) ?
            console.log("Passed: " + actual + " == " + expected) : console.log("Failed: " + actual + " != " + expected);
}

// run the example tests
testExamples();
