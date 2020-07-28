// package: 
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUsers: IUserService_IlistUsers;
}

interface IUserService_IlistUsers extends grpc.MethodDefinition<user_pb.ListUsersRequest, user_pb.ListUsersResponse> {
    path: string; // "/.User/listUsers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.ListUsersRequest>;
    requestDeserialize: grpc.deserialize<user_pb.ListUsersRequest>;
    responseSerialize: grpc.serialize<user_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ListUsersResponse>;
}

export const UserService: IUserService;

export interface IUserServer {
    listUsers: grpc.handleUnaryCall<user_pb.ListUsersRequest, user_pb.ListUsersResponse>;
}

export interface IUserClient {
    listUsers(request: user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listUsers(request: user_pb.ListUsersRequest, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.ListUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}
