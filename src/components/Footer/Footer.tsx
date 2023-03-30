import FooterLink from "./FooterLink";

const Footer = () => {
const sourceCodeLink = "https://loopgate.netlify.app/";

  return (
    <div className="py-4 px-8 w-full flex flex-col md:flex-row items-center justify-between space-y-1 md:space-y-0 mt-auto text-center">
      <p className="text-white/40">
        <FooterLink href="https://notjustjpgs.com">Return To NJJ Publishing</FooterLink>
      </p>
      <div className="space-x-4">
        <FooterLink href={sourceCodeLink}>
          <p className="hidden md:inline-block"> Powered By LoopGate</p>
        </FooterLink>
      </div>
      </div>
  );
};

export default Footer;
