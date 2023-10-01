const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const btn = document.querySelector('button')!;  // '!' defines that it is non-null or non-undefined

// Define variable as an array type
const numResults: number[] = [];

// Define generic type for array
const genericNumResults: Array<number> = [];

const textResults: string[] = [];

// type alias which we can assign and share it with others
type NumOrString = number | string;
type Result = { val: number, timestamp: Date };

// can use either interface or type alias for objects
interface ResultObject {
    val: number;
    timestamp: Date;
}

btn?.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    numResults.push(result as number);
    const stringResult = add(num1, num2);
    textResults.push(stringResult as string);
    printResultObj({val: result as number, timestamp: new Date});  // Type casting using 'as'
    console.log(numResults, textResults);
})

function add(num1: NumOrString, num2: NumOrString) {    // union type using '|' and ':' means type definition
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    else {
        return +num1 +  +num2; 
    }
}

// Defining an object in function
function printResultObj(resultObj: ResultObject){         // resultObj: ResultObject or resultObj: Result. Both are correct. 
    console.log(resultObj.val);
}

// Generic type for promise [Note: Generic type or <> is not applicable to every built in object. It applies only those support it]

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!');
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w')); // Now the compiler understood that it is a string type result after defining promise as generic string type.
})