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
  {
    cid: "bafybeifotlipvwv2nzpagajtk226ly3bfoug46phweyf5d6cli4636xhja", // JOS
    nftId: [
      "0x30167a3d8f73bce1a2d9d3c5468e46b4a7ce23a110c5151d7ecbec5e5bbb5939",
    ], // You need to own JOS to unlock this.
  },
  {
    cid: "bafybeihedvjzxbfjzcv43sdy3py2movxkp7tgfiovnl2t7gxy665hllape", // ONN
    nftId: [
      "0x33753c2780f7edac178e6fa4f489414abe47814ab85c2b8da0ec5da4a3fba5ae",
    ], // You need to own ONN to unlock this.
  },
  {
    cid: "bafybeihxgmjvx4gjymy36b7bheyhbf3zsquyoplj6srkpxes243waxn7o4", // RGBZ
    nftId: [
      "0xdd17feeb188fba9efacfd5f5f9c5f7abb49d68c7253287c8b9c445f7e1f59ad4",
    ], // You need to own RGBZ to unlock this.
  },
];

export { unlockables };
