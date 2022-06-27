//index.js -> module
import React from 'react'
import ReactDOM from 'react-dom'


//import bootstrap into react
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import routings.js
import Routings from './components/routings.js'

import {Provider} from "react-redux";

import store from "./store";


ReactDOM.render(<Provider store={store}>
   <Routings/>

</Provider>, document.getElementById('root'))