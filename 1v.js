const hotelNames = ['hotel1', 'hotel2', 'hotel3'];

const hotels = [
    {
        region: '',
        number: 0,
        category: 'Standard',
        spaces: '',
        occupation: 'empty'
    },
    {
        region: '',
        number: 0,
        category: 'Lux',
        spaces: '',
        occupation: 'empty'
    },
    {
        region: '',
        number: 0,
        category: 'Apartment',
        spaces: '',
        occupation: 'empty'
    }
]

const verifyName = (hotelName) => {
    if (hotelNames[hotelName].length > 150) {
        return 'invalid Name!';
    } else {
    return 'works' 
}
};

const changeOccupation = (hotel) => {
    if (hotels[hotel].occupation === 'empty') {
        hotels[hotel].occupation = 'taken';
    } else {
    hotels[hotel].occupation = 'empty';
    }
return hotels[hotel];
};

const checkSpaces = (hotel) => {
    if (hotels[hotel].category === 'Standard' || hotels[hotel].category === 'Lux') {
        hotels[hotel].spaces = 2;
    } else {
        hotels[hotel].spaces = 4;
    }
    return hotels[hotel];
}


console.log(checkSpaces(2));
console.log(verifyName(0));