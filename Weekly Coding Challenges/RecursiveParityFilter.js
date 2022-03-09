/**
 * @author Conner Eilenfeldt
 * @description Project Onboarding Weekly Coding Challenges, Week of March 7, 2022
 **/

//  Write a recursive function that filters the items in an array (given as parameter arr) by positional parity (odd or even), given as parameter par, starting from the opposite end. Return an array of items on odd positions (... 5, 3, 1) or on even positions (... 6, 4, 2) and counting from the last item in the array.
function getItemsAt(arr, par) {

    let items = [];
    let remainder;

    try {
        if (arr.length == 0) return items;

        // deciding what remainder to check for depending on given positional parity
        if (par === "even") remainder = 0;
        else if (par === "odd") remainder = 1;
        else throw new Error("Unexpected Positional Parity");

        // filtering
        if (arr.length % 2 == remainder)
            items.push(arr.shift());
        else
            arr.shift();

        items = items.concat(getItemsAt(arr, par));

        return items;
    }
    catch (err) {
        return err;
    }
}

// function for testing the given examples
function testExamples() {
    let output = getItemsAt([2, 4, 6, 8, 10], "odd");
    test(output, [2, 6, 10]);

    output = getItemsAt(["E", "D", "A", "B", "I", "T"], "even");
    test(output, ["E", "A", "I"]);

    output = getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even");
    test(output, [")", "*", "^", "$", "@"]);

    output = getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even");
    test(output, ["R", "I", "R", "R", "L"]);
}

// compares the actual and expected output arrays
function test(actual, expected) {
    if (actual instanceof Error)
        console.log("Failed: " + actual.message);
    else
        JSON.stringify(actual) === JSON.stringify(expected) ?
            console.log("Passed: " + actual + " == " + expected) : console.log("Failed: " + actual + " != " + expected);
}

// run the example tests
testExamples();
