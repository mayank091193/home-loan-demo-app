import MuiAlert from '@material-ui/lab/Alert';

//Render alert message
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Summary() {
    return (
        <div>
            <Alert severity="info">These is summary</Alert>
        </div>
    )
}
