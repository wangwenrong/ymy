import React,{Component} from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';

import './index.css'
export default class NavLinks extends Component {
    showMenu(data,collapse){
        return data.map((item,index)=>(
            <Menu.Item key={index}>
                <Link to={item.to=='index'?'/':`/${item.to}`}><i className={`nav-icon iconfont icon-${item.to}`}></i>{collapse?<span>{item.name}</span>:''}</Link>
            </Menu.Item>
        ))
    }
    render() {
        const data=[
            {to:'index',name:'首页'},
            {to:'about',name:'关于我'},
            {to:'project',name:'我的项目'},
            {to:'skill',name:'我的技能'},
            {to:'contact',name:'联系我'},
        ];
        const collapse=this.props.collapse;
        const changeCollapse=this.props.changeCollapse;
        return (
            <aside>
                <div className={collapse?'layout-aside':'layout-aside layout-aside-collapse'}>
                    <div className='layout-title'>
                        <i className='iconfont icon-jianli'></i>
                        {collapse?<span>王文荣</span>:''}
                    </div>
                    <Menu
                        defaultSelectedKeys={[this.props.path]}
                        defaultOpenKeys={['index']}
                        mode="inline"
                        theme="dark"
                    >
                    {this.showMenu(data,collapse)}
                    </Menu>
                    <div className='layout-action' onClick={changeCollapse}>
                        <Icon type={collapse?"left":"right"} />
                    </div>
                </div>
            </aside>
        )
    }
}