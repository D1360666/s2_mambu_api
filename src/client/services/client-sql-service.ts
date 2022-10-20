import { ClientEntity } from "../database/client.entity";

@Injectable()
export class ClientSqlService{
    constructor(
        @InjectRepository(ClientEntity)
        private clientRepository: Repository<ClientEntity>,
    ){}
}