import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "../../Style/StyleSheet";
import {Divider, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import Chip from "@material-ui/core/Chip";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";

const BlockDetail = (props) => {
    const classes = useStyles()

    const detail = props.data

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Block Index: </Typography>
                            </Grid>
                            <Grid item container xs={8}>
                                <Grid item>
                                    <Chip variant="outlined" label={detail.index} color="primary"/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Timestamp: </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{new Date(detail.timestamp).toUTCString()}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Transactions: </Typography>
                            </Grid>
                            <Grid item>
                                <Chip
                                    label={`${detail.data.length} transactions`}
                                    color="primary"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Difficulty: </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{detail.difficulty}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Nonce: </Typography>
                            </Grid>
                            <Grid item>
                                <Typography>{detail.nonce}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Previous Block Hash: </Typography>
                            </Grid>
                            <Grid item>
                                <Link>{detail.previousHash}</Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={4}>
                                <Typography>Block Hash: </Typography>
                            </Grid>
                            <Grid item>
                                <Link>{detail.hash}</Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}><Divider/></Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default BlockDetail;
