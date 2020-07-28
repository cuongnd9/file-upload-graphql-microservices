import * as grpc from 'grpc';
import { ListUsersRequest, ListUsersResponse, UserModel } from '../proto/user/user_pb';
import { UserService, IUserServer } from '../proto/user/user_grpc_pb';
import { BussinessError } from '../components/errors';

class UserHandler implements IUserServer {
  listUsers = (call: grpc.ServerUnaryCall<ListUsersRequest>, callback: grpc.sendUnaryData<ListUsersResponse>): void => {
    // const response: ListUsersResponse = new ListUsersResponse();
    // const user = new UserModel();
    // user.setId(1);
    // user.setName('Cuong Duy Nguyen');
    // response.setUsersList([user]);
    // callback(null, response);
    callback(new BussinessError('This is a bussiness error'), null);
  }
}

export default {
  service: UserService,
  handler: new UserHandler()
}
