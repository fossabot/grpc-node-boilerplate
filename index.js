require('app-module-path').addPath(__dirname);

const grpcServer = require('grpc/grpcServer');

grpcServer.start('0.0.0.0', 50051);

