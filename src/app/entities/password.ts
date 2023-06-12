interface ICreatePasswordDTO {
    id?: string;
    user_id: string;
    service_name: string;
    password_hash: string;
}

export class Password {
    id?: string;
    user_id: string;
    service_name: string;
    password_hash: string;

    constructor({ id, user_id, service_name, password_hash }: ICreatePasswordDTO) {
        this.id = id;
        this.user_id = user_id;
        this.service_name = service_name;
        this.password_hash = password_hash;
    }
}