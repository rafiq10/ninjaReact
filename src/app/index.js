var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');


require('./css/index.css');
import { Router, Route, browserHistory } from 'react-router';

var TodoItem = require('./todoitem');
var AddItem = require('./additem');
var About = require('./about');

var App = createReactClass({
    render: function(){
        return(
            <Router history = {browserHistory}>
                <Route path={'/'} component ={TodoComponent}></Route>
                <Route path={'/about'} component ={About}></Route>
            </Router>
        );
    }
});

var TodoComponent = createReactClass({
    getInitialState: function(){
        return{
            todos: ['wash up', 'eat some cheese', 'take a nap', 'rafal', 'vero']
        };
    },
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item,index){
            return(
                <TodoItem item={item} key={index} onDelete={this.onDelete} />
            );
        }.bind(this));
        return(
            <div id='todo-list'>
                <p>The busiest people have the most leisure ..</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );
    },
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
            todos: updatedTodos
        });
    },
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    },
    componentWillMount: function(){
        console.log('componentWillMount');
    },
    componentDidMount: function(){
        console.log('componentDidMount');
    },

    componentWillUpdate: function(){
        console.log('componentWillUpdate');
    },
    componentDidUpdate: function(){
        console.log('componentDidUpdate');
    },

});


ReactDOM.render(<App />, document.getElementById('todo-wrapper'));