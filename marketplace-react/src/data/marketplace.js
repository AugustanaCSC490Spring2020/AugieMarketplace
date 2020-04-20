export interface User {
    name: String,
    email: String, //primary key
    phoneNumber: Number
}

export interface SimpleDate {
    day: Number;
    month: String;
    year: Number;
    toString: String;
}
export interface Item {
    id: String, //shortid.generate()
    name: String,
    user: String, //user item belongs to
    price: Number,
    status: Boolean,
    datePosted: SimpleDate,
    description: String,
    tags: String[]
    //images: figure out a way to store the images 
}



export function createSimpleDate(d: Date): SimpleDate {
    let day = d.getDate(), month = d.getMonth() + 1, year = d.getFullYear();
    return { day: day, month: month, year: year, toString: (month > 9 ? '' : '0') + month + "/" +(day > 9 ? '' : '0') + day + "/" + year };
}
//TODO: functions