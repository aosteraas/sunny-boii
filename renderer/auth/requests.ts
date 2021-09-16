export const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const loggedOutCookie = (lsid: string) =>
  `tmhDynamicLocale.locale=%22en%22; user80=%7B%22role%22%3A%7B%22bitMask%22%3A2%2C%22title%22%3A%22usr%22%2C%22loginLevel%22%3A1%7D%2C%22username%22%3A861%2C%22sid%22%3A%22${lsid}%22%7D`;

export const getDefaultHeaders = (lsid: string) => ({
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
  'Accept-Encoding': 'gzip, deflate',
  'Content-Type': 'application/json',
  Cookie: loggedOutCookie(lsid),
});

export const getAuthedHeaders = () => ({
  'User-Agent':
    'Mozilla/5.0 (Windows NT 6.0; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0',
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
  'Accept-Encoding': 'gzip, deflate',
  'Content-Type': 'application/json',
  Cookie: '',
});

export const genSid = (length = 16) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
