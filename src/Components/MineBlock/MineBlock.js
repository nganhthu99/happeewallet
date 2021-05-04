import React, {useEffect, useState} from 'react';
import useStyles from "../../Style/StyleSheet";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TransactionsTable from "./TransactionsTable";
import {getTransactionsPoolService, mineBlockService} from "../../Service/Service";
import Button from "@material-ui/core/Button";
import FindReplaceRoundedIcon from '@material-ui/icons/FindReplaceRounded';
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import BlockDetail from "./BlockDetail";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MineBlock = (props) => {
    const classes = useStyles()
    const [transactionsPool, setTransactionsPool] = useState([])

    useEffect(() => {
        getTransactionsPoolService()
            .then((res) => {
                setTransactionsPool(res.data)
            })
            .catch((error) => {

            })
    }, [])

    const [status, setStatus] = useState(0)
    // 0: nothing
    // 1: is mining
    // 2: mine succeeded
    // 3: mine failed
    const [detail, setDetail] = useState({data: []})
    const handleClose = () => {
        setStatus(0)
    };

    const handleMineButton = () => {
        if (transactionsPool.length) {
            setStatus(1)
            mineBlockService()
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
                    <Button
                        onClick={handleMineButton}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<FindReplaceRoundedIcon />}
                    >
                        Mine block
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
                                    Succeed! You have just mine a new block !!!
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <BlockDetail data={detail}/>
                    </Dialog>}
                    {status === 3 &&
                    <Snackbar open={status === 3} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Error occurred. Mining process is stop.
                        </Alert>
                    </Snackbar>}
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <TransactionsTable data={transactionsPool}/>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default MineBlock;
