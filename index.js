// Author: Ibrahim Ahmed, 000880591
// Created Jan., 31, 2023. External Javascript page. It contains the functions used to interact with the users input in the html page

// function for group 1, question one.. number in range
function group_1_quest_1() {

    const userInput = document.getElementById("quest-1a").value;    // collecting the value from the users and storing it in a variable called userInput
    const output1a = document.getElementById("quest-1a-output");        // creating a variable from the textarea to diaplay the result after processing

    // logic to check if input is a number
    if (!isNaN(userInput)) {
        if ((userInput == 0) || (userInput >= 13 && userInput <= 17)) {     // this logic will determine if input is within the range or is 0
            output1a.innerText = userInput + " is in range" // output the result in the textarea
        } else {
            output1a.innerText = userInput + " is not in range"    // output to show input is hot of range
        }
    } else {
        output1a.innerText = userInput + " is not a number";
    }

}

// function for group 1, question two... number of years
function group_1_quest_2() {

    const userInput = document.getElementById("quest-1b").value;    // collecting the value from the users and storing it in a variable called userInput
    const output1b = document.getElementById("quest-1b-output");        // creating a variable from the textarea to diaplay the result after processing

    // logic to see if users input a number
    if (!isNaN(userInput)) {

        // creating our output variables: years, months and days.....
        let years;
        let months;
        let days;

        // calculation to determine the number of years and using the Math.trunc function to return only whole number "number of years"
        years = Math.trunc(userInput / 365.25); // 365.25 is the approximate numbers of days in a year

        // calculation to see the number of days left after finding the number of years. using the modular method
        var monthDaysLeft = userInput % 365.25;

        // calculation to see the number of months from the monthDaysLeft. 30.44 is the approximate number of days in a month
        months = Math.trunc(monthDaysLeft / 30.44);

        // calculation to see the number of days from the monthDaysLeft. Using the modular method to check the reminder after the number of month has been determined
        days = monthDaysLeft % 30.44;

        output1b.innerText = "There are " + years + "year(s), " + months + "month(s) and " + days + "day(s)";   // displaying the result to user
    } else {
        output1b.innerText = userInput + " is not a number";
    }
}

// function for group 2 questions 1, vowel checkers
function group_2_quest_1() {

    const userInputRaw = document.getElementById("quest-2a").value;    // collecting the value from the users and storing it in a variable called userInput
    const userInput = userInputRaw.toLowerCase();    // this allows us convert the users to small leters and compare them in our logic
    const output2a = document.getElementById("quest-2a-output");        // creating a variable from the textarea to diaplay the result after processing

    // logic to see if users enter alphabeths
    if (!isNaN(userInput)) {
        // to tell users input is not an alphabeth
        output2a.innerText = "Invalid input";
    } else {
        // logic to see if input is a vowel a, e, i ,o and u
        if ((userInput == "a") || (userInput == "e") || (userInput == "i") || (userInput == "o") || (userInput == "u")) {
            output2a.innerText = userInput.toUpperCase() + " is a vowel";
        } else if (userInput == "y") {      // logic to see if input is a y
            output2a.innerText = "Sometimes, " + userInput.toUpperCase() + " is a vowel";
        } else {
            // output to tell users therir input is  not a vowel
            output2a.innerText = userInput.toUpperCase() + " is not a vowel";
        }
    }

}

// function for group 2, question 3: factorial using loops
function group_2_quest_3() {

    const userInput = document.getElementById("quest-2b").value;    // collecting the value from the users and storing it in a variable called userInput
    const output2b = document.getElementById("quest-2b-output");        // creating a variable from the textarea to diaplay the result after processing

    // logic to manage input errors and check if input is a number
    if (!isNaN(userInput)) {
        // logic to see if input is positive
        if (userInput > 0) {
            // using a fors loop to iterate through the number to calculathe factorial
            let result = 1; // initializing result to 1 because of multiplication
            for (let i = userInput; i > 0; i--) {
                // calculating the result by multiplying the iteration to result
                result = result * i;
            }
            // outputting the result to user
            output2b.innerText = "Answer: " + result;
        } else {
            output2b.innerText = "Cannot compute factorial value";
        }
    } else {
        output2b.innerText = "Invalid input, try numbers";
    }

}

// function to perform binary conversion.... groip 3, question 1
function group_3_quest_1() {

    const userInput = document.getElementById("quest-3").value;    // collecting the value from the users and storing it in a variable called userInput
    const output3 = document.getElementById("quest-3-output");        // creating a variable from the textarea to diaplay the result after processing
    const numLength = userInput.length;

    // logic to see if user input meets the requirements
    if (!isNaN(userInput)) {

        // logic to see if number is within the range
        if (numLength >= 10 && numLength <= 20) {

            let result = 0; // temporary decimal result
            let index = numLength - 1; // this will be used inside the loop to call index of the binary
            let decimalResult = 0;      // initializing variable to zero to allow calculation
            // using a for loop to iterate the digits in the loop
            for (let i = index; i >= 0; i--) {

                // check if number only has 1s and 0s

                if (userInput[i] > 1) {
                    decimalResult = "Not a binary";
                    break;
                } else {
                    /*
                    This loop is a tricky one but it works, the index variable returns the last digit in the binary number, it is like "[-1]" in python then the loop continues till we reach 0. This index is also used in the power function but we reverse the logic. The power starts from 0 because the index - i is also the index - index. This allows the power increase from 0 - the hightest possible exponent as the loop iterate through the bits in the binary..
                */
                    result = userInput[i] * Math.pow(2, index - i);

                    decimalResult = decimalResult + result;
                }
            }

            output3.innerText = "Answer is: " + decimalResult;
        } else {
            output3.innerText = "0";
        }

    } else {
        output3.innerText = "0";
    }
}

