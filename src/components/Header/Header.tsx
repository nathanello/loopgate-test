import { ConnectKitButton } from "connectkit";
import Image from "next/image";
import LogoBrandLight2 from "@/public/images/logo/NJJ_Publishing_Mascot.png";

const Header = () => {
  return (
    <div className="w-full flex py-3 px-4 sm:px-6 sticky top-0 items-center justify-between border-b sm:border-b-0 border-white/10 bg-slate-900/50 backdrop-blur-lg z-10">
      <Image src={LogoBrandLight2} alt="NJJ Publishing Logo" height={32} />

      <ConnectKitButton />
    </div>
  );
};

export default Header;
