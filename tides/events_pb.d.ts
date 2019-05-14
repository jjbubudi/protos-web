import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class TideRecorded extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getMeters(): number;
  setMeters(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TideRecorded.AsObject;
  static toObject(includeInstance: boolean, msg: TideRecorded): TideRecorded.AsObject;
  static serializeBinaryToWriter(message: TideRecorded, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TideRecorded;
  static deserializeBinaryFromReader(message: TideRecorded, reader: jspb.BinaryReader): TideRecorded;
}

export namespace TideRecorded {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    meters: number,
  }
}

export class TidePredicted extends jspb.Message {
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasTime(): boolean;
  clearTime(): void;

  getPredictionsList(): Array<TidePredicted.Prediction>;
  setPredictionsList(value: Array<TidePredicted.Prediction>): void;
  clearPredictionsList(): void;
  addPredictions(value?: TidePredicted.Prediction, index?: number): TidePredicted.Prediction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TidePredicted.AsObject;
  static toObject(includeInstance: boolean, msg: TidePredicted): TidePredicted.AsObject;
  static serializeBinaryToWriter(message: TidePredicted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TidePredicted;
  static deserializeBinaryFromReader(message: TidePredicted, reader: jspb.BinaryReader): TidePredicted;
}

export namespace TidePredicted {
  export type AsObject = {
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    predictionsList: Array<TidePredicted.Prediction.AsObject>,
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

