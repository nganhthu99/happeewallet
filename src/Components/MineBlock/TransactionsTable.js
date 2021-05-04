import React from 'react';
import Title from "../../Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import useStyles from "../../Style/StyleSheet";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import TableContainer from "@material-ui/core/TableContainer";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

const TransactionsTable = (props) => {
    const rows = props.data
    const classes = useStyles()

    return (
        <React.Fragment>
            <Title>Transactions Pool</Title>
            {rows.map((row) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreRoundedIcon />}
                        aria-controls="panel1a-content"
                        id={row.id}
                    >
                        <Typography className={classes.heading}>Transaction Id</Typography>
                        <Typography className={classes.secondaryHeading}>{row.id}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                className={classes.list}>

                                {/*Transaction Inputs*/}
                                <ListItem button onClick={() => {}} aria-expanded>
                                    <ListItemIcon>
                                        <SubdirectoryArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Transaction Inputs" />
                                </ListItem>
                                {/*<Collapse  timeout="auto" unmountOnExit>*/}
                                    <TableContainer>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className={classes.tableCell2}>Transaction Output Id</TableCell>
                                                    <TableCell align="right">Transaction Output Index</TableCell>
                                                    <TableCell align="right" className={classes.tableCell2}>Signature</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {row.txIns.map((row) => (
                                                    <TableRow key={row.signature}>
                                                        <TableCell component="th" scope="row" className={classes.tableCell2}>
                                                            <Link component="button">{row.txOutTransactionId}</Link>
                                                        </TableCell>
                                                        <TableCell align="right">{row.txOutIndex}</TableCell>
                                                        <TableCell align="right" className={classes.tableCell2}>{row.signature}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                {/*</Collapse>*/}

                                {/*Transaction outputs*/}
                                <ListItem button onClick={() => {}}>
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
                                                    <TableCell className={classes.tableCell2}>Receiver Address</TableCell>
                                                    <TableCell align="right">Amount</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {row.txOuts.map((row) => (
                                                    <TableRow key={row.address}>
                                                        <TableCell component="th" scope="row" className={classes.tableCell2}>
                                                            <Link component="button">{row.address}</Link>
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
                    </AccordionDetails>
                </Accordion>
            ))}
        </React.Fragment>
    );
};

export default TransactionsTable;
