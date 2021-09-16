import phin from 'phin';
import { FC, useState } from 'react';
import { Endpoints } from '../lib/config/endpoints';
import { AuthContext } from './context';
import { genSid, getAuthedHeaders, getDefaultHeaders } from './requests';
import { LogInFormData, Privilege } from './types';

const port = 80;
const isLoggedIn = false;

const handleLogin = async (username: string, password: string) => {
  const params = { right: username, pass: password };
  const url = 'some ip';
  const res = await fetch(`${url}/${Endpoints.Login}`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: getDefaultHeaders(''),
  });

  const data = await res.json();

  res.headers;
};

export const AuthProvider: FC = ({ children }) => {
  const [url, setUrl] = useState('');

  const [lsid, setLsid] = useState(genSid());
  const [cookie, setCookie] = useState('');
  const [ssid, setSsid] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = async ({ ip, password }: LogInFormData) => {
    setUrl(`http://${ip}${Endpoints.Login}`);

    try {
      const params = { right: Privilege.USER, password };

      const res = await fetch(`${url}/`, {
        method: 'POST',
        headers: { ...getDefaultHeaders(lsid) },
        body: JSON.stringify(params),
      });

      const data = (await res.json()) as { sid: string };
      // what to do with cookies?
      // setCookie(res.headers.cookie);
      setSsid(data.sid);
      setIsLoggedIn(true);
    } catch (err) {
      console.error({ err });
    }
  };

  const checkConnection = async (): Promise<boolean> => {
    if (!lsid || ssid) {
      return false;
    }

    try {
      const res = await fetch(`${url + Endpoints.sessionCheck}?sid=${ssid}`, {
        method: 'POST',
        headers: getAuthedHeaders(),
      });
      const data = await res.json();
      return !!data?.result?.cntDwnGg;
    } catch (e) {
      return false;
    }
  };

  const logOut = async () => {
    //
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};
