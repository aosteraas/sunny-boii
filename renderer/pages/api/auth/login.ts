import phin from 'phin';
import https from 'https';
import { NextApiHandler } from 'next';
import {
  createLoginCookie,
  Endpoints,
  genSessionId,
} from '../../../lib/config/endpoints';
import { Privilege } from '../../../auth/types';

type SunnyResponse<T> = {
  result: T;
};

const getHeaders = (ip: string, sessionId: string) => {
  const headers = {
    Host: ip,
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate',
    Referer: `https://${ip}/`,
    Cookie: createLoginCookie(sessionId),
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

  const sessionId = genSessionId();
  const headers = getHeaders(ip, sessionId);

  try {
    // the sid that this responds with needs to be cached for subsequent requests
    const response = await phin({
      url,
      data,
      parse: 'string',
      method: 'POST',
      timeout: 5000,
      core: { agent, headers },
    });

    console.log({
      statusCode: response.statusCode,
      responseBody: response.body,
      responseHeaders: response.headers,
    });

    res.send('Success');
  } catch (error) {
    console.error(error);
    res.status(401).send('Failure');
    //
  }
};

export default login;
