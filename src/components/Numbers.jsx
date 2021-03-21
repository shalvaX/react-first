import React, { Component } from 'react';

class Numbers extends Component  {
    constructor() {
        super();
        this.controlNumber = this.controlNumber.bind(this)
    }

    state = {
        number: 0,
        value: ''
    }
    controlNumberDisplay () {
        const { number } = this.state;
        return number;
    }

    controlNumberColor = () => {
        let classes = "position-relative start-50 mb-2 text-"
        if (this.state.number === 0){
            classes += "primary";
        }
        else if (this.state.number < 0) {
            classes += "danger";
        }
        else if (this.state.number > 0) {
            classes += "success";
        }
        return classes;
    }
    async controlNumber (event) {
        await this.setState({value: event.target.textContent});
        console.log(this.state.value)
        if (this.state.value === "+1") this.setState({number: this.state.number + 1 })
        else if (this.state.value === "+5") this.setState({number: this.state.number + 5})
        else if (this.state.value === "+100") this.setState({number: this.state.number + 100 })
        else if (this.state.value === "-1") this.setState({number: this.state.number - 1 })
        else if (this.state.value === "-5") this.setState({number: this.state.number - 5 })
        else if (this.state.value === "-100") this.setState({number: this.state.number - 100 })
    }
    render(){
        return(
            <React.Fragment>
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className={this.controlNumberColor()}>{this.controlNumberDisplay()}</h1>
                <button type="button" className="btn btn-success ms-2" onClick={this.controlNumber}>+1</button>
                <button type="button" className="btn btn-success ms-2" onClick={this.controlNumber}>+5</button>
                <button type="button" className="btn btn-success ms-2" onClick={this.controlNumber}>+100</button>
                <button type="button" className="btn btn-danger ms-2" onClick={this.controlNumber}>-100</button>
                <button type="button" className="btn btn-danger ms-2" onClick={this.controlNumber}>-5</button>
                <button type="button" className="btn btn-danger ms-2" onClick={this.controlNumber}>-1</button>
            </div>
            </React.Fragment>
        )
    }
}

export default Numbers;
