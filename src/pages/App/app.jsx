import './app.css';
import React from 'react';
import Calculator from '../../components/calculator';

class App extends React.Component{
    render(){
        return(
            <div>
               <Calculator /> 
            </div>
        )
    }
}

export default App;