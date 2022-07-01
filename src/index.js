import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render( 
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)

reportWebVitals();