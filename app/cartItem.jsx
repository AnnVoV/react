import React from 'react';
import {IntervalEnhance} from './intervalEnhance.jsx';


class CartItem extends React.Component {
    constructor(props){
        super(props);

        //感觉不会变的值我们要设置成this.props.值
        //感觉会变动的值

        this.state = {
           qty: props.initialQty,
           total: 0
        };
    }

    //在渲染执行之前立即调用
    componentWillMount() {
        this.calculateMoney();
    }

    calculateMoney() {
        //计算出总共的金额 单价 * 重量
        this.setState({total:this.state.qty * this.props.perPrice});
    }


    //增加重量
    increaseQty(){
        //为什么不通过setState改值就不行呢？文章里面有说明，希望我们把this.state看成是不可变的变量
        this.setState({qty:this.state.qty + 1}, this.calculateMoney);
    }


    //减少重量
    decreaseQty (){
        var nowQty = this.state.qty-1;
        nowQty = (nowQty<0)?0:nowQty;
        this.setState({qty:nowQty}, this.calculateMoney);
    }


    render() {
        return(
            <article className = "row large-4">
                <figure className = "text-center">
                    <p>
                        <img src={this.props.image}/>
                    </p>
                    <figcaption>
                        <h2>{this.props.title}</h2>
                    </figcaption>
                </figure>
                <div className = "row">
                    <div className="m-button">
                        <span>Quantity:</span>
                        <span>{this.state.qty}</span>

                       <button onClick={this.increaseQty.bind(this)}>+</button>
                       <button onClick={this.decreaseQty.bind(this)}>-</button>


                        <span>PerPrice:</span>
                        <span>{this.props.perPrice}</span>
                        <br/>
                    </div>
                </div>

                <div>
                    <span>Total</span>
                    <span>{this.state.total}</span>
                </div>


                <p className="large-12 column">
                    <strong>Time for interval:</strong>
                    {this.props.seconds}ms
                </p>
            </article>

        );
    }
};

export default IntervalEnhance(CartItem);