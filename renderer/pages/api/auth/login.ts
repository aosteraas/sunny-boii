import phin from 'phin';
import https from 'https';
import { NextApiHandler } from 'next';
import { Endpoints } from '../../../lib/config/endpoints';
import { Privilege } from '../../../auth/types';

type SunnyResponse<T> = {
  result: T;
};

const getHeaders = (ip: string) => {
  const headers = {
    Host: ip,
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
    Referer: `https://${ip}/`,
    Cookie: 'tmhDynamicLocale.locale=%22en-us%22',
    // 'Content-Type': 'application/json;charset=UTF-8',
    // Origin: `https://${ip}`,
  };
  return headers;
};

const agent = new https.Agent({ rejectUnauthorized: false });

const login: NextApiHandler = async (req, res) => {
  console.log('received');
  const { password, ip } = req.body;

  const url = `https://${ip}/${Endpoints.Login}`;

  const data = { right: Privilege.USER, pass: password };

  const headers = getHeaders(ip);

  try {
    const response = await phin<SunnyResponse<{ sid: string }>>({
      url,
      data,
      parse: 'json',
      method: 'post',
      timeout: 5000,
      core: { agent, headers },
    });

    console.log({ response: response.body });
    console.log({ responseHeaders: response.headers });
    res.send('Success');
  } catch (error) {
    console.error(error);
    res.status(401).send('Failure');
    //
  }
};

export default login;
