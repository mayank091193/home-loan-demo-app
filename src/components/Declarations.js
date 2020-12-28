import React, {useContext} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import AppContext from '../components/AppContext';

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

export default function Declarations(props) {
    const classes = useStyles();
    const myContext = useContext(AppContext);

    const handleContinue = () => {
        myContext.setSelectedTab('summary');
        props.history.push('/summary');
    };
    return (
        <div>
            <Alert severity="info">These are Declarations</Alert>
            <Button onClick={handleContinue} variant="contained"
                    className={classes.continue_button} color="primary">
                Continue
            </Button>
        </div>
    )
}
