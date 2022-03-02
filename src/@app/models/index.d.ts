import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DoorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Door {
  readonly id: string;
  readonly name: string;
  readonly allowedCompanies?: (string | null)[];
  readonly daitimeUnlockAllowedMembers?: (string | null)[];
  readonly httpEndpoint: string;
  readonly serviceUuid: string;
  readonly index: number;
  readonly imageUrl: string;
  readonly isOpenDaily: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Door, DoorMetaData>);
  static copyOf(source: Door, mutator: (draft: MutableModel<Door, DoorMetaData>) => MutableModel<Door, DoorMetaData> | void): Door;
}