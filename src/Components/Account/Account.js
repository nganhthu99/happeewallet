import React, {useEffect, useState} from 'react';
import useStyles from "../../Style/StyleSheet";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import UnspentTxOutsTable from "./UnspentTxOutsTable";
import {getAddressService, getBalanceService, getMyUnspentTxOutsService} from "../../Service/Service";

const Account = (props) => {
    const classes = useStyles()
    const [address, setAddress] = useState("")
    const [balance, setBalance] = useState(0)
    const [unspentTxOuts, setUnspentTxOuts] = useState([])

    useEffect(() => {
        const addressPromise = getAddressService()
        const balancePromise = getBalanceService()
        const unspentPromise = getMyUnspentTxOutsService()
        Promise.all([addressPromise, balancePromise, unspentPromise])
            .then((res) => {
                setAddress(res[0].data.address)
                setBalance(res[1].data.balance)
                setUnspentTxOuts(res[2].data.unspentTxOuts)
            })
            .catch((error) => {

            })
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item container xs={12}>
                            <Grid item xs={2}>
                                <Typography >My address: </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Link>{address}</Link>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={2}>
                                <Typography >My balance: </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography >{`${balance} Happee Coin`}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <UnspentTxOutsTable data={unspentTxOuts}/>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default Account;
