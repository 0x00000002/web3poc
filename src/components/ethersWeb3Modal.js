import { ethers } from "ethers";
import { useEffect, useState, useCallback } from "react";
import Web3Modal from "web3modal";

const providerOptions = {
  /* See Provider Options Section */
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const EthersWeb3Modal = () => {
  const [provider, setProvider] = useState(false);
  const [address, setAddress] = useState("");
  const [instance, setInstance] = useState();

  const connect = useCallback(async () => {
    setInstance(await web3Modal.connect());
    setProvider(true);
  }, []);

  const checkEthEnabled = useCallback(async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const address = setAddress(await signer.getAddress());
      address && setAddress("TRUE");
    }
  }, []);

  useEffect(() => {
    provider ? connect() : checkEthEnabled();
  }, [instance, provider, address, connect, checkEthEnabled]);

  return <p>{address && address}</p>;
};

export default EthersWeb3Modal;
