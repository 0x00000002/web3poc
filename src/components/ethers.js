import { ethers } from "ethers";
import { useEffect, useState, useCallback } from "react";

const EthersJs = () => {
  const [check, setCheck] = useState("FALSE");
  const [address, setAddress] = useState("");

  const checkEthEnabled = useCallback(async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      setAddress(await signer.getAddress());
      setCheck("TRUE");
    }
  }, []);

  useEffect(() => {
    checkEthEnabled();
  }, [checkEthEnabled]);

  return (
    <p>
      {check ? `Provider successfully injected! ${address}` : "No injection"}
    </p>
  );
};

export default EthersJs;
