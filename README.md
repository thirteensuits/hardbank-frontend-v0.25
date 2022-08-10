# HardBank -- realizing full-chain commerce.

This is Version 0.25 of HardBank. Our frontend was built thanks to the open-source resources provided by the following:

The Stripes NFT: https://github.com/The-Stripes-NFT/

Techomoro: https://github.com/techomoro/ReactMultiPageWebsite

Thanks a ton, for real.

## Available Scripts

We suggest using Virtual Studio Code.

The following commands will launch the app in your localhost:3000

### `npm install`
### `npm run start`

Our live demo can be checked out below:
https://hardbank.io/

## Components and Config

The front-end makes use of React across a multi-page website. Each page in the website is held in the components subfolder of the src folder.

There are several blockchain applications present throughout the website, and each make heavy use of React-Redux. Each application is stored as a .js file within the src folder, and has been exported as a function to the aforementioned pages in the components subfolder.

As denoted in the config.json, the applications on this website are meant to be operate on the Rinkeby testnet, as this is still a work in progress.

There are three smart contract addresses that can be configured in the config.json with their respective ABIs in the config folder:

 - BRANCH_NFT_ADDRESS -- this smart contract acts as the barcode for the product; products are purchased by minting NFTs from this contract.
   - corresponds to abi.json

 - TOKEN_ADDRESS -- this smart contract is engaged during the claim process and provides loyalty tokens to reward those who purchase the product while also ensuring that each minted NFT can only undergo the claim process once - i.e. one NFT can only claim one product.
   - corresponds to token_abi.json2

 - PAYMENT_ADDRESS -- this smart contract acts as the paymaster, designating how much of the proceeds from the sale of the product is due to each product owner, and allowing each product owner to claim their share of the proceeds in real time; as such, this contract is executable only by the product owners.
   - corresponds to payment_abi.json

These functionalities are described in greater detail below. Additionally, we hope to integrate another smart contract soon:

 - TRUNK_NFT_ADDRESS -- this smart contract designates product ownership - i.e. holders of TrunkNFTs are the product owners who have exclusive access to view and withdraw their share of the proceeds in real time.

## Purpose

The purpose of HardBank is to build out the protocol which will allow transactions for physical products to be completely represented and executed on the blockchain. This means that both the cryptocurrency that is used to purchase the product, as well as the product itself (more specifically -- a representation of the product) will be recorded on the blockchain.

We define such transactions to be <b>fully on-chain</b> or <b>full-chain</b>.

Purchasing an NFT for ETH is an example of a full-chain transaction: when the two assets are exchanged, both sides of the transaction -- (i) the NFT to buyer and (ii) the ETH to seller -- are recorded on the blockchain: the entire transaction is represented, in full, on the blockchain.

Currently, there are many providers which allow crypocurrency to be used to purchase physical products. In these cases, the transfer of the cryptocurrency from the purchaser to the merchant (or payments provider) is recorded on the blockchain; however, there is no information on the blockchain regarding the product that was purchased.

We define these transactions where only half of the information is recorded on the blockchain to be <b>half-chain</b> transactions. Such transactions do not provide any information as to why the cryptocurrency was transferred from one account to another.

Half-chain transactions make no use of any of the functionalities offered by blockchain technology and have questionable value-add beyond treating cryptocurrency as a currency.

Moving transactions for physical products from half-chain to full-chain will allow for the functionalities of blockchain technology to be actualized, and will consequently provide meaningful benefits to merchants, consumers, investors, and the market as a whole.

These benefits are valuable enough to eventually push a tremendous amount of transactions for physical products to be executed on-chain.

## Home.jsx

This page describes the project.

## Buy.jsx

This page is where the product is purchased.

For any given product, we injectively represent the product with a unique NFT smart contract address. These 1-to-1 pairings are meant to mirror how barcodes are used to represent products in commerce today.

Just as a barcode is scanned to initiate the purchase of a product, the purchasing journey for our protocol begins with the purchaser minting an NFT from the aforementioned NFT smart contract address. Both sides of this transaction are recorded on the blockchain — (i) the cryptocurrency used to mint (or pay for) the NFT (or product), and (ii) the NFT (or representation of the product) transferred to the purchaser in exchange for the payment. This is a full-chain tranasction.

