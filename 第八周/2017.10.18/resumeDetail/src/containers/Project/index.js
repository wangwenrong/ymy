import React, { Component } from 'react';
import { Timeline } from 'antd';
// import data from '../../json/data.json';
import api from '../../api/getdata';
import './index.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: []
        }
    }
    componentWillMount() {
       
        api('wangwenrong')
        .then(data=>{
            this.setState({
                data:data.data
            })
            // console.log(data.data)
        })
    }
    showDate(date) {
        let newDate=new Date(date);
        let y = newDate.getFullYear(),
            m = newDate.getMonth() + 1,
            d = newDate.getDate(),
            h = newDate.getHours(),
            M = newDate.getMinutes(),
            s = newDate.getMinutes();
        return `${y}年${m}月${d}日 ${h}:${M}:${s}`
    }
    render() {
        const data=this.state.data
        return (
            <div className='project'>
                <Timeline pending={<a href='https://github.com/wangwenrong'>查看所有项目</a>}>
                    {data.map((item, index) => (
                        <Timeline.Item key={index}>
                            <h3 className='project-title'>{item.name}</h3>
                            <p className='project-date'>{this.showDate(`${item.created_at}`)}</p>
                            <a href={item.html_url}><i className='iconfont icon-link'></i>查看源码</a>
                            <p className="project-desc">
                                {item.description}
                            </p>
                        </Timeline.Item>
                    ))}

                </Timeline>
            </div>
        )
    }
}