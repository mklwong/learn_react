import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render(){
        return (
            <h2>This is my first app heading that is changed!</h2>
        );
    }
}

const app = document.getElementById('app')



ReactDOM.render(<App />,app)

console.log('hello2')