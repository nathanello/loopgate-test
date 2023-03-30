import FooterLink from "./FooterLink";

const Footer = () => {
  const currentYear = getCurrentYear();
  const twitterLink =
    "https://twitter.com/intent/tweet?text=Check%20out%20%23LoopGate%2C%20a%20%23Dapp%20that%20facilitates%20Token-Gated%20Content%20using%20%23Loopring%20%23L2%20%23NFTs%20%F0%9F%91%80%20%F0%9F%A4%AF&url=https%3A%2F%2Floopgate.netlify.app%2F&via=0xGeel";
  const sourceCodeLink = "https://github.com/0xGeel/loopring-token-gating";

  return (
    <div className="py-4 px-8 w-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 mt-auto text-center">
      <p className="text-white/40">
        <FooterLink href="https://notjustjpgs.com">Return To NJJ Publishing</FooterLink>
      </p>
  );
};

export default Footer;
