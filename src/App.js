import "./App.css";
import Layout from "./components/layout";
import { useState } from "react";
import Web3js from "./components/web3";
import EthersJs from "./components/ethers";
import WalletConnect from "./components/walletConnect";
import EthersWeb3Modal from "./components/ethersWeb3Modal";

const button = {
  margin: "1rem",
  width: "100%",
  padding: "20px 30px",
  borderRadius: "5px",
  border: "0px",
  backgroundColor: "#ccc",
  fontSize: "1rem",
  cursor: "pointer"
};

const web3 = "Web3 JS";
const ethers = "Ethers JS";
const web3modal = "Web3Modal";
const walletConnect = "Wallet Connect";

function App() {
  const [component, setComponent] = useState();

  return (
    <Layout home title={component}>
      <div align="center">
        <button style={button} onClick={() => setComponent(web3)}>
          Web3 JS
        </button>
        <button style={button} onClick={() => setComponent(ethers)}>
          Ethers JS
        </button>
        <button style={button} onClick={() => setComponent(web3modal)}>
          Web3Modal
        </button>
        <button style={button} onClick={() => setComponent(walletConnect)}>
          WalletConnect
        </button>
        {component === "Web3 JS" && <Web3js />}
        {component === "Ethers JS" && <EthersJs />}
        {component === "Web3Modal" && <EthersWeb3Modal />}
        {component === "Wallet Connect" && <WalletConnect />}
      </div>
    </Layout>
  );
}

export default App;
