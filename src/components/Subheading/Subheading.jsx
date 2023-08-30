import classes from "./Subheading.module.css"

const Subheading = ({subheading}) => {
    return (
        <div className={classes.subheading}>You have: {subheading}</div>
    );
};

export default Subheading;