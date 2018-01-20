var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var TodoComponent = createReactClass({
    render: function(){
        return(
            <div>
            {this.props.mssg}
            <p><strong>cheese name: </strong>this.props.cheese.name</p>
            <p><strong>cheese smell factor: </strong>this.props.cheese.smellFactor</p>
            <p><strong>cheese price: </strong>this.props.cheese.price</p>
            </div>
        );
    }
});

var myCheese = {name: "platano", smellFactor: "Extreme pong", price: "3.50"}

ReactDOM.render(<TodoComponent mssg = "I like banana" cheese = {myCheese}/>, document.getElementById('todo-wrapper'));