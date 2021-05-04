import React from 'react';
import Title from "../../Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import useStyles from "../../Style/StyleSheet";

const UnspentTxOutsTable = (props) => {
    const unspentTxOuts = props.data
    const classes = useStyles()

    return (
        <React.Fragment>
            <Title>My Unspent Transaction Outputs</Title>
            <Table size="big">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableCell2}>Transaction Id</TableCell>
                        <TableCell>Output Index</TableCell>
                        <TableCell className={classes.tableCell2}>Owner Address</TableCell>
                        <TableCell align='right'>Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {unspentTxOuts.map((row, index) => (
                        <TableRow key={index} hover onClick={() => {}}>
                            <TableCell className={classes.tableCell2}><Link>{row.txOutTransactionId}</Link></TableCell>
                            <TableCell>{row.txOutIndex}</TableCell>
                            <TableCell className={classes.tableCell2}><Link>{row.address}</Link></TableCell>
                            <TableCell align='right'>{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    )
};

export default UnspentTxOutsTable;
