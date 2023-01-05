import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Home} from "./pages/Home";
import {ChakraProvider} from "@chakra-ui/provider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Checkin} from "./pages/Checkin";
import {CheckinContent} from "./pages/Checkin/Content";
import {Theme} from "./styles/theme";
import {Checkout} from "./pages/Checkout";
import {CheckoutContent} from "./pages/Checkout/Content";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import 'simple-keyboard/build/css/index.css';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ToastContainer position={"top-center"} newestOnTop={true} theme="light"/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}>
            <Route path=":step" element={<Home/>}/>
          </Route>
          <Route path="/checkin" element={<Checkin/>}>
            <Route path=":step" element={<CheckinContent/>}/>
          </Route>
          <Route path="/checkout" element={<Checkout/>}>
            <Route path=":step" element={<CheckoutContent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
