import React from 'react'
import { connect } from 'react-redux'
import { increment , input ,reset } from './action'
class CounterDisplay extends React.Component {
    onClickInput() {
        console.log(this.input.value);
        this.props.input(Number(this.input.value));
    }
    onClickReset(){
        this.props.reset();
    }
    constructor()
    {
        super();
        this.onClickInput=this.onClickInput.bind(this);
        this.onClickReset=this.onClickReset.bind(this);
    }
    render() {
        return (
            <div>
                <label htmlFor="input">please input a number:</label>
                <input id="input" type="number" ref={ref => this.input = ref} />
                <button onClick={this.onClickInput}>submit</button> 
                <button onClick={this.onClickReset}>reset</button> 

            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { value: state.value};
}


const mapDispatchToProps = {
    increment,
    input,
    reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);

