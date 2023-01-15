import React, {Component, useState} from 'react';


class Step extends Component{


    updateStep = () => { 
        this.props.stepMethod( parseInt(this._step.value));
    };



    render(){

        return( 
        <div className="steps">
             Krok: 
            <input  min={1}  ref={(data) => {this._step = data}}  onChange={this.updateStep}  type='number'/>
        </div>)
    }

}


export default Step;


