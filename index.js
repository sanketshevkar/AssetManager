web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var account;
web3.eth.getAccounts().then((f) => {
 account = f[2];
})

abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"bankName","type":"string"},{"internalType":"string","name":"bname","type":"string"},{"internalType":"string","name":"asset","type":"string"},{"internalType":"string","name":"sector","type":"string"},{"internalType":"string","name":"Date","type":"string"},{"internalType":"int256","name":"auctionId","type":"int256"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"npa","outputs":[{"internalType":"string","name":"bankName","type":"string"},{"internalType":"string","name":"borrowName","type":"string"},{"internalType":"string","name":"asset","type":"string"},{"internalType":"string","name":"sector","type":"string"},{"internalType":"string","name":"date","type":"string"},{"internalType":"int256","name":"Auction_id","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"returnDet","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]')

contract = new web3.eth.Contract(abi);



function getInfo(address) {

 addresst = $("#address").val();
 contract.options.address = addresst;
 console.log(addresst);

 contract.methods.returnDet().call().then((f) => {
   console.log(f)
   let {0:bankname, 1:borrower, 2:asset, 3:sector, 4:date, 5:id}=f;
   $("#aucid").html(id);
   $("#bankName").html(bankname);
   $("#borrower").html(borrower);
   $("#asset").html(asset);
   $("#sector").html(sector);
   $("#date").html(date);
  })
}


