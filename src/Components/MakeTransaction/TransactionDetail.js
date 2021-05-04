import React from 'react';
import useStyles from "../../Style/StyleSheet";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const TransactionDetail = (props) => {
    const classes = useStyles()
    const detail = props.data

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <Grid container spacing={2}>
                                <Grid item container xs={12}>
                                    <Grid item xs={3}>
                                        <Typography style={{ fontWeight: 600 }}>Transaction Id: </Typography>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Link>{detail.id}</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                        className={classes.list}>

                        {/*Transaction Inputs*/}
                        <ListItem button aria-expanded>
                            <ListItemIcon>
                                <SubdirectoryArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Transaction Inputs" />
                        </ListItem>
                        {/*<Collapse timeout="auto" unmountOnExit>*/}
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Transaction Output Id</TableCell>
                                            <TableCell align="right">Transaction Output Index</TableCell>
                                            <TableCell align="right">Signature</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {detail.txIns.map((row) => (
                                            <TableRow key={row.signature}>
                                                <TableCell component="th" scope="row">
                                                    <Link>{row.txOutTransactionId}</Link>
                                                </TableCell>
                                                <TableCell align="right">{row.txOutIndex}</TableCell>
                                                <TableCell align="right">{row.signature}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        {/*</Collapse>*/}

                        {/*Transaction outputs*/}
                        <ListItem button>
                            <ListItemIcon>
                                <SubdirectoryArrowLeftIcon />
                            </ListItemIcon>
                            <ListItemText primary="Transaction Outputs" />
                        </ListItem>
                        {/*<Collapse timeout="auto" unmountOnExit>*/}
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Receiver Address</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {detail.txOuts.map((row) => (
                                            <TableRow key={row.address}>
                                                <TableCell component="th" scope="row">
                                                    <Link>{row.address}</Link>
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.amount} Happee Coin
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        {/*</Collapse>*/}
                    </List>
                </Paper>
            </Grid>
        </Grid>
    )
};

export default TransactionDetail;
