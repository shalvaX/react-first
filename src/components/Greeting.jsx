import React, { Component } from 'react';
import sayMyName from '../static/giphy.gif'
import godDamnRight from '../static/200.gif'

class Greeting extends Component {
    state = {
        value: '',
        gif: ''
    };

    handleRead = (event) => {
           if (this.state.value === "Heisenberg"){
               event.preventDefault();
               this.setState({gif: <img src={godDamnRight} alt="F" className="mt-1"/> });
           }
           else {
               alert("You are wrong");
               event.preventDefault();
               this.setState({gif: '' });
           }
    }
    handleWrite = (event) => {
        this.setState({value: event.target.value});
    }
    render() {
        return(
            <div className="position-absolute top-50 start-50 translate-middle">
                <img src={sayMyName} alt="yo"/>
                <form onSubmit={this.handleRead}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleWrite} className="form-control mt-1" aria-label="Name"/>

                    </label>
                    <button type="submit" value="Submit" className="ms-1 btn btn-dark">SAY IT</button>
                </form>
                {this.state.gif}
            </div>
        )
    }
}
export default Greeting;