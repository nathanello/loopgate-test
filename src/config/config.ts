import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeibbfcrjpu3ib5mipxpyo2joz7eed4bvft6def5ckcmy4scfaxvnqa", // BB AUS TOUR
    nftId: [
      "0x29e59d237e1d8c72b8f36fa85a4d86d02d3b413945cd4cbff41cfa77e5b34d83",
    ], // You need to own BB AUS TOUR to unlock this.
  },
  {
    cid: "bafybeiagzjl775o2vpigiucoe2of6n2qigfjfthdra62lj74vsexk6coxq", // BB TAP
    nftId: [
      "0x418267ed4f086a7a8fa7152434340ba09ec77081ac358b8b6599942c3e3773bd",
    ], // You need to own BB TAP to unlock this.
  },
  {
    cid: "bafybeid2aw5yeyw5a276c2h5alx7xv6tcdny6w6er3egi6nplqtfrwl24i", // CDC
    nftId: [
      "0xadf93d2e38e288d07127967c4cda91210c60ade0e23a633bcf43ee12632fff5b",
    ], // You need to own CDC to unlock this.
  },
  {
    cid: "bafybeiatoc7dqegcwnyoaznkltgmlbvv6rbomlnsuppptyid6iihpufctq", // FH
    nftId: [
      "0xeff063a7380f6c898b05d50750fa3918961afaf2b7a1600e2ec208bf21033f8d",
    ], // You need to own FH to unlock this.
  },
];

export { unlockables };
