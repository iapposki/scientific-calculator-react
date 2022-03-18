import React from "react";
import './index.css';
import {evaluate, string} from 'mathjs';

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            equation: "",
            history:[]
        };
        this.handleEquationChange = this.handleEquationChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
        this.updateState = this.updateState.bind(this);
        this.clearEquation = this.clearEquation.bind(this);
        this.bsEquation = this.bsEquation.bind(this);
    }

    updateState(newState){
        this.setState(newState)
    }

    handleEquationChange(e){
        // console.log(e.target.name)
        var copyHistory = [...this.state.history];
        this.updateState({equation:e.target.name,history:copyHistory})
        // console.log(this.state.equation)
    }
    
    handleClick(e){
        var copyEquation = [...this.state.equation]
        copyEquation.push(e.target.name)
        copyEquation = copyEquation.join("")
        console.log(copyEquation)
        var copyHistory = [...this.state.history];
        this.updateState({equation:copyEquation,history:copyHistory})
        // console.log(e.target.name)
    }

    handleSolve(){
        var copyEquation = this.state.equation;
        var copyHistory = [...this.state.history];
        console.log("history:",this.state.history)
        var res = string(evaluate(copyEquation))
        copyHistory.push(copyEquation+"="+res)
        // console.log(copyHistory)
        this.updateState({
            equation:res,
            history:copyHistory
        })
    }

    clearEquation(){
        if (this.state.equation === ""){
            var copyHistory = []
        } else {
            var copyHistory = this.state.history;
        }
        this.updateState({equation:"",history:copyHistory})
    }

    bsEquation(){
        var copyEquation = [...this.state.equation]
        copyEquation = copyEquation.slice(0,copyEquation.length-1).join("")
        var copyHistory = this.state.history;
        this.updateState({equation:copyEquation,history:copyHistory})
    }

    render(){
        return(
            <div className="main-app">
                <input className="input" value={this.state.equation} onChange={this.handleEquationChange}  />
                <div className="numpad">
                    <button name="pi" onClick={this.handleClick}>&pi;</button>
                    <button name="abs(" onClick={this.handleClick}>abs</button>
                    <button name="exp(" onClick={this.handleClick}>exp</button>
                    <button onClick={this.clearEquation}>C</button>
                    <button onClick={this.bsEquation}>BS</button>
                    <button name="sin(" onClick={this.handleClick}>sin</button>
                    <button name="(" onClick={this.handleClick}>(</button>
                    <button name=")" onClick={this.handleClick}>)</button>
                    <button name="factorial(" onClick={this.handleClick}>!</button>
                    <button name="/" onClick={this.handleClick}>/</button>
                    <button name="cos(" onClick={this.handleClick}>cos</button>
                    <button name="7" onClick={this.handleClick}>7</button>
                    <button name="8" onClick={this.handleClick}>8</button>
                    <button name="9" onClick={this.handleClick}>9</button>
                    <button name="*" onClick={this.handleClick}>*</button>
                    <button name="tan(" onClick={this.handleClick}>tan</button>
                    <button name="4" onClick={this.handleClick}>4</button>
                    <button name="5" onClick={this.handleClick}>5</button>
                    <button name="6" onClick={this.handleClick}>6</button>
                    <button name="-" onClick={this.handleClick}>-</button>
                    <button name="log(" onClick={this.handleClick}>log</button>
                    <button name="1" onClick={this.handleClick}>1</button>
                    <button name="2" onClick={this.handleClick}>2</button>
                    <button name="3" onClick={this.handleClick}>3</button>
                    <button name="+" onClick={this.handleClick}>+</button>
                    <button name="ln(" onClick={this.handleClick}>ln</button>
                    <button name="^" onClick={this.handleClick}>x^y</button>
                    <button name="0" onClick={this.handleClick}>0</button>
                    <button name="." onClick={this.handleClick}>.</button>
                    <button name="=" onClick={this.handleSolve}>=</button>

                </div>
                {/* <input type={"text"} value={this.state.history} className="history" /> */}
                <textarea readOnly className="history" value={this.state.history.join("\n")}></textarea>
            </div>
        )
    }


}



export default Calculator;