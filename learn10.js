function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    x = 3.7
    rounded_x = round(x)
    print("Rounded x:", rounded_x)
    document.querySelector('round').textContent = rounded_x

    y = 4.2
    ceiled_y = math.ceil(y)
    print("Ceiled y:", ceiled_y)
    document.querySelector('ceil').textContent = ceiled_y

    z = 5.9
    floored_z = math.floor(z)
    print("Floored z:", floored_z)
    document.querySelector('floor').textContent = floored_z

    w = -2.5
    truncated_w = math.trunc(w)
    print("Truncated w:", truncated_w)
    document.querySelector('trunc').textContent = truncated_w

    v = -7
    sign_v = math.copysign(1, v)
    print("Sign of v:", sign_v)
    document.textContent('sign').textContent = sign_v

    numbers = [5, 2, 8, 1, 9]
    smallest_number = min(numbers)
    print("The smallest number is:", smallest_number)
    document.textContent('min').textContent = smallest_number

    random_number = random.randint(1, 10)
    print("Random number:", random_number)
    document.textContent('random').textContent = random_number


    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    import random

    random_int = random.randint(1, 100)
    print("Random integer between 1 and 100:", random_int)

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    print("== means equality and === will tell you if the statement is true or not")


    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}