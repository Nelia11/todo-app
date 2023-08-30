import { useState } from "react";
import PropTypes from "prop-types";

const { DateTime } = require("luxon");

const AddTaskRow = ({ handleAddTodo }) => {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState(DateTime.now().toFormat("yyyy-MM-dd"));

    const addTodo = (e) => {
        e.preventDefault();
        handleAddTodo(description, deadline);
        setDescription("");
        setDeadline("");
    };

    return (
        <form className="add" onSubmit={addTodo}>
            <input 
                id="description"
                name="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <input
                id="deadline"
                name="deadline"
                type="date"
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
};

AddTaskRow.propTypes = {
    handleAddTodo: PropTypes.func
}

export default AddTaskRow;