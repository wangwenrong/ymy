import React from 'react';
import ReactDOM,{render} from 'react-dom';
import Routes from './routes';
import antd from 'antd';
import 'antd/dist/antd.css';

import '../assets/fonts/iconfont.css'
//引入全局样式
import './main.css'


render(Routes,document.getElementById('app'));

