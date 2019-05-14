/**
 * @fileoverview gRPC-Web generated client stub for jimmyau.tides
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.jimmyau = {};
proto.jimmyau.tides = require('./api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.jimmyau.tides.TidesServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.jimmyau.tides.TidesServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.jimmyau.tides.RealtimeTidesRequest,
 *   !proto.jimmyau.tides.RealtimeTidesResponse>}
 */
const methodInfo_TidesService_RealtimeTides = new grpc.web.AbstractClientBase.MethodInfo(
  proto.jimmyau.tides.RealtimeTidesResponse,
  /** @param {!proto.jimmyau.tides.RealtimeTidesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.jimmyau.tides.RealtimeTidesResponse.deserializeBinary
);


/**
 * @param {!proto.jimmyau.tides.RealtimeTidesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.jimmyau.tides.RealtimeTidesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.jimmyau.tides.RealtimeTidesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.jimmyau.tides.TidesServiceClient.prototype.realtimeTides =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/jimmyau.tides.TidesService/RealtimeTides',
      request,
      metadata || {},
      methodInfo_TidesService_RealtimeTides,
      callback);
};


/**
 * @param {!proto.jimmyau.tides.RealtimeTidesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.jimmyau.tides.RealtimeTidesResponse>}
 *     A native promise that resolves to the response
 */
proto.jimmyau.tides.TidesServicePromiseClient.prototype.realtimeTides =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/jimmyau.tides.TidesService/RealtimeTides',
      request,
      metadata || {},
      methodInfo_TidesService_RealtimeTides);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.jimmyau.tides.PredictedTidesRequest,
 *   !proto.jimmyau.tides.PredictedTidesResponse>}
 */
const methodInfo_TidesService_PredictedTides = new grpc.web.AbstractClientBase.MethodInfo(
  proto.jimmyau.tides.PredictedTidesResponse,
  /** @param {!proto.jimmyau.tides.PredictedTidesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.jimmyau.tides.PredictedTidesResponse.deserializeBinary
);


/**
 * @param {!proto.jimmyau.tides.PredictedTidesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.jimmyau.tides.PredictedTidesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.jimmyau.tides.PredictedTidesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.jimmyau.tides.TidesServiceClient.prototype.predictedTides =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/jimmyau.tides.TidesService/PredictedTides',
      request,
      metadata || {},
      methodInfo_TidesService_PredictedTides,
      callback);
};


/**
 * @param {!proto.jimmyau.tides.PredictedTidesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.jimmyau.tides.PredictedTidesResponse>}
 *     A native promise that resolves to the response
 */
proto.jimmyau.tides.TidesServicePromiseClient.prototype.predictedTides =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/jimmyau.tides.TidesService/PredictedTides',
      request,
      metadata || {},
      methodInfo_TidesService_PredictedTides);
};


module.exports = proto.jimmyau.tides;

