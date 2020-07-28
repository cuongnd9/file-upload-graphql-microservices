// package: 
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ListUsersRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
    static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
    export type AsObject = {
    }
}

export class ListUsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserModel>;
    setUsersList(value: Array<UserModel>): void;
    addUsers(value?: UserModel, index?: number): UserModel;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
    static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
    export type AsObject = {
        usersList: Array<UserModel.AsObject>,
    }
}

export class UserModel extends jspb.Message { 
    getId(): number;
    setId(value: number): void;

    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserModel.AsObject;
    static toObject(includeInstance: boolean, msg: UserModel): UserModel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserModel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserModel;
    static deserializeBinaryFromReader(message: UserModel, reader: jspb.BinaryReader): UserModel;
}

export namespace UserModel {
    export type AsObject = {
        id: number,
        name: string,
    }
}
