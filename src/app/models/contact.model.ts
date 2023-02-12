import { Address } from "./address.model";


export interface Contact {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: Address;
    note: string,
    avatar:string
}