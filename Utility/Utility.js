class Utility
{
    fName;
    lName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    constructor(fName, lName, address, city, state, zip, phone, email){
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

let data = new Utility("Varun", "Brahmane", "Loni", "Ahmadnagar", "Maharashtra", 413713, 7040391139, "b@gmail.com");
console.log(data);

module.exports = Utility;
