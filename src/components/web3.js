import Web3 from "web3";
import { useEffect, useState, useCallback } from "react";

const Web3js = () => {
  const [check, setCheck] = useState("FALSE");
  const [address, setAddress] = useState("");

  const checkEthEnabled = useCallback(async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
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

export default Web3js;
