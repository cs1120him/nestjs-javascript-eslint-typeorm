import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    constructor() {
        this.message = 'Hello World!';
    }

    getHello() {
        return this.message;
    }
}
