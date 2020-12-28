import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
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

export default function PersonalDetails(props) {
    const classes = useStyles();
    const myContext = useContext(AppContext);
    const handleContinue = () => {
        myContext.setSelectedTab('property_details');
        props.history.push('/property_details');
    };
    return (
        <div>
            <Alert severity="info">These are Personal Details</Alert>
            <Button onClick={handleContinue} variant="contained" className={classes.continue_button} color="primary">
                Continue
            </Button>
        </div>
    );
}
