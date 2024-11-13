// const square = (x) => {
//     return x * x;
// }
const square = x => x * x;

console.log(square(3));

const event = {
    name: 'Birthday Party',
    guestList: [
        'khaled',
        'allam',
        'ahmed',
        'omar',
        'abdalla',
        'allam'
    ],
    printGuestList() {
        console.log(`Guest list for: ${this.name}`);
        
        this.guestList.forEach((value, index) => {
            console.log(`${index+1}- ${value} is attending ${this.name}`);
        });
    }
}

event.printGuestList();