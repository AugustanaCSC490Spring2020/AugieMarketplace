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
    email: String,
    price: Number,
    datePosted: SimpleDate,
    description: String,
    tags: String[], //only on tag rn, remember to use tags[0]
    imgs: String[],
}

export function createSimpleDate(d: Date): SimpleDate {
    let day = d.getDate(), month = d.getMonth() + 1, year = d.getFullYear();
    return { day: day, month: month, year: year, toString: (month > 9 ? '' : '0') + month + "/" +(day > 9 ? '' : '0') + day + "/" + year };
}
