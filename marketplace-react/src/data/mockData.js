import shortid from 'shortid';
import { User, Item, createSimpleDate } from './marketplace';
import { default as React } from 'react';

export const MockUser: User = { name: "Danielle Osazuwa", email: "danielleosazuwa16@augustana.edu", phoneNumber: 3095924711 }

export default function createItem(): Item {

    return {}
}

let id = shortid.generate(),
    name = "Item Name",
    user = MockUser,
    price = 25,
    status = true,
    datePosted = createSimpleDate(new Date()),
    description = "It's an item",
    featured = "false",
    tags = ["item", "book", "furniture"],
    imgs = ["mockImage.jpg"];

export const MockItems: Item[] = [
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
    { id:shortid.generate(), name, user, price, status, datePosted, description, featured, tags, imgs},
]
