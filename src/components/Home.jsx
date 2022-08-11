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
            realizing full-chain commerce
            </h5>
            <br></br>
            <p style={{textAlign: 'center'}}>
                <i><b>Full-Chain Transaction<b>
                <br></br>
                A transaction fully executed on-chain, such that both sides of the exchange -- (i) the crypto used to purchase the product and (ii) the product that is purchased -- are represented on-chain.</i>
                <br></br>
                <br></br>
                Our protocol facilitates full-chain transactions for everyday physical products by injectively assigning a unique SBT smart contract address to any given product.
                <br></br>
                <br></br>
                The smart contract address functions like an on-chain barcode, as it is engaged to mint an SBT for each purchase, with the minted SBT providing an on-chain representation for each purchase.
                <br></br>
                <br></br>
                The minted SBT is then used to initiate a claim process, which also airdrops loyalty tokens to the purchaser.
                <br></br>
                <br></br>
                <b>This Demo sells physical branches on the Rinkeby testnet to provide a preview of how our protocol works</b>
                <br></br>
                <br></br>
                <a target="_self" href="/Demo" rel="noreferrer">
                <button style={{itemAlign: 'center', marginBottom: 5, padding: 5, paddingLeft: 20, paddingRight: 20}}>ENTER</button>
                </a>
                <i>Please refer to our GitHub or Twitter for more details.
                <br></br>
                <br></br>
                For those whitelisted as Owners, visit the Owner tab to view and claim sales proceeds in real time.</i>
                <br></br>
                <br></br>
            </p>
            <br></br>
            <br></br>
            <br></br>
            What are the advantages of <b>full-chain</b> transactions?
            <br></br>
            <br></br>
            1. Transparent Data in Real-Time -- All stakeholders (investors, operators, license holders, infleuncers, freelancers, etc) in the product are able to view the performance of product sales in real-time. Since the data is on-chain, the data is transparent and without the ambiguity that results from "accounting standards". Having this transparency is beneficial to products that perform well, as they are able to raise funds and find partners. For products that perform poorly, this transparency ensures that further capital is not misallocated to crowding the markets with products that yield no demand. This is provides economic efficiency and is ultimately beneficial to all players in the market.
            <br></br>
            <br></br>
            2. Proceeds can be claimed in Real-Time  -- In addition to being able to view the sales proceeds, stakeholders are also able to claim their share of the proceeds without requiring a third-party audit or blind trust in the operator. An example of this utility is influencer promotions via custom URLs: influencers can not only know exactly how much product was sold through their endorsement, but can also claim their portion in real-time. 
            <br></br>
            <br></br>
            3. Loyalty tokens can be airdropped to purchasers -- Like cashback rewards, loyalty tokens encourage consumers to both purchase and repurchase products. Furthermore, we can attach certain rights to the loyalty tokens such that the product and/or brand truly becomes "community-driven", and therefore aligning the interests of all parties involved in making a brand or product successful.
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
