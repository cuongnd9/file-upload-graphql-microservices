import * as grpc from 'grpc';
import { get } from 'lodash';
import config from '../components/config';
import { ListUsersRequest, ListUsersResponse, UserModel } from '../proto/user/user_pb';
import { UserClient } from '../proto/user/user_grpc_pb';
import { ExternalError } from '../components/errors';

const client: UserClient = new UserClient(config.userService.endpoint, grpc.credentials.createInsecure());

class UserService {
    listUsers = (): Promise<UserModel[]> => {
        return new Promise<UserModel[]>((resolve, reject) => {
            client.listUsers(new ListUsersRequest(), (error: grpc.ServiceError | null, response: ListUsersResponse) => {
                if (error) {
                    let code = get(error, 'metadata._internal_repr.code');
                    if (code) {
                        code = code[0];
                    } else {
                        code = error.message.split(' ')[1].replace(':', '');
                    }
                    const formattedError = new ExternalError(code, error.details || '');
                    return reject(formattedError);
                }
                resolve(response.getUsersList().map((user: any) => user.toObject()));
            })
        });
    }
}

export default UserService;
