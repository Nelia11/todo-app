import classes from "./FancyBorder.module.css"

const FancyBorder = ({children}) => {
    return (
        <div className={classes.border}>
            {children}
        </div>
    );
};

export default FancyBorder;