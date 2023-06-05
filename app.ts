function add(number1: number, number2: number, showResult: boolean, resultPhrase: string) {
    const result = number1 + number2;
    if (showResult) {
        console.log(resultPhrase + result);
    } else {

        return number1 + number2;
    }
}

const number1 = 10;
const number2 = 58.8;
const printResult = true;
const phrase = "Result is: ";

add(number1, number2, printResult, phrase);
