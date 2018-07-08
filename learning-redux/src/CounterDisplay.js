import React from 'react'
import { connect } from 'react-redux'
import { increment , input } from './action'
class CounterDisplay extends React.Component {
    onClick() {
        console.log(this.input.value);
        this.props.input(Number(this.input.value));
    }
    constructor()
    {
        super();
        this.onClick=this.onClick.bind(this);
    }
    render() {
        return (
            <div>
                <label htmlFor="input">please input a number:</label>
                <input id="input" type="number" ref={ref => this.input = ref} />
                <div>{this.props.value}</div>
                <button onClick={this.onClick}>submit</button> 
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { value: state.value };
}


const mapDispatchToProps = {
    increment,
    input,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);

