import MuiAlert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

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

export default function Declarations() {
    const classes = useStyles();

    return (
        <div>
            <Alert severity="info">These are Declarations</Alert>
            <Button variant="contained" href="summary" className={classes.continue_button} color="primary">
                Continue
            </Button>
        </div>
    )
}
