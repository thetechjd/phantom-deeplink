import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/* import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js"; */
import nacl from "tweetnacl";
import bs58 from "bs58";




function App() {
  const [count, setCount] = useState(0)
  const [dappKeyPair] = useState(nacl.box.keyPair());

/*   // Initiate a new connection to Phantom
const connect = async () => {
	const url = "https://phantom.app/ul/v1/connect";
	Linking.openURL(url);
}; */

// Initiate a new connection to Phantom
const connect = async () => {
 
  const params =  new URLSearchParams({
    dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
    cluster: "devnet",
    app_url: "https://portal.cryptocadet.app",
    redirect_link: "https://portal.cryptocadet.app",
    pubKey: 'ntjCcsamqnVIrV8kCmYM4nllTqBgAtnql0S',
    productId: 'sometestid0',
    email: 'required'
  });

  console.log(params.toString())

  const url = `https://phantom.app/ul/v1/connect?${params.toString()}`;
 window.location.href = url;
};

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       <button onClick={connect}>
          Open Phantom
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
