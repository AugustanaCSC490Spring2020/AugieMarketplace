import shortid from 'shortid';
import { User, Item, createSimpleDate, SimpleDate } from './marketplace';

export const MockUser: User = { name: "Danielle Osazuwa", email: "danielleosazuwa16@augustana.edu", phoneNumber: 3095924711 }

export function createItem(
    name: String,
    email: String, 
    price: Number,
    datePosted: SimpleDate,
    description: String,
    tags: String[],
    imgs: String[]
) {
    const id = shortid.generate();
    return { id, name, email, price, datePosted, description, tags, imgs }
}

export const MockItems: Item[] = [
    createItem("American Avocet", "danielleosazuwa16@augustana.edu", 20, createSimpleDate(new Date("01/20/2020")), "Recurvirostra americana", ['CSC'], ["avocet"]),
    createItem("True Macaws", "danielleosazuwa16@augustana.edu", 25, createSimpleDate(new Date("01/20/2020")), "true-macaws", ['CSC'], ["true-macaws"]),
    createItem("Grey Parrot", "danielleosazuwa16@augustana.edu", 15, createSimpleDate(new Date("01/20/2020")), "grey-parrot", ['CSC'], ["grey-parrot"]),
    createItem("Cockatiel", "danielleosazuwa16@augustana.edu", 40, createSimpleDate(new Date("01/20/2020")), "cockatiel", ['CSC'], ["cockatiel"]),
    createItem("Long-billed Corella", "danielleosazuwa16@augustana.edu", 50, createSimpleDate(new Date("01/20/2020")), "long-billed-corella", ['CSC'], ["long-billed-corella"]),

    createItem("I Robot", "danielleosazuwa16@augustana.edu", 30, createSimpleDate(new Date("01/20/2020")), "Recurvirostra americana", ['MATH', 'BOOK'], ["book1"]),
    createItem("Some textbook", "danielleosazuwa16@augustana.edu", 55, createSimpleDate(new Date("02/03/2020")), "Recurvirostra americana", ['MATH', 'BOOK'], ["book2"]),
    createItem("True Macaws", "danielleosazuwa16@augustana.edu", 25, createSimpleDate(new Date("01/03/2020")), "true-macaws", ['CSC'], ["true-macaws"]),
    createItem("Another One", "danielleosazuwa16@augustana.edu", 29, createSimpleDate(new Date("02/17/2020")), "Recurvirostra americana", ['MATH', 'BOOK'], ["book3"]),
    createItem("Coffee Please", "danielleosazuwa16@augustana.edu", 18.99, createSimpleDate(new Date("03/20/2020")), "Recurvirostra americana", ['MATH', 'BOOK'], ["book4"]),
    createItem("I Robot", "danielleosazuwa16@augustana.edu", 30, createSimpleDate(new Date("03/20/2019")), "Recurvirostra americana", ['MATH', 'BOOK'], ["book1"]),

    createItem("Mini fridge", "danielleosazuwa16@augustana.edu", 50, createSimpleDate(new Date("01/20/2019")), "it's a fridge", ['appliance'], ["minifridge"]),
    createItem("Sofa", "danielleosazuwa16@augustana.edu", 55, createSimpleDate(new Date("01/19/2019")), "it's a sofa", ['furniture'], ["sofa"]),
    createItem("Shirt", "danielleosazuwa16@augustana.edu", 60, createSimpleDate(new Date("01/15/2019")), "it's a shirt", ['apparel'], ["shirt"]),
    createItem("Another Minifridge", "danielleosazuwa16@augustana.edu", 65, createSimpleDate(new Date("01/02/2019")), "it's another mini fridge", ['appliance'], ["anotherone"]),
    createItem("Cockatiel", "danielleosazuwa16@augustana.edu", 40, createSimpleDate(new Date("01/20/2019")), "cockatiel", ['CSC'], ["cockatiel"]),
];