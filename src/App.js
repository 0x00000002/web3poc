import "./App.css";
import Layout from "./components/layout";
import { useState } from "react";
import Web3js from "./components/web3";
import EthersJs from "./components/ethers";

const button = {
  margin: "2rem",
  padding: "20px 30px",
  borderRadius: "5px",
  border: "0px",
  backgroundColor: "#ccc",
  fontSize: "1rem",
  cursor: "pointer"
};

const web3 = "Web3 JS";
const ethers = "Ethers JS";

function App() {
  const [component, setComponent] = useState();

  return (
    <Layout home title={component}>
      <div align="center">
        <button style={button} onClick={() => setComponent(web3)}>
          Web3
        </button>
        &nbsp;
        <button style={button} onClick={() => setComponent(ethers)}>
          Ethers
        </button>
        {component === "Web3 JS" && <Web3js />}
        {component === "Ethers JS" && <EthersJs />}
      </div>
    </Layout>
  );
}

export default App;
