let arr = ['i', 'you', 'he', 4, 'dp', 10, 8, 'one', 12, 2, 3, 9, 'cup', 8]

function calcArr(array) {
    let sum = 0;
    let count = 0;
   
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
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
    switch (true) {
        case (znak.trim() === '+'):
            console.log( x + ' + ' + y + ' = ' + (x + y));
            break;
        case (znak.trim() === '-'):
            console.log( x + ' - ' + y + ' = ' + (x - y));
            break;
        case (znak.trim() === '*'):
            console.log( x + ' * ' + y + ' = ' + (x * y));
            break;
        case (znak.trim() === '/'):
            console.log( x + ' / ' + y + ' = ' + (x / y));
            break;
        case (znak.trim() === '%'): 
            console.log('Залишок від поділу ' + x + ' на ' + y + ' дорівнює ' + (x % y))
            break;
        case (znak.trim() === '^'):
            console.log('Число ' + x + ' в ' + y + ' ступені дорівнює ' + (x ** y));
            break;    
        default:
            console.log('Не правильно введені дані!')
            break;
    }
}

doMath(numFirst,operator,numSecond);


///////////////////////////////////////////////////////////


function arrAdd() {
    let arr = [];
    let amountArr = prompt('Введіть кількість массивів:');

    for(let i = 0; i < amountArr; i++) {
        arr.push([]);
        let elementsArr = prompt('Введіть кількість елементів до масиву ' + (i + 1) + ' :');

        for(let j = 0; j < elementsArr; j++) {
            let currentElement = prompt('Введіть текст ' + (j + 1) + '-го елементу до масиву ' + (i + 1) + ' :');
            arr[i].push([currentElement]);
        }
    }
    console.log(arr);
}

let matrixArray = arrAdd();


///////////////////////////////////////////////////////////


function delSymb(str, symb){
    return str.replace(new RegExp(`[${symb}]`, 'gi'), '');
}

let strUser = prompt('Введіть будь-який текст:');
let strSymb = prompt('Введіть символи які потрібно видалити:');

console.log('Оригінал тексту: ' + strUser + '. Після видалення символів: ' + delSymb(strUser, strSymb));