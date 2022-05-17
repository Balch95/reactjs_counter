import React, {Component, useState} from 'react';


class Step extends Component{

    constructor(props){
        super(props);
        this.state= 0
    };
    


    updateStep =()=>{ 
        let steps = this._step.value;
        this.setState(this.steps);
        this.props.stepMethod(this.state);
    };
  
    render(){
        return( 
        <div className="steps">
             Krok: 
            <input ref={(data) => {this._step = data}}  onChange={this.updateStep}  type='number'/>
        </div>) 
    }
}



export default Step;


// <input ref={this.stepValue}  onChange={this.updateStep} min="1" type='number'/>