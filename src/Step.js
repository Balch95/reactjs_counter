import React, {Component} from 'react';


class Step extends Component{

    constructor(props){
        super(props);
        this.state ={
            steps: this.props.stepMethod
        };
    }


    
    
    
    render(){
        let st = this;
        let ste = this.props.steps;

        ste = st;
        
        return( 
        
        <div className="steps">
             Krok: 
            <input ref={(data) => { st._input = data}} min="1" type='number'/>
        </div>)
    }
}



export default Step;


