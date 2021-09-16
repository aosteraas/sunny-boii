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
