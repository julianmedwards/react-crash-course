import React, {Component} from 'react'

class Counter extends Component {
    state = {
        value: this.props.value,
    }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatValue()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-'
        classes += this.state.value === 0 ? 'warning' : 'primary'
        return classes
    }

    formatValue() {
        const {value} = this.state
        return value === 0 ? 'Zero' : value
    }
}

export default Counter
