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

function Home() {
  const [ip, setIp] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ ip, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      setIsLoggedIn(res.status === 200);
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>Log in - Sunny Boii</title>
      </Head>

      <Flex flexDir="column" minH="100vh">
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
        >
          <Heading pb={8}>Sunny Boii</Heading>
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
          </form>
        </Flex>
      </Flex>
    </>
  );
}

export default Home;
