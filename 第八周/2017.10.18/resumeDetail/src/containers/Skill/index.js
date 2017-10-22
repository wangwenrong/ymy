import React, { Component } from 'react';
import ListCom from '../ListCom';


export default class Home extends Component {
    render() {
        return (
            <div className='skill'>
                <ListCom data={[
                    { icon: 'Programming', title: '编程', detail: 'node.js' },
                    { icon: 'css', title: 'css3', detail: 'css3' },
                    { icon: 'sass', title: 'sass', detail: 'sass' },
                    { icon: 'xiaochengxu', title: 'xiaochengxu', detail: 'xiaochengxu' },
                    { icon: 'react', title: 'react', detail: 'vue/react' },
                    { icon: 'frame', title: 'frame', detail: 'frame' }
                ]} />
            </div>
        )
    }
}