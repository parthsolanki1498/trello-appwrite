"use client";

import Board from "@/components/Board";
import Header from "@/components/Header";
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import Login from '@/components/Login';

import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { SetStateAction, useState } from "react";

export default function Home() {

  const [user, setUser] = useState(null);

  const handleLogin = (userData: SetStateAction<null>) => {
      // Handle user auth
      setUser(userData);
  }
  return (
    <main>
      {/* Header */}
      <Header/>
      {/* <Board/> */}
      <Board/>
      {/* <h1>Trello 2.0</h1> */}

    </main>
  )
}
