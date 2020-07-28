import { ServiceError, status, Metadata } from 'grpc';

export class AppError implements ServiceError {
    name: string;
    code: status = status.INTERNAL;
    metadata: Metadata;

    constructor(public message: string) {
        this.metadata = new Metadata();
        this.metadata.set('code', 'APP_ERROR');
    }
}

export class BussinessError extends AppError {
    constructor(message: string = 'There is business error happened') {
      super(message);
      this.metadata.set('code', 'BUSSINESS_ERROR');
    }
}
