
const december = document.querySelectorAll('#december path');

for (let index = 0; index < december.length; index++) {
    console.log(`${index} is ${december[index].getTotalLength()}`);
    
}