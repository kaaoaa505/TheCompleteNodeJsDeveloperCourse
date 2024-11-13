setTimeout(() => {
    console.log('2 seconds passed');
}, 2000);

const names = ['khaled', 'allam', 'ahmed', 'omar', 'abdalla'];
const short_names = names.filter(name => name.length <= 5);

console.log(short_names);

// -------------------------------------------------------------

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 1.23,
            longitude: 4.56,
        }

        callback(data);

        console.log('4 seconds passed');
    }, 4000);
};

geocode('sa', (result) => {
    console.log(result);
});

// -------------------------------------------------------------

const add = (n1, n2, callback) => callback(n1 + n2);
add(3, 4, sum => console.log('sum is: ', sum));

// -------------------------------------------------------------
// _____________________________________________________________