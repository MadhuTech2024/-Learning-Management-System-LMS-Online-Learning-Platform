
"use strict";

function parseAmount(input) {
    if (input === null || input === undefined) {
        throw new Error("Amount is required.");
    }

    if (typeof input !== "string" && typeof input !== "number") {
        throw new Error("Invalid amount type.");
    }

    if (typeof input === "string") {
        input = input.trim();

        if (input === "") {
            throw new Error("Amount cannot be empty.");
        }
    }

    const amount = Number(input);

    if (Number.isNaN(amount) || !Number.isFinite(amount)) {
        throw new Error("Amount must be a valid number.");
    }

    if (amount <= 0) {
        throw new Error("Amount must be greater than zero.");
    }

    return amount;
}


console.log("===== PARSE AMOUNT TESTS =====");

const testAmounts = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (const input of testAmounts) {
    try {
        console.log("Input:", input, "Result:", parseAmount(input));
    } catch (error) {
        console.log("Input:", input, "Error:", error.message);
    }
}


const BANK_NAME = "IRP National Bank";
let transactionCounter = 0;

transactionCounter++;

console.log("\nBank:", BANK_NAME);
console.log("Transactions:", transactionCounter);

console.log("\n===== HOISTING DEMO =====");

console.log("Before var declaration:", hoistedVar);
var hoistedVar = "Bank Account";

try {
    console.log(hoistedLet);
} catch (error) {
    console.log("Before let declaration:", error.name);
}
let hoistedLet = "Customer Account";

welcome();

function welcome() {
    console.log("Welcome to IRP Bank!");
}


try {
    bankMessage();
} catch (error) {
    console.log("Before function expression assignment:", error.name);
}

var bankMessage = function () {
    console.log("Bank transaction successful.");
};


console.log("\n===== VAR LOOP =====");

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("var:", i);
    }, 100);
}

console.log("\n===== LET LOOP =====");

for (let j = 0; j < 3; j++) {
    setTimeout(function () {
        console.log("let:", j);
    }, 100);
}
