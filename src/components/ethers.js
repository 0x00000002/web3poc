import { ethers } from "ethers";
import { useEffect, useState, useCallback } from "react";
import DisplayStatus from "./status";

const EthersJs = () => {
  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState("");

  const connect = useCallback(async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setProvider(new ethers.providers.Web3Provider(window.ethereum));
    }
  }, []);

  const checkEthEnabled = useCallback(async () => {
    const signer = provider.getSigner();
    setAddress(await signer.getAddress());
  }, [provider]);

  useEffect(() => {
    provider ? checkEthEnabled() : connect();
  }, [provider, connect, checkEthEnabled]);

  return <DisplayStatus props={{ provider, address }} />;
};

export default EthersJs;
