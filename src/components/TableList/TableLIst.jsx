import TaskRow from "../TaskRow/TaskRow";
import FancyBorder from "../FancyBorder/FancyBorder"
import PropTypes from 'prop-types';

const TableList = ({todos, deleteTask, isValidDescription, isValidDate, isLoading}) => {
    return (
        <>
            {isLoading ? 
            (<div>Loading...</div>) 
            : todos.length === 0 ?
            (<p>No tasks found</p>) 
            : (todos.map((todo) => 
            <FancyBorder key={todo.id} >
                <TaskRow 
                    description={todo.description} 
                    deadline={todo.deadline}
                    deleteTask={() => deleteTask(todo.id)}
                    isValidDescription={isValidDescription}
                    isValidDate={isValidDate}
                />
            </FancyBorder>
            ))} 
        </>
    );
};

TableList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTask: PropTypes.func,
    isValidDescription: PropTypes.func,
    isValidDate: PropTypes.func,
    isLoading: PropTypes.bool   
}

export default TableList;
