import React, { Component } from 'react';
import { format } from 'react-string-format';

class Colors extends Component {
    constructor() {
        super();
        this.getColor = this.getColor.bind(this);
    }

    state = {
        color: '',
        backColor: ''
        //color: 'bg-X position-relative start-50 translate-middle mb-2 text-Y'
    }
    colorController () {
        let {backColor,color} = this.state;
        return `bg-${backColor} position-relative start-50 translate-middle mb-2 text-${color}`;
    }

    getColor (event)  {
        let length = event.target.className.length;
        const cutedColor = event.target.className.slice(13,length);
        let backcolor;
        if (cutedColor === "warning" || cutedColor === "light" || cutedColor === "secondary" ) {
            backcolor = "dark";
        }
       else {
            backcolor = "light";
        }
       this.setState( {color: cutedColor,backColor:backcolor});
       console.log(cutedColor,backcolor)


    }

    render(){
        return(
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className={this.colorController()} > Lorem Ipsum Dolor Sit Amet </h1>
                <button type="button" className="btn ms-2 btn-primary" onClick={this.getColor} >Button 1</button>
                <button type="button" className="btn ms-2 btn-secondary" onClick={this.getColor} >Button 2</button>
                <button type="button" className="btn ms-2 btn-danger" onClick={this.getColor} >Button 3</button>
                <button type="button" className="btn ms-2 btn-warning" onClick={this.getColor} >Button 4</button>
                <button type="button" className="btn ms-2 btn-info" onClick={this.getColor} >Button 5</button>
                <button type="button" className="btn ms-2 btn-dark" onClick={this.getColor} >Button 6</button>
                <button type="button" className="btn ms-2 btn-light" onClick={this.getColor} >Button 7</button>
            </div>
        )
    }
}
export default Colors;