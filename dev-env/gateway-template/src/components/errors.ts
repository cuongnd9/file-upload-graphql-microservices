import { ApolloError } from 'apollo-server';

export class ExternalError extends ApolloError {
  constructor(code: string, message: string) {
    super(message);
    this.extensions.code = code;
  }
}

export class AppError extends ApolloError {
  constructor(message: string = 'Internal Service Error') {
    super(message);
    this.extensions.code = 'APP_ERROR';
  }
}

export class BussinessError extends AppError {
  constructor(message: string = 'There is business error happened') {
    super(message);
    this.extensions.code = 'BUSSINESS_ERROR';
  }
}
