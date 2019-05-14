import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class RealtimeTidesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealtimeTidesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RealtimeTidesRequest): RealtimeTidesRequest.AsObject;
  static serializeBinaryToWriter(message: RealtimeTidesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealtimeTidesRequest;
  static deserializeBinaryFromReader(message: RealtimeTidesRequest, reader: jspb.BinaryReader): RealtimeTidesRequest;
}

export namespace RealtimeTidesRequest {
  export type AsObject = {
  }
}

export class RealtimeTidesResponse extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getMeters(): number;
  setMeters(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealtimeTidesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RealtimeTidesResponse): RealtimeTidesResponse.AsObject;
  static serializeBinaryToWriter(message: RealtimeTidesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealtimeTidesResponse;
  static deserializeBinaryFromReader(message: RealtimeTidesResponse, reader: jspb.BinaryReader): RealtimeTidesResponse;
}

export namespace RealtimeTidesResponse {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    meters: number,
  }
}

export class PredictedTidesRequest extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictedTidesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PredictedTidesRequest): PredictedTidesRequest.AsObject;
  static serializeBinaryToWriter(message: PredictedTidesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictedTidesRequest;
  static deserializeBinaryFromReader(message: PredictedTidesRequest, reader: jspb.BinaryReader): PredictedTidesRequest;
}

export namespace PredictedTidesRequest {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class PredictedTidesResponse extends jspb.Message {
  getPredictionsList(): Array<PredictedTidesResponse.Prediction>;
  setPredictionsList(value: Array<PredictedTidesResponse.Prediction>): void;
  clearPredictionsList(): void;
  addPredictions(value?: PredictedTidesResponse.Prediction, index?: number): PredictedTidesResponse.Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PredictedTidesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PredictedTidesResponse): PredictedTidesResponse.AsObject;
  static serializeBinaryToWriter(message: PredictedTidesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PredictedTidesResponse;
  static deserializeBinaryFromReader(message: PredictedTidesResponse, reader: jspb.BinaryReader): PredictedTidesResponse;
}

export namespace PredictedTidesResponse {
  export type AsObject = {
    predictionsList: Array<PredictedTidesResponse.Prediction.AsObject>,
  }

  export class Prediction extends jspb.Message {
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
    hasTime(): boolean;
    clearTime(): void;

    getMeters(): number;
    setMeters(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prediction.AsObject;
    static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
    static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prediction;
    static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
  }

  export namespace Prediction {
    export type AsObject = {
      time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      meters: number,
    }
  }

}

