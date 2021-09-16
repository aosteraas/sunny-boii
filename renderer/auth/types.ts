export interface IAuthContext {
  isLoggedIn: boolean;
  logIn: (data: LogInFormData) => Promise<void>;
}

export enum Privilege {
  USER = 'usr',
  INSTALLER = 'istl',
}

export interface LogInFormData {
  ip: string;
  password: string;
}

type KeyVal = { tag: string; unit?: string };

export const Key: Record<string, KeyVal> = {
  powerCurrent: { tag: '6100_40263F00', unit: 'W' },
  powerTotal: { tag: '6400_00260100', unit: 'W' },
  //
  serverIp: { tag: '6180_104A9A00' },
  serverDns: { tag: '6180_104A9D00' },
  serverNetmask: { tag: '6180_104A9B00' },
  serverGatewy: { tag: '6180_104A9C00' },
  //
  powerAb: { tag: '6380_40251E00' },
  powerB: { tag: '6380_40451F00' },
  voltageAb: { tag: '6380_40451F00' },
  tideAb: { tag: '6380_40452100' },
  powerAmp: { tag: '6100_40465300', unit: 'A' },
  //
  productivityTotal: { tag: '6400_00260100' },
  productivityDay: { tag: '6400_00262200' },
  serviceTime: { tag: '6400_00462E00', unit: 's' },
  injectionTime: { tag: '6400_00462F00', unit: 's' },
  //
  ethernetStatus: { tag: '6180_084A9600', unit: 'status' },
  ethernetCounter_status: { tag: '6180_084AAA00', unit: 'status' },
  ethernetIp: { tag: '6800_10AA6100' },
  ethernetNetmask: { tag: '6800_10AA6200' },
  ethernetGateway: { tag: '6800_10AA6300' },
  ethernetDns: { tag: '6800_10AA6400' },
  //
  wlanStrength: { tag: '6100_004AB600' },
  wlanIp: { tag: '6180_104AB700' },
  wlanNetmask: { tag: '6180_104AB800' },
  wlanGateway: { tag: '6180_104AB900' },
  wlanDns: { tag: '6180_104ABA00' },
  wlanStatus: { tag: '6180_084ABC00', unit: 'status' },
  wlanScan_status: { tag: '6180_084ABB00' },
  //
  deviceState: { tag: '6180_084B1E00', unit: 'W' },
  deviceWarning: { tag: '6100_00411F00', unit: 'W' },
  deviceError: { tag: '6100_00412000', unit: 'W' },
};
