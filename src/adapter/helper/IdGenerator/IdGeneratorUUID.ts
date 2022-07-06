import { IIdGenerator } from "application/ports/adapters/helper/IIdGenerator";
import { v4 as uuidV4 } from "uuid";

export class IdGeneratorUUID implements IIdGenerator{
    
    public idGen(): string {
        return uuidV4();
    }

}