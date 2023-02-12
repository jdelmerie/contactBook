import { Address } from "../models/address.model";
import { Contact } from "../models/contact.model";

export const ADDRESS: Address[] = [
    { street: "79827 Straubel Crossing", city: "Lynn", zipcode: "01905" },
    { street: "33 Hanson Court", city: "Kallithéa", zipcode: "01905" },
    { street: "8 Caliangt Avenue", city: "Parravak’ar", zipcode: "01905" },
    { street: "4 Carpenter Crossing", city: "General Ramírez", zipcode: "3165" },
    { street: "1409 Butterfield Terrace", city: "Nisporeni", zipcode: "MD-6401" },
    { street: "18 6th Lane", city: "Sacotes", zipcode: "2725-511" },
    { street: "4609 Shasta Junction", city: "São Manuel", zipcode: "18650-000" },
    { street: "6 Barnett Center", city: "Suban", zipcode: "18650-000" },
    { street: "6214 Vermont Circle", city: "Huangsangkou", zipcode: "18650-000" },
    { street: "037 Hanover Alley", city: "Koźmin Wielkopolski", zipcode: "63-720" }
]

export const CONTACTS: Contact[] = [
    {
        id: 1,
        firstname: "Kingsly",
        lastname: "Ashton",
        email: "kashton0@yahoo.co.jp",
        phone: "4415563640",
        address: ADDRESS[0],
        note: "",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 2,
        firstname: "Chrisy",
        lastname: "Pawel",
        email: "cpawel1@t.co",
        phone: "8727362362",
        address: ADDRESS[1],
        note: "rutrum neque aenean auctor gravida",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 3,
        firstname: "Smith",
        lastname: "Grogona",
        email: "sgrogona2@ox.ac.uk",
        phone: "5134636273",
        address: ADDRESS[2],
        note: "nulla mollis molestie lorem quisque",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 4,
        firstname: "Albina",
        lastname: "Momford",
        email: "amomford3@cmu.edu",
        phone: "4745721635",
        address: ADDRESS[3],
        note: "ac enim in tempor",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 5,
        firstname: "Annabella",
        lastname: "Jacobowitz",
        email: "ajacobowitz4@imgur.com",
        phone: "8082038021",
        address: ADDRESS[4],
        note: "ante ipsum primis",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 6,
        firstname: "Gerard",
        lastname: "Leppington",
        email: "gleppington5@privacy.gov.au",
        phone: "6614798131",
        address: ADDRESS[5],
        note: "consequat dui nec",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 7,
        firstname: "Larissa",
        lastname: "Seymer",
        email: "lseymer6@issuu.com",
        phone: "1805632157",
        address: ADDRESS[6],
        note: "hac",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 8,
        firstname: "Amye",
        lastname: "Treasaden",
        email: "atreasaden7@dell.com",
        phone: "7323003798",
        address: ADDRESS[7],
        note: "phasellus sit amet erat",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 9,
        firstname: "Helli",
        lastname: "Relfe",
        email: "hrelfe8@about.com",
        phone: "2352946013",
        address: ADDRESS[8],
        note: "at",
        avatar: "https://dummyimage.com/300"
    },
    {
        id: 10,
        firstname: "Huey",
        lastname: "Haill",
        email: "hhaill9@nasa.gov",
        phone: "6513841946",
        address: ADDRESS[9],
        note: "turpis",
        avatar: "https://dummyimage.com/300"
    }
]


