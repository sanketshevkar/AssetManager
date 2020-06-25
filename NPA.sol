pragma solidity ^0.6.2;

contract NPA {

    struct NPAData {
        string bankName;
        string borrowName;
        string asset;
        string sector;
        string date;
        int Auction_id;
       }

    NPAData public npa;

    constructor() public {
  }
       
       function create(string memory bankName, string memory bname, string memory asset, string memory sector, string memory Date, int auctionId  ) public{
       npa.bankName=bankName;
       npa.borrowName=bname;
       npa.asset=asset;
       npa.sector=sector;
       npa.date=Date;
       npa.Auction_id=auctionId;
    
    }
    
     function returnDet() public view returns (string memory, string memory, string memory, string memory, string memory, int)  {
    return(npa.bankName, npa.borrowName, npa.asset, npa.sector, npa.date, npa.Auction_id);
  }

     
}