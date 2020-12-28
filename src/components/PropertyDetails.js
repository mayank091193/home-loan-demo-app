import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';


//Make the required styles
const useStyles = makeStyles((theme) => ({
    input_field: {
        margin: theme.spacing(1),
        width: '39ch',
    },
    continue_button: {
        bottom: 15,
        right: 15,
        position: 'fixed'
    },
}));

//Function to call public API
function fetchDummyData() {
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
        .then(response => {
            console.log(response);
        }, error => {
            console.log("Something went wrong!")
        });
}

fetchDummyData();

export default function PropertyDetails(props) {
    const classes = useStyles();
    const [property_value, setPropertyValue] = React.useState('');
    const [downpayment_dollar, setDownpaymentDollar] = React.useState('');
    const [downpayment_percent, setDownpaymentPercent] = React.useState('');
    const type_of_property_options = ['Single Family House', 'Multi Family House', 'Condominium']

    // Propery value change event
    const handlePropertyValueChange = (event) => {
        setPropertyValue(event.target.value);
    };

    //Down payment - $ change event
    const handleDownpaymentDollarChange = (event) => {
        setDownpaymentDollar(event.target.value);
    };

    //Down payment percentages change event
    const handleDownpaymentPercentChange = (event) => {
        setDownpaymentPercent(event.target.value);
    };

    //Form submit
    const handleSubmit = () => {
        window.location.href = "financial_details"
    };

    return (
        <div className={classes.root}>
            <ValidatorForm onSubmit={handleSubmit} className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextValidator style={{marginLeft: 0}} className={classes.input_field} value={property_value}
                                       onChange={handlePropertyValueChange}
                                       type="number" id="property-value" label="Property Value"
                                       validators={['required', 'maxNumber:10000000000']}
                                       errorMessages={['This field is required', 'Property value should be less than 10,000,000,000']}
                                       variant="outlined"/>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={4}>
                            <TextValidator style={{marginLeft: 0}} className={classes.input_field} value={downpayment_dollar}
                                           onChange={handleDownpaymentDollarChange} type="number"
                                           id="downpayment-dollar"
                                           validators={['required', 'maxNumber:' + property_value]}
                                           errorMessages={['This field is required', 'Down payment value should be less than Property value']}
                                           label="Downpayment - $" variant="outlined"/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextValidator className={classes.input_field} value={downpayment_percent}
                                           error={downpayment_percent > 100}
                                           onChange={handleDownpaymentPercentChange} type="number"
                                           id="downpayment-percent"
                                           validators={['required', 'maxNumber:99']}
                                           errorMessages={['This field is required', 'Down payment should be less than 100%']}
                                           label="Downpayment - %" variant="outlined"/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={[]}
                            getOptionLabel={(option) => option}
                            style={{width: '39ch', marginTop: '8px'}}
                            renderInput={(params) => <TextField {...params} label="Purpose"
                                                                variant="outlined"/>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={type_of_property_options}
                            getOptionLabel={(option) => option}
                            style={{width: '39ch', marginTop: '15px'}}
                            renderInput={(params) => <TextField {...params} label="Type of Property"
                                                                variant="outlined"/>}
                        />
                    </Grid>
                    <Button type="submit" variant="contained" className={classes.continue_button} color="primary">
                        Continue
                    </Button>
                </Grid>
            </ValidatorForm>
        </div>
    )
}
