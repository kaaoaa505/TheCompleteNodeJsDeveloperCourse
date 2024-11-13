console.log(`
_________________________________________________________
----App started:
${new Date()}
---------------------------------------------------------
`);


const fs = require('fs');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};

const bookStr = JSON.stringify(book);
console.log(bookStr);

const bookObj = JSON.parse(bookStr);
console.log('bookObj.title is: ', bookObj.title);
console.log('bookObj.author is: ', bookObj.author);

fs.writeFileSync('01-book.json', bookStr);
const dataBuffer = fs.readFileSync('01-book.json');
console.log('dataBuffer is: ', dataBuffer);
console.log('dataBuffer.toString() is: ', dataBuffer.toString());

const dataObj = JSON.parse(dataBuffer.toString());
console.log('dataObj.title is: ', dataObj.title);
console.log('dataObj.author is: ', dataObj.author);


const dataBuffer02 = fs.readFileSync('01-data.json');
const dataObj02 = JSON.parse(dataBuffer02.toString());
dataObj02.name = 'Khaled';
dataObj02.age = 33;

fs.writeFileSync('01-data.json', JSON.stringify(dataObj02));


console.log(`
---------------------------------------------------------
----App End:
${new Date()}
_________________________________________________________
`);