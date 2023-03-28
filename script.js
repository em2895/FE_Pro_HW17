let arr = ['i', 'you', 'he', 4, 'dp', 10, 8, 'one', 12, 2, 3, 9, 'cup', 8]

function calcArr(array) {
    let sum = 0;
    let count = 0;
   
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i])) {
            sum += array[i];
            count++;
        }
    }
    return sum / count;
}

console.log(arr);
console.log( 'Середнє арифметичне дорівнює ' + calcArr(arr));


//////////////////////////////////////////////////////////


let numFirst = Number(prompt('Введіть перше число:'));
let numSecond = Number(prompt('Введіть друге число:'));
let operator = prompt('Введіть знак операції (+, -, *, /, %, ^(ступінь)):');


function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            console.log( x + ' + ' + y + ' = ' + (x + y));
            break;
        case '-':
            console.log( x + ' - ' + y + ' = ' + (x - y));
            break;
        case '*':
            console.log( x + ' * ' + y + ' = ' + (x * y));
            break;
        case '/':
            console.log( x + ' / ' + y + ' = ' + (x / y));
            break;
        case '%': 
            console.log('Залишок від поділу ' + x + ' на ' + y + ' дорівнює ' + (x % y))
            break;
        case '^':
            console.log('Число ' + x + ' в ' + y + ' ступені дорівнює ' + (x ** y));
            break;    
        default:
            console.log('Не правильно введені дані!');
            break;
    }
}

function testOperator(str)
{
    let symb = '+-*/%^';
    if (str != null ) {     
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < symb.length; j++) {
                if (str[i] === symb[j]) return true;
            }
        }
    }
    return false;
}


if (Number(numFirst) && Number(numSecond)) {

    if (testOperator(operator)) {
        operator = operator.trim();
        doMath(numFirst,operator,numSecond);
    } else {
        console.log('Не правильно введено знак операції!')
    }

} else {
    console.log('Не правильно введені числа!')
}



///////////////////////////////////////////////////////////


function arrAdd() {
    let arr = [];
    let amountArr = prompt('Введіть кількість массивів:');

    if (amountArr > 0) {
        for(let i = 0; i < amountArr; i++) {
            arr.push([]);
            let elementsArr = prompt('Введіть кількість елементів до масиву ' + (i + 1) + ' :');
            
            if (elementsArr > 0) {
                for(let j = 0; j < elementsArr; j++) {
                    let currentElement = prompt('Введіть текст ' + (j + 1) + '-го елементу до масиву ' + (i + 1) + ' :');
                    arr[i].push([currentElement]);
                }
            } else {
                return console.log('Невірно введена кількість елементів до массивів!');
            }
        }
    } else {
        return console.log('Невірно введена кількість массивів');
    }
    return console.log(arr);
}

let matrixArray = arrAdd();


///////////////////////////////////////////////////////////


function delSymb(str, symb){
    return str.replace(new RegExp(`[${symb}]`, 'gi'), '');
}

let strUser = prompt('Введіть будь-який текст:');
let strSymb = prompt('Введіть символи які потрібно видалити:');

console.log('Оригінал тексту: ' + strUser + '. Після видалення символів: ' + delSymb(strUser, strSymb));