import { Module } from "@nestjs/common";
import { ClientController } from "./controller/client.controller";
import { AddressesEntity } from "./database/addresses.entity";
import { ClientEntity } from "./database/client.entity";
import { DocumentsIdEntity } from "./database/documents.entity";

@Module({
    imports:[
        HttpModule,
        TypeOrmModule.forFeature([ClientEntity, AddressesEntity, DocumentsIdEntity])
    ],
    controllers:[ClientController],
    providers:[ClientService]
})