The resulting NFT is not an art piece or a speculative asset, but a receipt that represents the product on the blockchain. We are utilizing the functionality of NFTs as single-form unique entries on the blockchain.

Since there is no maximum limit to how many units of a given product can be sold, there is no maximum cap to the number of NFTs which can be minted from these addresses -- unless the product in question is meant to be a limited edition product.

## Claim.jsx

This page is where the purchased product is claimed.

Upon completing the full-chain transaction, the purchaser will then want to claim the physical product by providing the merchant with a physical address to receive the product.

It is essential that each NFT that is minted can only claim one product. We accomplish this by having our claim process mimic a token airdrop exclusive to NFT holders -- for example, the ApeCoin airdrop for BAYC/MAYC holders -- which tracks the status of whether or not an NFT has already been used to claim tokens from an airdrop.

Like an airdrop, our claim function provides an opportunity for merchants to reward its customers with loyalty tokens, sent to the purchaser at time of claim. The precise functionality of the loyalty token can be determined by the merchant, and having this option is a great way to encourage repeat purchases, word-of-mouth marketing, and build a community for a product.

Upon providing the physical address to receive the product, the purchaser must provide the merchant with the index number of the NFT that was minted to claim the loyalty tokens and complete the claim process. In order for this process to execute, the purchaser must be holding the NFT which corresponds to the index number that was provided*.

This exchange will ensure that the index number of each NFT that has claimed its loyalty tokens is been recorded on the blockchain. If the same index number initiates a second claim, the process will fail. This ensures that each NFT that is minted can only claim one product.

It should noted there are several alternatives worth considering:
 - Using NTTs instead of NFTs to represent products
 - Burning or altering the state of the NFT in exchange for loyalty tokens during the claim process to ensure there is limited funny business

## Owner.jsx

This is page is for the product owners to see the proceeds from the sale of the product, as well as to claim their share of the proceeds.

The proceeds from minting the NFTs are stored in the NFT's smart contract. These proceeds can be withdrawn to a payment smart contract by the product owners.

In the payment smart contract, the product owners can choose to divvy up the proceeds amongst themselves to their choosing. The implications of this transparency and functionality are easy to imagine, and are consequential to fundraising, investing, compensation, payment cycles, and other aspects of 'real' business.

Taken as a whole, these functionalities provide the capacity to illuminate not only the relationship between the purchaser and the merchant, but also that of the product operator and the product owner. The resulting value-adds will spur more efficient allocation of capital and help better products to be developed, providing a net positive for the market (and species-being) as a whole.

## Shortcomings and things that need to be built

At the theoretical level, the largest shortcoming comes with providing the physical address to receive the product. This constitutes an insta-dox, as a given wallet address can now be linked to a given physical address.

There are also issues regarding disputes -- for example, what happens in the event that the purchaser says the physical product has not yet arrived, but the merchant says the product was already sent two weeks ago? There are many examples of disputes; and payment processors act as third-parties to resolve said disputes, even going so far as to go into their own pockets to refund transactions.

Under the HardBank protocol, the purchaser and the merchant interact directly, and there is no third-party to hold the merchant accountable once the payment has been made. It is possible to set up a third party which handles logistics; effectively verfiying stock, checking on orders, and executing delivery. It would be capitally intensive to build this third party, and this prcoess could also be expensive for certain merchants who may not have the funds to create the initial set amount of invetory.

There is also the obvious issue of adoption. While many merchants tout that they are ready to accept cryptocurrency as payments, and many providers have been set up to execute these payments, it is clear that the volume of half-chain transactions is extremely small. Is there any actual demand, at this time, to use cryptocurrency to purchase physical products?

On the coding side, there is definitely some clunkiness, and we would like to add (or experiment with) certain features, including:
 - checking if an NFT has already been used to claim an order
 - experimenting with a burn or altering functionality to the NFT upon claiming an order
 - saving the inputted physical address in a way that is not linked to the wallet address that is used to execute the claim
 - tokengating entry to the "Owner" section
 - conducting a check in real time for NFT ownership status in order to ensure that only NFT holders can access the Payable smart contract
 - positioning of the login button in the navigation bar
 - etc etc
