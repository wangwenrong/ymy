import React, { Component } from 'react';
import './index.css';

export default class ListCom extends Component {
    render() {
        // const data=[
        //     {icon:'age',title:'年龄',detail:18},
        //     {icon:'sex',title:'性别',detail:'女'},
        //     {icon:'education',title:'学历',detail:'本科'},
        //     {icon:'project',title:'年龄',detail:'多个'},
        //     {icon:'skill',title:'技能',detail:'vue/react'},
        //     {icon:'state',title:'状态',detail:'已离职'}
        // ];
        let data = this.props.data
        return (
            <div className='about-main'>
                {data.map((item, index) => (
                    <div key={index} className='about-main-item'>
                        <i className={`iconfont icon-${item.icon}`}></i>
                        <div className='about-right'>
                            <p>{item.title}</p>
                            <p>{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}