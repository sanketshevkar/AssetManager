const readXlsxFile = require('read-excel-file/node');
Web3 = require('web3');
var fs=require('fs');


web3 = new Web3("http://localhost:8545");
//const binPath=path.resolve(__dirname, 'contracts', 'Voting_sol_Temp.bin')
var bytecode = fs.readFileSync('NPA_sol_NPA.bin').toString();
abi = JSON.parse(fs.readFileSync('NPA_sol_NPA.abi').toString());
//deployedContract = new web3.eth.Contract(abi);

var new_obj

const schema = {
    'Bank Name': {
      prop: 'bankName',
      type: String
      // Excel stores dates as integers.
      // E.g. '24/03/2018' === 43183.
      // Such dates are parsed to UTC+0 timezone with time 12:00 .
    },
    'Borrower': {
      prop: 'borrower',
      type: String,
    },
    // 'COURSE' is not a real Excel file column name,
    // it can be any string — it's just for code readability.
    'Asset on Auction': {
      prop: 'asset',
      type: String
    },
    'Sector': {
        prop: 'sector',
        type: String
      },
      'Reserve Price': {
        prop: 'reservePrice',
        type: Number
      },
      'EMD': {
        prop: 'emd',
        type: Number
      },
      'Bid multiple': {
        prop: 'bidMultiple',
        type: Number
      },
      'Date & Time of EAuction': {
        prop: 'dtAuction',
        type: String
      },
      'Auction id': {
        prop: 'auctionID',
        type: Number
      }
  }
   
  readXlsxFile('./Bank.xlsx', { schema }).then(({ rows, errors }) => {
    // `errors` have shape `{ row, column, error, value }`.
     assetData = Object.assign(rows);
     len=assetData.length
     console.log(typeof(assetData[0].sector))
     for(let i=0;i<len;i++){
    deployedContract = new web3.eth.Contract(abi)
    deployedContract.deploy({data: bytecode}).send({
      from: '0xe6798a170c60BDb76801abDCA992f15CcbB6540B',
      gas: 1500000,
      gasPrice: web3.utils.toWei('0.00003', 'ether')
    }).then((newContractInstance) => {
        
            deployedContract.options.address = newContractInstance.options.address
            console.log(newContractInstance.options.address)
            address = deployedContract.options.address;
            deployedContract.methods.create(assetData[i].bankName,assetData[i].borrower,assetData[i].asset,assetData[i].sector,assetData[i].dtAuction,assetData[i].auctionID).send({from: '0x340F3999E53A3EcaEf0336Ed1291D14484CEAc5D',gas: 1000000}).then((f) => {
              //console.log(f);
              deployedContract.methods.returnDet().call(console.log)
              //ca0ll the function that upload data to cloud here
            })
        

      
    });
  }
  })

