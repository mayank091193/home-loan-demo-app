import MuiAlert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {useContext} from "react";
import AppContext from "./AppContext";

//Make the required styles
const useStyles = makeStyles((theme) => ({
    continue_button: {
        bottom: 15,
        right: 15,
        position: 'fixed'
    },
}));

//Render alert message
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Demographics(props) {
    const classes = useStyles();
    const myContext = useContext(AppContext);
    const handleContinue = () => {
        myContext.setSelectedTab('declarations');
        props.history.push('/declarations');
    };
    return (
        <div>
            <Alert severity="info">These are Demographics</Alert>
            <Button variant="contained" onClick={handleContinue} className={classes.continue_button} color="primary">
                Continue
            </Button>
        </div>
    )
}
