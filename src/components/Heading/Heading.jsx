import Subheading from "../Subheading/Subheading";

const Heading = ({todos}) => {
    const count = todos.length;
    const noun = count === 1 ? "task" : "tasks";
    let subheading = `${count} ${noun}`;
    return (
        <>
            <h1>Todo App</h1>
            <Subheading subheading={subheading}/>
        </>
    );
};

export default Heading;