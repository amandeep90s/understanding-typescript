function add(number1, number2, showResult, resultPhrase) {
    var result = number1 + number2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return number1 + number2;
    }
}
var number1 = 10;
var number2 = 58.8;
var printResult = true;
var phrase = "Result is: ";
add(number1, number2, printResult, phrase);
