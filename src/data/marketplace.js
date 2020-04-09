export interface User {
    name: String,
    email: String,
    items: Item[], //items they've posted
    phoneNumber: Number
}

export interface Item {
    name: String,
    user: String, //user item belongs to
    datePosted: Date,
    description: String,
    tags: String[]
    //images: figure out a way to store the images 
}
