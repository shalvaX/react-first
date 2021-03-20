import React, { Component } from 'react';
import Greeting from "./Greeting";
import Colors from "./Colors";

class Menu extends Component {
    state = {
        value: '',
        greet: <Greeting/>,
        color: '',
        numbers: '',
    }

    clearPage(){

    }

    pageController = (event) => {
        this.setState({value: event.target.value});
        console.log(this.state.value)
        event.preventDefault();
        if (this.state.value === "Colors"){
            this.setState({color: <Colors/>});
            this.setState({greet: ''});
            this.setState({number:''});

        }
        if (this.state.value === "Greeting"){
            this.setState({color: ''});
            this.setState({greet: <Greeting/>});
            this.setState({number:''});
            event.preventDefault();
        }
        if (this.state.value === "Numbers"){
            this.setState({color: ''});
            this.setState({greet: ''});
            this.setState({number:''});
            event.preventDefault();
        }
    }

    render(){
        return(
            <span>
                <div className="btn-group float-end mt-3 me-3">
                    <input className="btn btn-primary" type="submit" value="Greeting" onClick={this.pageController}/>
                    <input className="btn btn-primary" type="submit" value="Colors" onClick={this.pageController} />
                    <input className="btn btn-primary" type="submit" value="Numbers" onClick={this.pageController} />
                </div>
                {this.state.color}
                {this.state.greet}
                {this.state.numbers}
            </span>
        )
    }
}

export default Menu;