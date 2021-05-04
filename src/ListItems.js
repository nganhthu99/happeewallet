import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import { useHistory } from 'react-router-dom';
import ListItemText from "@material-ui/core/ListItemText";
import ViewWeekRoundedIcon from '@material-ui/icons/ViewWeekRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';

const ListItems = () => {
    const history = useHistory()

    return (
        <div>
            <ListItem button onClick={() => {history.push('/account')}}>
                <ListItemIcon>
                    <AccountBalanceWalletRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Account"/>
            </ListItem>
            <ListItem button onClick={() => {history.push('/make-transaction')}}>
                <ListItemIcon>
                    <AccountBalanceRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Make Transaction"/>
            </ListItem>
            <ListItem button onClick={() => {history.push('/mine-block')}}>
                <ListItemIcon>
                    <ViewWeekRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Mine Block"/>
            </ListItem>
        </div>
    )
}

export default ListItems
