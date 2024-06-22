
import { Text } from "../ui/text";
import FooterCard from "./footerCard";
import MailIcon from "@/../public/icons/mail.svg";
import MapIcon from "@/../public/icons/map.svg";
import CallIcon from "@/../public/icons/call.svg";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <footer className="bg-secondary grid lg:grid-cols-2 xl:grid-cols-3 xl:space-x-5 py-12 px-5 xl:px-24">
        <FooterCard
          key={0}
          icon={MailIcon.src}
          title="Mail Here"
          text1="office@digenie.in"
          text2=""
          text3=""
        />
        <FooterCard
          key={1}
          icon={MapIcon.src}
          title="Visit Here"
          text1="5, Samy Street, Egmore"
          text2="Chennai, Tamil Nadu"
          text3="India-600008 "
        />
        <FooterCard
          key={2}
          icon={CallIcon.src}
          title="Call Here"
          text1="+91 99627 65353"
          text2="+91 99942 51353"
          text3=""
        />
      </footer>
      <Text
        className="text-center bg-secondary py-5"
        variant="body1"
        color="text-white"
      >
        © {currentYear} Digenie</Text>
    </>
  );
};

export default Footer;
