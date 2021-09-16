import React, { useState } from 'react';
import Head from 'next/head';
import {
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { genSid } from '../auth/requests';

function Home() {
  const [ip, setIp] = useState('');
  const [password, setPassword] = useState('');
  const [lsid, setLsid] = useState(genSid());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ssid, setSsid] = useState('');
  const [loginMeta, setLoginMeta] = useState<any>();

  const onSubmit = async (e: React.FormEvent) => {};

  return (
    <>
      <Head>
        <title>Log in - Sunny Boi</title>
      </Head>

      <Flex flexDir="column" minH="100vh">
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
        >
          <Heading pb={8}>Sunny Boi</Heading>
          <form onSubmit={onSubmit}>
            <FormControl isRequired id="ip">
              <FormLabel>IP</FormLabel>
              <Input
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl pt="1rem">
              <Button colorScheme="blue" type="submit">
                Login
              </Button>
            </FormControl>
            <FormControl pt="1rem">
              <Button colorScheme="blue" type="submit">
                Login
              </Button>
            </FormControl>
          </form>
        </Flex>
      </Flex>
    </>
  );
}

export default Home;
