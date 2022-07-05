import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CaribbeanApp } from './CaribbeanApp';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Clases de primeflex
import '/node_modules/primeflex/primeflex.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CaribbeanApp />
);