import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect2 } from "../redux/blockchain/blockchainActions2";
import store2 from "../redux/store2";


const Check = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [CONFIG, SET_CONFIG] = useState({
    TOKEN_ADDRESS: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
  });
  const [indexNo, setIndexNo] = useState("");
  const handleInput = (e) => setIndexNo(e.currentTarget.value);



  const fetchDataRequest = () => {
    return {
      type: "CHECK_DATA_REQUEST",
    };
  };

  const fetchDataSuccess = (payload) => {
    return {
      type: "CHECK_DATA_SUCCESS",
      payload: payload,
    };
  };
  
   const fetchData = () => {
    return async (dispatch) => {
      dispatch(fetchDataRequest());
        let hasClaimed = await store2
          .getState()
          .blockchain.smartContract.methods.hasClaimed(indexNo)
          .call();
        // let cost = await store
        //   .getState()
        //   .blockchain.smartContract.methods.cost()
        //   .call();
  
        dispatch(
          fetchDataSuccess({
            hasClaimed,
            // cost,
          })
        );
    };
  };


  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  const ban = data.hasClaimed;

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [indexNo]);

return (
<div>
Check if BranchNFT has been claimed by Index Number (remember, each BranchNFT can only be claimed once!!)
<br></br>
<br></br>

              <b>BranchNFT Index Number:</b>&nbsp;&nbsp;
              <input
            type='number'
            size='md'
            onChange ={handleInput}
             />&nbsp;&nbsp; <button
             onClick={(e) => {
               e.preventDefault();
               dispatch(connect2());
               getData();
             }}
           >
             Check
           </button>
           <br></br>
              {indexNo}



              <br></br>
<b>Status:</b> {ban}

</div>

);
}

export default Check;
