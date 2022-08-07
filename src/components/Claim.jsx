import React from "react";
import { Provider } from "react-redux";
import Balance from '../functions/Balance';
import Reward from '../functions/Reward';
import Check from '../functions/Check';
import store5 from "../redux/store5";
import store2 from "../redux/store2";




function Claim() {
  return (
    <div className="claim">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-0">
          <h1 class="font-weight-bold">Claim</h1>
            <br></br>
            <p>
              To continue our example, "claiming" our order means:
              <br></br>
              &nbsp;&nbsp;1/ asking for the physical branch to be delivered to a physical location of our choice;
              <br></br>
              &nbsp;&nbsp;2/ receiving $TREE rewards for our purchase in our Web3 wallet.
              <br></br>
              <br></br>
              A BranchNFT can only be claimed once,
              <br></br>
              and will continue to remain in our Web3 wallet as a receipt for our order.
              <br></br>
              <br></br>
              Click "View" to see the Index Numbers of the BranchNFTs in your wallet.
              <br></br>
              <Provider store={store5}>
              <Balance />
              </Provider>
              <br></br>
              <Provider store={store2}>
              <Check />
              </Provider>           
              <br></br>
              Input your physical address and click "Register" to register the physical address you would like to receive your physical branch.
              <br></br>
              <br></br>
              <form>
              <label>
              <b>Address:</b>&nbsp;&nbsp;
              <input type="text" name="Address" />
              </label>
              &nbsp;&nbsp;<input type="submit" value="Register" />
              </form>
              <br></br>
              To complete the process, click "Claim", then input your index number, and then click "Confirm" to confirm all information.
              <br></br>
              <br></br>
              <Provider store={store2}>
              <Reward />
              </Provider>
              <br></br>
              Upon completion, you will receive $TREE rewards in your Web3 wallet.
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Claim;