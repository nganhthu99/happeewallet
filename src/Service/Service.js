import axios from "axios";
import {api} from "./api";

export const getBalanceService = () => {
    return axios.get(api + '/balance')
}

export const getMyUnspentTxOutsService = () => {
    return axios.get(api + '/my-unspent-transaction-outputs')
}

export const getAddressService = () => {
    return axios.get(api + '/address')
}

export const getTransactionsPoolService = () => {
    return axios.get(api + '/transaction-pool')
}

export const mineBlockService = () => {
    return axios.post(api + '/mine-block', {})
}

export const sendTransactionService = (receiverAddress, amount) => {
    return axios.post(api + '/send-transaction', {
        address: receiverAddress,
        amount
    })
}

export const initWalletService = () => {
    return axios.post(api + '/init-wallet', {})
}