//  end of program


// play with question three
function group_3_quest_2() {
    const userInput = document.getElementById("quest-3b").value;    // collecting the value from the users and storing it in a variable called userInput
    const output3b = document.getElementById("quest-3b-output");        // creating a variable from the textarea to diaplay the result after processing

    var sign1 = userInput.slice(-1);
    var sign2 = userInput[0];

    // using indexOf function to check for whitespace in user string.... the result will make funtion determine what string manipulation method we will use.
    // this will remove whitespaces and return only numbers and operands
    var equationArray;
    var result;
    if ((userInput.indexOf(" ") !== -1)) {

        equationArray = userInput.split(" ");
        if (equationArray.length == 3) {

            var op1 = Number(equationArray[0]);
            var operand = equationArray[1]
            var op2 = Number(equationArray[2]);

            if (operand == "+") {
                result = op1 + op2;
            } else if (operand == "-") {
                result = op1 - op2
            }
            else if (operand == "*") {
                result = op1 * op2
            }
            else if (operand == "/") {
                result = op1 / op2
            }
            else if (operand == "%") {
                result = op1 % op2
            }
            output3b.innerText = "The solution is: " + result;
        } else if (sign2 == "+" || sign2 == "-") {
            var operandPOS;
            for (let i = 1; i < equationArray.length; i++) {
                if ((equationArray[i] == "+") || (equationArray[i] == "-") || (equationArray[i] == "*") || (equationArray[i] == "/") || (equationArray[i] == "%")) {
                    operandPOS = i;

                    break;
                }
            }
            console.log(equationArray)

            let op1 = Number(equationArray[1]);
            console.log(op1)

            let operand = equationArray[2]
            console.log(operand)
            let op2 = Number(equationArray[3]);;
            console.log(op2)

            if (sign2 == "+") {
                if (operand == "+") {
                    result = op1 + op2
                }
                else if (operand == "-") {
                    result = op1 - op2
                }
                else if (operand == "*") {
                    result = op1 * op2
                }
                else if (operand == "/") {
                    result = op1 / op2
                }
                else if (operand == "%") {
                    result = op1 % op2
                }
                output3b.innerText = "The solution is: " + result;
            } else if (sign2 == "-") {
                if (operand == "+") {
                    result = - op1 + op2
                }
                else if (operand == "-") {
                    result = - op1 - op2
                }
                else if (operand == "*") {
                    result = - op1 * op2
                }
                else if (operand == "/") {
                    result = - op1 / op2
                }
                else if (operand == "%") {
                    result = - op1 % op2
                }
                else {
                    result = "invalid Formula";
                }
                output3b.innerText = "The solution is: " + result;
            } else {
                output3b.innerText = "Invalid Equation..";
            }

        }
    } else if ((sign1 == "+") || (sign1 == "-") || (sign1 == "/") || (sign1 == "*") || (sign1 == "%") || (sign2 == "/") || (sign2 == "*") || (sign2 == "%")) {
        output3b.innerText = "Invalid equation"
    } else if ((sign2 == "+") || (sign2 == "-")) {
        var operandPOS;
        for (let i = 1; i < userInput.length; i++) {
            if ((userInput[i] == "+") || (userInput[i] == "-") || (userInput[i] == "*") || (userInput[i] == "/") || (userInput[i] == "%")) {
                operandPOS = i;

                break;
            }
        }

        let op1 = userInput.slice(1, operandPOS);
        op1 = Number(op1);

        let operand = userInput[operandPOS]

        let op2 = userInput.slice(operandPOS + 1);
        op2 = Number(op2)

        if (sign2 == "+") {
            if (operand == "+") {
                result = op1 + op2
            }
            else if (operand == "-") {
                result = op1 - op2
            }
            else if (operand == "*") {
                result = op1 * op2
            }
            else if (operand == "/") {
                result = op1 / op2
            }
            else if (operand == "%") {
                result = op1 % op2
            }
            output3b.innerText = "The solution is: " + result;
        }
        else if (sign2 == "-") {
            if (operand == "+") {
                result = - op1 + op2
            }
            else if (operand == "-") {
                result = - op1 - op2
            }
            else if (operand == "*") {
                result = - op1 * op2
            }
            else if (operand == "/") {
                result = - op1 / op2
            }
            else if (operand == "%") {
                result = - op1 % op2
            }
            output3b.innerText = "The solution is: " + result;
        } else {
            output3b.innerText = "Invalid equation"
        }

    } else {

        var operandPOS;
        for (let i = 0; i < userInput.length; i++) {
            if ((userInput[i] == "+") || (userInput[i] == "-") || (userInput[i] == "*") || (userInput[i] == "/") || (userInput[i] == "%")) {
                operandPOS = i;

                break;
            }

        }
        let op1 = userInput.slice(0, operandPOS);
        op1 = Number(op1);

        let operand = userInput[operandPOS]

        let op2 = userInput.slice(operandPOS + 1);
        op2 = Number(op2)

        if (operand == "+") {
            result = op1 + op2
        }
        else if (userInput[operandPOS] == "-") {
            result = op1 - op2
        }
        else if (userInput[operandPOS] == "*") {
            result = op1 * op2
        }
        else if (userInput[operandPOS] == "/") {
            result = op1 / op2
        }
        else if (userInput[operandPOS] == "%") {
            result = op1 % op2
        }
        output3b.innerText = "The solution is: " + result;
    }


}
