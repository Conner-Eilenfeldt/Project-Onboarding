/**
 * @author Conner Eilenfeldt
 * @description Project Onboarding Weekly Coding Challenges, Week of March 14, 2022
 **/

// Given two singly linked lists that intersect at some point, find the intersecting node. Assume the lists are non-cyclical.
// For example, given A = 3 ➔ 7 ➔ 8 ➔ 10 and B = 99 ➔ 1 ➔ 8 ➔ 10, return the node with value 8. In this example, assume nodes with the same value are the exact same node objects.
// Do this in 0( m + n) time (where m and n are the lengths of the lists) and constant space.


class Node {
    element;
    next;

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    head;
    length = 0;

    constructor(head = null) {
        this.head = head;
        if (head)
            this.length++;
    }

    add(element) {
        let node = new Node(element);

        // if no head, set new node as head
        if (this.head == null)
            this.head = node;
        else {
            let current = this.head;

            // go to last node in list
            while (current.next)
                current = current.next;

            // add new node
            current.next = node;
        }

        this.length++;
    }

    print() {
        let current = this.head;

        console.log("--------");

        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }
}

// find the intersection of the two linked lists using a set
function findIntersection(a, b) {
    let aCurrent = a.head;
    let bCurrent = b.head;

    let setA = new Set();

    // add all elements in list a to setA
    while (aCurrent) {
        setA.add(aCurrent.element);
        aCurrent = aCurrent.next;
    }

    // check if any element in list b is in setA (aka list a)
    while (bCurrent) {
        if (setA.has(bCurrent.element))
            return bCurrent.element;

        bCurrent = bCurrent.next;
    }

    return "No Intersection";
}

// function for testing the given examples
function testExamples() {
    let a = new LinkedList();
    a.add(3);
    a.add(7);
    a.add(8);
    a.add(10);

    let b = new LinkedList();
    b.add(99);
    b.add(1);
    b.add(8);
    b.add(10);
    
    let output = findIntersection(a, b);
    test(output, 8);
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
