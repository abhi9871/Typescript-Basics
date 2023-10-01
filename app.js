var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var btn = document.querySelector('button'); // '!' defines that it is non-null or non-undefined
// Define variable as an array type
var numResults = [];
// Define generic type for array
var genericNumResults = [];
var textResults = [];
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numResults.push(result);
    var stringResult = add(num1, num2);
    textResults.push(stringResult);
    printResultObj({ val: result, timestamp: new Date }); // Type casting using 'as'
    console.log(numResults, textResults);
});
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
// Defining an object in function
function printResultObj(resultObj) {
    console.log(resultObj.val);
}
// Generic type for promise [Note: Generic type or <> is not applicable to every built in object. It applies only those support it]
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked!');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
