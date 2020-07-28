import UserService from '../services/user';
import { UserModel } from '../proto/user/user_pb';

const resolvers = {
    Query: {
        users: async (): Promise<UserModel[]> => {
            const userService: UserService = new UserService();
            const list: UserModel[] = await userService.listUsers();
            return list;
        }
    }
}

export default resolvers;
