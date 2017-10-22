import React,{Component} from 'react';
import { Modal } from 'antd';
import './index.css';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            bok:false,
            img:''
        }
    }
    showModal(e){
        console.log(e.currentTarget)
        this.setState({
            bok:true,
            img:e.currentTarget.getAttribute('data-img')
        })
    }
    cancelModal(){
        this.setState({
            bok:false
        })
    }
    render(){
        let data=[
            {icon:'weixin',name:'15011317383'},
            {icon:'qq',name:'503103604'},
            {icon:'email',name:'503103604@qq.com'},
        ]
        return(
            <div className='contact'>
                <h2>联系我</h2>
                <div>
                    <Modal
                    title="提示框"
                    visible={this.state.bok}
                    onCancel={this.cancelModal.bind(this)}               
                    >
                    <img src={this.state.img}/>
                    </Modal>
                </div>
                <div className='contact-main'>
                    {data.map((item,index)=>(
                        <div key={index} 
                        className='contact-main-item' 
                        onClick={this.showModal.bind(this)}
                        data-img={require('../../assets/img/touxiang.jpg')}>
                            <i className={`iconfont icon-${item.icon}`}></i>
                            <p className='contact-main-item-name'>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div className='contact-detail'>
                    <h3>其他联系方式</h3>
                    <div className='contact-detail-icon'>
                        <i className="iconfont icon-weibo"></i>
                        <i className="iconfont icon-weibo"></i>
                        <i className="iconfont icon-weibo"></i>
                    </div>
                    
                </div>
            </div>
        )
    }
}
