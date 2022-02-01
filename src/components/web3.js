import Web3 from "web3";
import { useEffect, useState, useCallback } from "react";
import DisplayStatus from "./status";

const Web3js = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");

  const connect = useCallback(async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    setProvider(window.web3);
  }, []);

  const checkEthEnabled = useCallback(async () => {
    window.web3 = new Web3(window.ethereum);
    const accounts = await window.web3.eth.getAccounts();
    accounts.length && setAddress(accounts[0]);
  }, []);

  useEffect(() => {
    provider ? checkEthEnabled() : connect();
  }, [provider, connect, checkEthEnabled]);

  return <DisplayStatus props={{ provider, address }} />;
};

export default Web3js;
