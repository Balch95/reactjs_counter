import React, {Component} from 'react';
import './Clock.css';

class Clock extends Component{

    constructor(props){
        super(props);
        this.state={date: new Date()};
        console.log('inicjalizacja metoda konstruktora')
    }

    componentDidMount(){
        this.timerID = setInterval(()=>{this.tick()}, 1000);
        console.log('mounting cycle');
    }
    
    componentDidUpdate(){
        console.log('update cycle');
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
        console.log('unmouting cycle');
    }

    tick = () =>{
        this.setState({
            date: new Date()
        });
    };


    render(){
        return(
           <div className='clock'>
               <h4>Time: {this.state.date.toLocaleTimeString()} <span onClick={this.props.tooggleClockMethod}>X</span></h4> 
           </div> 
        )
    }
};

export default Clock;