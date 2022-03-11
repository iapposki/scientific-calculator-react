import React from "react";
import './index.css'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.input = {
            equation: ""
        };
        this.handleEquationChange = this.handleEquationChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
        
    }

    handleEquationChange(e){
        // console.log(e.target.value)
        this.input.equation = e.target.value
        // console.log(this.input.equation)
    }
    
    handleClick(e){
        equation.concat(e.target.equation)
        console.log(equation)
        console.log(e.target.name)
        
    }

    render(){
        return(
            <div className="main-app">
                <input className="input" onChange={this.handleEquationChange} value={this.equation} />
                <div className="numpad">
                    <button name="pi" onClick={this.handleClick}>&pi;</button>
                    <button name="mod" onClick={this.handleClick}>|x|</button>
                    <button name="exp" onClick={this.handleClick}>exp</button>
                    <button name="clear" onClick={this.handleClick}>C</button>
                    <button name="backspace" onClick={this.handleClick}>BS</button>
                    <button name="modulus" onClick={this.handleClick}>mod</button>
                    <button name="(" onClick={this.handleClick}>(</button>
                    <button name=")" onClick={this.handleClick}>)</button>
                    <button name="factorial" onClick={this.handleClick}>n!</button>
                    <button name="/" onClick={this.handleClick}>/</button>
                    <button name="x^y" onClick={this.handleClick}>x^y</button>
                    <button name="7" onClick={this.handleClick}>7</button>
                    <button name="8" onClick={this.handleClick}>8</button>
                    <button name="9" onClick={this.handleClick}>9</button>
                    <button name="*" onClick={this.handleClick}>*</button>
                    <button name="10^x" onClick={this.handleClick}>10^x</button>
                    <button name="4" onClick={this.handleClick}>4</button>
                    <button name="5" onClick={this.handleClick}>5</button>
                    <button name="6" onClick={this.handleClick}>6</button>
                    <button name="-" onClick={this.handleClick}>-</button>
                    <button name="log" onClick={this.handleClick}>log</button>
                    <button name="1" onClick={this.handleClick}>1</button>
                    <button name="2" onClick={this.handleClick}>2</button>
                    <button name="3" onClick={this.handleClick}>3</button>
                    <button name="+" onClick={this.handleClick}>+</button>
                    <button name="ln" onClick={this.handleClick}>ln</button>
                    <button name="e" onClick={this.handleClick}>e</button>
                    <button name="0" onClick={this.handleClick}>0</button>
                    <button name="." onClick={this.handleClick}>.</button>
                    <button name="=" onClick={this.handleClick}>=</button>

                </div>
            </div>
        )
    }


}



export default Calculator;