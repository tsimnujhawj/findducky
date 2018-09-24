import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "../src/components/Header/Header"
import {Cards} from "../src/components/Cards/Cards"

const App = () => (
<div>
    <Header />
        <Cards />
</div>
);

export default App;
