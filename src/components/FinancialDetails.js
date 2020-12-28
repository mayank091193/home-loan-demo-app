import MuiAlert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import AppContext from "./AppContext";
import {useContext} from "react";

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

export default function FinancialDetails(props) {
    const classes = useStyles();
    const myContext = useContext(AppContext);
    const handleContinue = () => {
        myContext.setSelectedTab('demographics');
        props.history.push('/demographics');
    };
    return (
        <div>
            <Alert severity="info">These are Financial Details</Alert>
            <Button variant="contained" onClick={handleContinue} className={classes.continue_button} color="primary">
                Continue
            </Button>
        </div>
    )
}
