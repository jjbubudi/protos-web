import * as grpcWeb from 'grpc-web';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {
  PredictedTidesRequest,
  PredictedTidesResponse,
  RealtimeTidesRequest,
  RealtimeTidesResponse} from './api_pb';

export class TidesServiceClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  realtimeTides(
    request: RealtimeTidesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: RealtimeTidesResponse) => void
  ): grpcWeb.ClientReadableStream<RealtimeTidesResponse>;

  predictedTides(
    request: PredictedTidesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: PredictedTidesResponse) => void
  ): grpcWeb.ClientReadableStream<PredictedTidesResponse>;

}

export class TidesServicePromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  realtimeTides(
    request: RealtimeTidesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<RealtimeTidesResponse>;

  predictedTides(
    request: PredictedTidesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<PredictedTidesResponse>;

}

