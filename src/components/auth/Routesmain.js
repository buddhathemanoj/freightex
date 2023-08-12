import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from './Login';
import { Signup } from './Signup';
export const Routesmain = () => {
  return (
    <div>
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/Signup" element={<Signup/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}
