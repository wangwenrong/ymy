import React, { Component } from 'react';
import ListCom from '../ListCom'
import './index.css';

export default class Home extends Component {
    render() {
        // const data = [
        //     { icon: 'age', title: '年龄', detail: 18 },
        //     { icon: 'sex', title: '性别', detail: '女' },
        //     { icon: 'education', title: '学历', detail: '本科' },
        //     { icon: 'project', title: '年龄', detail: '多个' },
        //     { icon: 'skill', title: '技能', detail: 'vue/react' },
        //     { icon: 'state', title: '状态', detail: '已离职' }
        // ];
        return (
            <div className='about'>
                <h2>关于我</h2>
                <ListCom
                    data={[
                        { icon: 'age', title: '年龄', detail: 18 },
                        { icon: 'sex', title: '性别', detail: '女' },
                        { icon: 'education', title: '学历', detail: '本科' },
                        { icon: 'project', title: '年龄', detail: '多个' },
                        { icon: 'skill', title: '技能', detail: 'vue/react' },
                        { icon: 'state', title: '状态', detail: '已离职' }
                    ]}
                />
            </div>
        )
    }
}