import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavLinks from '../NavLinks';

import './index.css';
export default class App extends Component{
    constructor(){
        super();
        this.state={
            path:'index',
            collapse:true
        }
    };
    changeCollapse(){
        this.state.collapse=!this.state.collapse;
        this.forceUpdate();
    }
    componentWillUpdate(nextProps,nextState){
        let newPath=location.hash.split('#/')[1]||'index';
        //console.log(newPath)
        if(newPath!==nextState.path){
            // this.setState({
            //     path:newPath
            // })
            this.state.path=newPath
            this.forceUpdate();
        }
        
    }
    render(){
        let collapse=this.state.collapse;
        return(
            <div>
                <NavLinks path={this.state.path} collapse={this.state.collapse} changeCollapse={this.changeCollapse.bind(this)}/>
                <div className={collapse?'main':'main main-collapse'}>
                    <ReactCSSTransitionGroup
                        component="div"
                        className="app"
                        transitionName="app"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                    >
                        <div className='container' key={this.props.location.pathname}>
                            {this.props.children}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}