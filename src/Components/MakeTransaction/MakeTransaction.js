import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "../../Style/StyleSheet";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {sendTransactionService} from "../../Service/Service";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Typography from "@material-ui/core/Typography";
import BlockDetail from "../MineBlock/BlockDetail";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import MuiAlert from "@material-ui/lab/Alert";
import TransactionDetail from "./TransactionDetail";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MakeTransaction = (props) => {
    const classes = useStyles()
    const [receiverAddress, setReceiverAddress] = useState("")
    const [amount, setAmount] = useState(0)

    const [status, setStatus] = useState(0)
    // 0: nothing
    // 1: is sending
    // 2: send succeedd
    // 3: send failed
    const [detail, setDetail] = useState({txIns: [], txOuts: []})
    const handleClose = () => {
        setStatus(0)
    };

    const handleSend = () => {
        const numAmount = Number(amount)
        if (amount > 0) {
            setStatus(1)
            sendTransactionService(receiverAddress, numAmount)
                .then((res) => {
                    setStatus(2)
                    setDetail(res.data)
                })
                .catch((error) => {
                    setStatus(3)
                })
        }
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(event) => setReceiverAddress(event.target.value)}
                                value={receiverAddress}
                                fullWidth
                                label="Receiver address"
                                variant="outlined"
                                color="primary"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={(event) => setAmount(event.target.value)}
                                value={amount}
                                fullWidth
                                label="Amount"
                                variant="outlined"
                                color="primary"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained"
                                    onClick={handleSend}
                                    color="primary">
                                Send transaction
                            </Button>
                            {status === 1 &&
                            <Backdrop className={classes.backdrop} open={status === 1}>
                                <CircularProgress color="inherit" />
                            </Backdrop>}
                            {status === 2 &&
                            <Dialog fullScreen open={status === 2} onClose={handleClose} TransitionComponent={Transition}>
                                <AppBar position="sticky" >
                                    <Toolbar>
                                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                            <CloseRoundedIcon />
                                        </IconButton>
                                        <Typography variant="h6" className={classes.title}>
                                            Succeed! You have just send a transaction. Now waiting for it to get confirmed.
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <TransactionDetail data={detail}/>
                            </Dialog>}
                            {status === 3 &&
                            <Snackbar open={status === 3} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error">
                                    Error occurred. Mining process is stop.
                                </Alert>
                            </Snackbar>}
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default MakeTransaction;
