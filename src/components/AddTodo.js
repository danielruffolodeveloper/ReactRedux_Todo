import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) => {
    let input;

    const addTask = (e) => {
        e.preventDefault();

        if(!input.value.trim()) return;

        dispatch(addTodo(input.value));
        input.value = '';

    }
    return (
           

            <form onSubmit={addTask}>
                <div class="input-group m-3 ">
                    <input placeholder="Add a item to your list" type="text" class="form-control" ref={node => input = node}/>
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-primary">Add Todo</button>
                    </div>
                </div>
    
            </form>
    )
}

export default connect()(AddTodo);