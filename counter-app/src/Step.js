import React, {Component, useState} from 'react';


class Step extends Component{

    constructor(props){
        super(props);
        this.state = '';
    };
    
    

    updateStep =()=>{ 
        let step = this._step.value;
        console.log(step)
        this.setState({value: parseInt(step)});
        this.props.stepMethod(this.state);
    };
  

   

    render(){

       
        
        return( 
        <div className="steps">
             Krok: 
            <input min={1}  ref={(data) => {this._step = data}}  onChange={this.updateStep}  type='number'/>
        </div>)
    }

}


export default Step;


// <input ref={this.stepValue}  onChange={this.updateStep} min="1" type='number'/>