export interface User {
    name: String,
    email: String, //primary key
    phoneNumber: Number
}

export interface Item {
    id: String, //shortid.generate()
    name: String,
    user: String, //user item belongs to
    price: Number,
    status: Boolean,
    datePosted: Date,
    description: String,
    tags: String[]
    //images: figure out a way to store the images 
}

//TODO: functions
