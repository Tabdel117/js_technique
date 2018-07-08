import {React, Component} from 'react'
import {increment,decrement,reset} from  './Action.js'
import {connect} from './node_modules/react-redux'
export class Counter extends Component{
    onClickIncrement(){
        this.props.increment();
    };
    onClickIncrement(){
        this.props.decrement();
    };
    onClickReset(){
        this.props.reset();
    };
    constructor(){
        super();
        this.onClickIncrement=this.onClickIncrement.bind(this);
        this.onClickdecrement=this.onClickDecrement.bind(this);
        this.onClickReset=this.onClickReset.bind(this);
    }
    // onClickIncrement(){
    //     this.props.increment(this.props.caption);
    // };
    // onClickIncrement(){
    //     this.props.decrement(this.props.caption);
    // };
    // onClickReset(){
    //     this.props.reset(this.props.caption);
    // };
   
    render(){
        return(
            <div>
                <button onClick={this.onClickIncrement}>+</button>
                <button onClick={this.onClickDecrement}>+</button>  
                <button onClick={this.onClickReset}>Reset</button>        
                <span>{this.props.value}</span>        
            </div>
        )
    }
}
function mapStateToProps(state,ownProps){
    return(
        {value:state[ownProps.caption]}
    );
}

const mapDispatchToProps={
    increment: increment,
    decrement: decrement,
    reset: reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);