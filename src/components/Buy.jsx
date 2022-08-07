import React from "react";
import { Provider } from "react-redux";
import Mint from '../functions/Mint';
import store from "../redux/store";


function Buy() {

  return (
    <div className="buy">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-0">
            <h1 class="font-weight-bold">Buy</h1>
            <br></br>
            <p>
              The idea is that each purchase of a product will be represented at 1-to-1 by an NFT on the blockchain.
            <br></br>
            <br></br>
              To provide an example, let's say we are selling (physical) branches:
              <br></br>
              if you want to purchase a branch from us, then you would mint a BranchNFT.
              <br></br>
              <br></br>
              In effect, purchasing one branch becomes synonymous with minting one BranchNFT;
              <br></br>
              and each branch is represented on the blockchain by a corresponding BranchNFT.
              <br></br>
              <br></br>
              For the purposes of this Demo, let's set the price of each branch to <b>0.001 ETH</b>.
              <br></br>
              Try it out! Connect your wallet and purchase a Branch -- and remember, we are operating on the Rinkeby testnet!
              <br></br>
              <br></br>
              <Provider store={store}>
              <Mint />
              </Provider>
              <br></br>
              After purchasing, please head to the <b>Claim</b> page to claim your order.
              <br></br>
              <br></br>

              </p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Buy;
