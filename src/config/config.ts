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
    cid: "bafybeibnx7wm5ijomzugkfp7ghk7cbqikhfjgjfta3joz4v5pa6in57aem", // BB AUS TOUR
    nftId: [
      "0x29e59d237e1d8c72b8f36fa85a4d86d02d3b413945cd4cbff41cfa77e5b34d83",
    ], // You need to own BB AUS TOUR to unlock this game download.
  },
];

export { unlockables };
