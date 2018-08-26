import React, {Component} from 'react';

class Counter extends Component{
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count : props.initValue
        };
    }

    onClickIncrementButton(){
        this.updateCount(true);
    }

    onClickDecrementButton(){
        this.updateCount(false);
    }

    updateCount(isIncrement){
        const oldValue = this.state.count;
        const newValue = isIncrement ? oldValue + 1 : oldValue - 1;
        this.setState({count : newValue});
        this.props.onUpdate(oldValue,newValue);
    }

    render(){
        return (
            <div>
                <button onClick = {this.onClickIncrementButton}>+</button>
                <button onClick = {this.onClickDecrementButton}>-</button>
                <span>{this.props.caption} Count: {this.state.count}</span>
            </div>
        );
    }
}

Counter.defaultProps = {
    initValue : 0,
    onUpdate : f => f //什么都不做的函数
};

export default Counter;