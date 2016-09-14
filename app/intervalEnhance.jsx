'use strict';

import React from 'react';

//等同于 var IntervalEnhance = function(ComposedComponent){}
// => XXX 这里的XXX相当于renturn 出来的值


export var IntervalEnhance = ComposedComponent => class extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                seconds:0
            }
        }

        //在初始化渲染执行之后立刻调用一次
        componentDidMount() {
            this.interval = setInterval(this.tick.bind(this), 1000);
        }

        //在组件从dom中移除的时候立刻调用
        componentWillUnmount() {
            clearInterval(this.interval);
        }

        tick(){
            this.setState({
                seconds: this.state.seconds+1000
            })
        }

        render() {
            return <ComposedComponent {...this.props}  {...this.state}/>;
        }
};
