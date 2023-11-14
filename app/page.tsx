"use client";

import Board from "@/components/Board";
import Header from "@/components/Header";
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from "@/components/LoginPage";

import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { FaTwitter, FaFacebookSquare } from 'react-icons/fa';
import { SetStateAction, useState } from "react";
import MainPage from "@/components/MainPage";

export default function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (userData: SetStateAction<null>) => {
      // Handle user auth
      setUser(userData);
  }
  return (
    // <main>
    //   {/* Header */}
    //   <Header/>
    //   {/* <Board/> */}
    //   <Board/>
    //   {/* <h1>Trello 2.0</h1> */}
    // </main>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </Router>
  )
}
