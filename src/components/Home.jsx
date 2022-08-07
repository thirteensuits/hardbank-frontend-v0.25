import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
            <br></br>
            <br></br>
            <br></br>           
            <h1 style={{textAlign: 'center'}}><b>HardBank v0.25</b></h1>
            <h5 style={{textAlign: 'center'}}>
            <i>Bringing the barcode to the blockchain</i>
            </h5>
            <br></br>
            <p style={{textAlign: 'center'}}>
                Our protocol is designed to realize <b>full-chain</b> transactions for everyday transactions for physical products
                <br></br>
                by injectively assigning unique SBT smart contract addresses to physical products.
                <br></br>
                <br></br>
                Like a barcode being scanned, the product's smart contract is engaged to mint an SBT for each purchase,
                <br></br>
                effectively creating an on-chain representation of the purchase.
                <br></br>
                <br></br>
                To receive the physical product,
                <br></br>
                the minted SBT is used to initiate a claim process which also airdrops loyalty tokens to the purchaser.
                <br></br>
                <br></br>
                <b>This Demo sells physical branches on the Rinkeby testnet to provide a preview of how our protocol works</b>
                <br></br>
                <br></br>
                <a target="_self" href="/Demo" rel="noreferrer">
                <button style={{itemAlign: 'center', marginBottom: 5, padding: 5, paddingLeft: 20, paddingRight: 20}}>ENTER</button>
                </a>
                <br></br>

            <br></br>
            </p>
            <i>For those whitelisted as Owners, visit the Owner tab to view and claim sales proceeds in real time.</i>
            <br></br>
            <br></br>
            <b>Full-chain transaction:</b> A transaction where the full exchange -- (i) the product being purchased and (ii) the cryptocurrency used to purchase the product -- is represented on-chain.
            <br></br>
            <br></br>
            <b>SBTs:</b> Known as SoulBound Tokens, they function as NFTs that cannot be transferred. Unlike collectibles or luxury products, everyday purchases are made to be consumed and not transferred, and are therefore better represented by SBTs. While our project makes use of NFTs in regard to governance, we want to avoid certain speculative connotations of NFTs for the everyday purchases we intend to execute with our protocol.
            <br></br>
            <br></br>
            <br></br>
      </div>
    </div>
  );
}

export default Home;