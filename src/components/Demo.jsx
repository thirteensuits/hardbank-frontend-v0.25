import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
            <br></br>
            <br></br>
            <br></br>           
            <h1 style={{textAlign: 'center'}}><b>HardBank v0.25</b></h1>
            <h5 style={{textAlign: 'center'}}><i>realizing full-chain commerce</i></h5>
            <br></br>
              <div class="container" style={{textAlign: 'center', width: "80%"}}>
                Our protocol reimagines how everyday physical products are bought and sold.
                <br></br>
                <br></br>
                This involves executing the entire transaction on-chain (i.e. <b>a full-chain transaction</b>) by providing on-chain representation for any given product by injectively assigning it to a unique SBT smart contract address.
                <br></br>
                <br></br>
                Although we are currently limited to e-commerce, eventually as crypto adoption increases, we can extend our scope to print SBT addresses as crypto-barcodes on products to enable on-chain transactions to be executed for in-store commerce as well.
                <br></br>
                <br></br>
                <b>For now, please enjoy this early Demo which sells physical branches on the Rinkeby testnet to get a preview of our protocol in action.</b>
                <br></br>
                <br></br>
                <a target="_self" href="/Demo" rel="noreferrer">
                <button style={{itemAlign: 'center', marginBottom: 5, padding: 5, paddingLeft: 20, paddingRight: 20}}>ENTER</button>
                <br></br>
                <br></br>
                </a>
                <i>
                Please refer to our GitHub or Twitter for more details; any and all feedback is welcome.
                <br></br>
                <br></br>
                For those whitelisted as Owners, visit the Owner tab to view and claim sales proceeds in real time.</i>
                <br></br>
                <br></br>
              </div>
              <br></br>
            <br></br>           
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
    </div>
  );
}

export default Home;
