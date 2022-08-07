import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect2 } from "../redux/blockchain/blockchainActions2";
import { fetchData } from "../redux/data/dataActions";

const Reward = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [CONFIG, SET_CONFIG] = useState({
    TOKEN_ADDRESS: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
  });

  const claimNFTs = () => {
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Gas limit: ", totalGasLimit);
    blockchain.smartContract.methods
      .claim(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.TOKEN_ADDRESS,
        from: blockchain.account,
      });
  };

  const [mintAmount, setMintAmount] = useState(1);

  const handleInput = (e) => setMintAmount(e.currentTarget.value);

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

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div style={{textAlign: 'center'}}>

                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect2());
                        getData();
                      }}
                    >
                      CLAIM
                    </button>
                ) : (
                  <>
            <input
            type='number'
            value={mintAmount}
            onChange={handleInput}
            size='md'
            ></input>&nbsp;&nbsp;
                     
                     <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        CONFIRM
                      </button>
                  </>
                )}
      </div>
  );
}

export default Reward;
