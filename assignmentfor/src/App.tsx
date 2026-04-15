// import { useState } from 'react';
import './index.css';
import { TitleView } from './Titleview';
// import { MainLayout } from '@/layouts/MainLayout';
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router";
import { Titleview } from "@/views";
import { Route, Routes } from "react-router";

// import axios from "axios";
// 
export const App = () => {
  return (
    <Routes>
<Route path="/" element={<TitleView/>}/> 
    </Routes>
  )
}