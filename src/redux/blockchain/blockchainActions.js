// constants
import Web3 from 'web3';
import SmartContract from '../../contracts/PMS.json';
// log
import { fetchData } from '../data/dataActions';

const connectRequest = () => {
  return {
    type: 'CONNECTION_REQUEST',
  };
};

const connectSuccess = (payload) => {
  return {
    type: 'CONNECTION_SUCCESS',
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: 'CONNECTION_FAILED',
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: 'UPDATE_ACCOUNT',
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const networkId = await window.ethereum.request({
          method: 'net_version',
        });
        //const NetworkData = await SmartContract.networks[networkId];
        // change network ID to 1
        if (networkId == 4) {
          const SmartContractObj = new web3.eth.Contract(
            SmartContract,
            '0xD3E92dbcb6d9370C5684425511909A8f261C3984'
            // '0xf51e3D4c0dFBc440De5Ab34d3B658E342DF26388'
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          window.ethereum.on('accountsChanged', (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on('chainChanged', () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed('Change network to Etherium.'));
        }
      } catch (err) {
        dispatch(connectFailed('Something went wrong.'));
      }
    } else {
      dispatch(connectFailed('Install Metamask.'));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
