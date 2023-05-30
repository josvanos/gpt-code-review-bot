const nelson = {
    name: "Nelson",
    age: "20",
    country: "Netherlands",
    address: {
        street: "Druisberg 4",
        housenumber: "14",
        postalCode: "3341 AA",
        city: "den Bosch",
    }
};

// update city of nelson
nelson.address = {
    city: "Utrecht",
}

console.log(nelson.address.housenumber);