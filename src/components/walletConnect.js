import { providers } from "ethers";
import { useEffect, useState } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";

const EthersWeb3Modal = () => {
  const [w3, setW3] = useState(null);
  const [address, setAddress] = useState("");

  const connect = async () => {
    //  Create WalletConnect Provider
    const wcProvider = new WalletConnectProvider({
      infuraId: "5cb806fa94854899b53caf71ce775809"
    });

    //  Enable session (triggers QR Code modal)
    await wcProvider.enable();

    const web3Provider = new providers.Web3Provider(wcProvider);

    setW3(web3Provider);
  };

  useEffect(() => {
    const checkEthEnabled = () => {
      const address = w3.provider?.accounts?.[0];
      setAddress(address);
    };

    w3 ? checkEthEnabled() : connect();
  }, [w3]);

  return <p>{address && address}</p>;
};

export default EthersWeb3Modal;
