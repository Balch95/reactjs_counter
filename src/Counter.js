import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';

class Counter extends Component {

    constructor(props){
        super(props);

        this.state={
            counterValue: this.props.initValue,
            stepValue: this.props.initSteps,
            showClock: true,
        };

    };

    changeValue = (action) => {


        this.setState((prevState, prevProps)=>{

            let currentCounterValue = prevState.counterValue;
            let currentStep = prevState.stepValue;



            if(action === 'add'){
                currentCounterValue += currentStep;
            }else if(action === 'reset'){
                currentCounterValue = 0;
            }

            return({
                counterValue: currentCounterValue
                
            });
        });
    };
    
    tooggleClock = () =>{
        this.setState((prevState) =>{
            return({
                showClock: !prevState.showClock
            })
        })
    };

    changeStep = (value) =>{
        this.setState({stepValue: value})
    };


    render(){

        let clockElement = '';

        if (this.state.showClock){
            // clockElement = <Clock tooggleClockMethod={this.tooggleClock}/>;
            clockElement = <ClockFunctional tooggleClockMethod={this.tooggleClock}/>;
        }else{
            clockElement = <span onClick={this.tooggleClock} className='show-clock'>Show Clock</span>
        }

   
        return(
            <div className='counter'>
            Counter:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue} displayStep={this.state.stepValue} />
                <Step stepMethod={this.changeStep}/>
                {clockElement}
            </div>
        );
    };
};



export default Counter;