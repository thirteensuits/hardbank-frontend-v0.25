import React from "react";
import { Provider } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mint from '../functions/Mint';
import ImageSlider from '../functions/ImageSlider';
import Balance from '../functions/Balance';
import Reward from '../functions/Reward';
import store from "../redux/store";
import store2 from "../redux/store2";
import store5 from "../redux/store5";
import img from './images/branch.png';
import img2 from './images/branch2.jpg';
import hiw1 from './images/HIW1.jpg';
import hiw2 from './images/HIW2.jpg';
import hiw3 from './images/HIW3.jpg';
import divider from './images/divider.png';
import branchend from './images/branchend.jpg';
import Container from 'react-bootstrap/Container';


const slides = [
  { url: "https://i.imgur.com/9aUpv6N.jpeg"},
  { url: "https://i.imgur.com/IK1byAl.png"},
  { url: "https://i.imgur.com/LEy127l.jpeg"},  
];



function Demo() {
  return (
  <div className="home">
      <h5 style={{textAlign: 'center', backgroundColor: 'red', color: 'white', fontSize: 14}}>
        <br></br>
        This is a DEMO intended to operate on the Rinkeby testnet
        <br></br>
        <br></br>
      </h5>
      <div >
      <ImageSlider slides={slides} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
      <section id="buy">
        <div>
          
            <img src={img} style={{width: "100%"}}/>
          </div>
          <div>
            <br></br>
            <br></br>
            <h5 style={{textAlign: 'center'}}><b>THE BEST BRANCHES IN TOWN</b></h5>
            <h5 style={{textAlign: 'center', color: 'red'}}><b>0.001 ETH</b></h5>
            <br></br>
            These branches are quite definitely the best. In town. They are the BEST in town. It's what you've been looking for all your life. Branches. But are they the best? In town? Yes, and yes.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;-- Won "Branch of the Year" in Toledo 2011 and Nairobi 2017
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;-- Rumored to be owned by many celebrities, including Werner Herzog
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;-- You will most definitely be viewed as a fool if you don't have one.
            <br></br>
            <br></br>
            Don't miss out on the newest trend of 2022! <b>Get your branches now!</b>
            <br></br>
            <br></br>
            <br></br>
            <Provider store={store}>
            <Mint />
            </Provider>
          </div>
        <br></br>
        </section>
        <Row>
          <Col>
          <img src={divider} style={{width: "100%"}}/>
            <h2 style={{textAlign: 'center'}}><b>HOW IT WORKS</b></h2>
            <br></br>
            In order to purchase one of the best branches in town, you need to first connect your wallet and mint a BranchSBT from the BranchSBT smart contract.
            <br></br>
            <br></br>
            <img src={hiw1} className="d-block mx-auto img-fluid w-50" style={{width: "50%"}}/>
            <br></br>
            Each BranchSBT can be used to claim one branch. In addition to receiving the branch at a physical address of your choice, you will also receive loyalty tokens.
            <br></br>
            <br></br>
            <br></br>
            <img src={hiw2} className="d-block mx-auto img-fluid w-50" style={{width: "50%"}}/>
            <br></br>
            The loyalty tokens can be used to help determine the direction of our brand by voting on proposals or suggesting new proposals.
            <br></br>
            <br></br>
            <img src={hiw3} className="d-block mx-auto img-fluid w-50" style={{width: "50%"}}/>
            <br></br>
            The BranchSBT will remain in your wallet as a receipt of your purchase. But remember, each BranchSBT can only be used for one claim.
            <img src={divider} style={{width: "100%"}}/>
          </Col>
        </Row>
        <section id="claim">

          <div>
          <br></br>
              <h5 style={{textAlign: 'center'}}><b>CLAIM YOUR BRANCH</b></h5>
              <p style={{textAlign: 'center'}}><i>To claim your physical branch, please do the following</i></p>
              1/ View the index number(s) of the BranchSBT(s) in your wallet.
              <br></br>
              <Provider store={store5}>
              <Balance />
              </Provider>
              <br></br>
              2/ Provide the physical address where you would like to receive your physical branch.
              <br></br>
              <br></br>
              <div style={{textAlign: 'center'}}>
              <b>Address:</b>&nbsp;&nbsp;
              <input type="text" name="Address" />
              &nbsp;&nbsp;<button>Register</button>
              </div>
              <br></br>
              3/ To complete the process, click "Claim", then input your index number, and then click "Confirm" to confirm all information.
              <br></br>
              <br></br>
              <Provider store={store2}>
              <Reward />
              </Provider>
              <br></br>
              Upon completion, you will receive 10 $TREE loyalty tokens in your Web3 wallet -- but remember, each BranchSBT can only be claimed once!              <br></br>
          </div>
          <div>
          <img src={img2} style={{width: "100%"}}/>
          </div>
        </section>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={branchend} style={{width: "100%"}}/>
    </div>
  );
}

export default Demo;
