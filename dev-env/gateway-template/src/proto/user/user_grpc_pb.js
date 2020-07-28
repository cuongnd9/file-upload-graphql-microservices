// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_ListUsersRequest(arg) {
  if (!(arg instanceof user_pb.ListUsersRequest)) {
    throw new Error('Expected argument of type ListUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListUsersRequest(buffer_arg) {
  return user_pb.ListUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListUsersResponse(arg) {
  if (!(arg instanceof user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListUsersResponse(buffer_arg) {
  return user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  listUsers: {
    path: '/User/listUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.ListUsersRequest,
    responseType: user_pb.ListUsersResponse,
    requestSerialize: serialize_ListUsersRequest,
    requestDeserialize: deserialize_ListUsersRequest,
    responseSerialize: serialize_ListUsersResponse,
    responseDeserialize: deserialize_ListUsersResponse,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
