import {Column, 
    Entity, 
    JoinTable, 
    OneToMany, 
    PrimaryGeneratedColumn
} from 'typeorm';
@Entity({name: 'addresses'})
export class AddressesEntity{
    "encodedKey": "8a44c9b68220b51401822603d5b1528e",
    "parentKey": "8a44c9b68220b51401822603d5b1528c",
    "line1": "Carrera 1",
    "line2": "Calle 1 - 1",
    "city": "Bogota",
    "region": "Cundinamarca",
    "postcode": "110521",
    "country": "Colombia",
    "indexInList": 0
}