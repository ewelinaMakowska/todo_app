import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
               
                    
                <div className="list-element" key={todo.id}>

              

                    <div className="row">
                       

                                <div className="col span-3-of-4">
                                    {todo.content}
                                </div>


                        <div className="col span-1-of-4">
                            <label class="checkbox-label">
                                <input type="checkbox" onClick={() => { deleteTodo(todo.id) }} />
                                <span class="checkbox-custom"></span>
                                </label>
                                    </div>

                                   
                     </div>

               

                            </div>
              
                
                )
        })
    ) : (<div className="list-element-start">What do you want to do today?</div>);

    return (
        <div className="todos">
            {todoList}
            </div>
        )
}

export default Todos;