let cities = [
    {name: 'London', population: 3034525 },
    {name: 'Manchester', population: 934525 },
    {name: 'Newcastle', population: 6734525 },
    {name: 'Liverpool', population: 1034525 },
    {name: 'Birmingham', population: 2034525 },
    {name: 'Kent', population: 5034525 },
];

let bigCities = [];
bigCities = cities.map(c => c.population>3000000);
console.table(bigCities);
