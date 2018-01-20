var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var TodoComponent = createReactClass({
    getInitialState: function(){
        return{
            todos: ['wash up', 'eat some cheese', 'take a nap', 'rafal']
        };
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item,index){
            return(
                <li>{item}</li>
            )
        });
        return(
            <div id='todo-list'>
                <p>The busiest people have the most leisure ..</p>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
});

//var myCheese = {name: "platano", smellFactor: "Extreme pong", price: "3.50"}
{/* <TodoComponent todos = {this.state.todos} /> */}
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));