export enum Endpoints {
  Login = '/dyn/login.json',
  logout = '/logout.json',
  getTime = '/getTime.json',
  getValues = '/getValues.json',
  getAllOnlValues = '/getAllOnlValues.json',
  getAllParamValues = '/getAllParamValues.json',
  setParamValues = '/setParamValues.json',
  getWebSrvConf = '/getWebSrvConf.json',
  getEventsModal = '/getEvents.json',
  getEvents = '/getEvents.json',
  getLogger = '/getLogger.json',
  getBackup = '/getConfigFile.json',
  loginGridGuard = '/loginSR.json',
  sessionCheck = '/sessionCheck.json',
  setTime = '/setTime.json',
  backupUpdate = 'input_file_backup.htm',
  fwUpdate = 'input_file_update.htm',
}

const getHeaders = (ip: string) => {
  const headers = {
    Host: ip,
    'User-Agent': 'TBA',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
    Referer: `https://${ip}/`,
    Cookie: 'tmhDynamicLocale.locale=%22en-us%22',
    // 'Content-Type': 'application/json;charset=UTF-8',
    // Origin: `https://${ip}`,
  };
};

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const genSessionId = (length = 16) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const languageCookie = `tmhDynamicLocale.locale=%22en-us%22`;

export const createLoginCookie = (sessionId: string) => {
  const userCookie = `user443=%7B%22role%22%3A%7B%22bitMask%22%3A2%2C%22title%22%3A%22usr%22%2C%22loginLevel%22%3A1%7D%2C%22username%22%3A861%2C%22sid%22%3A%22${sessionId}%22%7D`;
  return `${languageCookie}; ${userCookie};`;
};

// the user cookie contains this
const user443 = {
  role: { bitMask: 2, title: 'usr', loginLevel: 1 },
  username: 861,
  sid: 'unsure where this is generated atm',
};
