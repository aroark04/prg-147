function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Austin Roark"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
       let num = 5;
       let str = "10";

       let result = num + str;

       document.getElementById("add").innerHTML = `${num} + "${str}" = ${result}`;
    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num2 = 42;
    let str2 = num.toString();
    document.getElementById("to-string").innerHTML = `The number ${num2} as a string is: ${str2}`;

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let num3 = 123456;
    let exp = num.toExponential();
    document.getElementById("exponent").innerHTML = `The number ${num3} in exponential notation is: ${exp}`;

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let num4 = 5.2454345;
    let fixed = num.toFixed(2);
    document.getElementById("fixed").innerHTML = `The number ${num4} rounded to 2 decimal places is: ${fixed}`;

    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let num5 = 34533.8467;
    let prec = num.toPrecision(3);
    document.getElementById("precision").innerHTML = `The number ${num5} with 3 significant digits is: ${prec}`;

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let str3 = "3.14";
    let f = parseFloat(str);
    document.getElementById("float").innerHTML = `The string "${str3}" parsed to float is: ${f}`;

    // Demonstrate the use of parseInt() and print to the int paragraph
    let str4 = "42";
    let i = parseInt(str);
    document.getElementById("int").innerHTML = `The string "${str4}" parsed to integer is: ${i}`;


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML = "== will take two different datas and try to change one so they are alike, where as === will only respond in true or false when comparing two sets of data"
    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    document.getElementById("logic").innerHTML = "Used to combine multiple conditions"

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    let day = new Date().getDay();
    let dayName;
    
    switch(day) {
      case 0:
        dayName = "Sunday";
        break;
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      default:
        dayName = "Unknown";
    }
    
    document.getElementById("switch").innerHTML = `Today is ${dayName}.`;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let number = 5;
    let result2 = (number % 2 === 0) ? "even" : "odd";
    document.getElementById("ternary").innerHTML = "The number " + number + " is " + result2;
}