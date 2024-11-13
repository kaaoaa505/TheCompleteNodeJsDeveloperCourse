setTimeout(() => {
    console.log('Start two seconds passed.');
}, 2000);

const names = ['khaled', 'allam', 'ahmed', 'omar', 'abdalla'];

const shortNames = names.filter(name => {
    return name.length <= 5;
});

console.log('shortNames is: ', shortNames);

const geoCode = (address, callback) => {
    setTimeout(() => {
        console.log('Middle one second passed.');

        const data = {
            lat: 0,
            lng: 0
        }

        callback(data);
    }, 1000);
};

const logResult = (result) => {
    console.log('result is: ', result);
}

geoCode('Egypt', logResult);