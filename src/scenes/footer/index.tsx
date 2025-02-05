import Logo from "@/assets/Logo.png";
import LogoDark from "@/assets/LogoDark.png";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { translate } = useTranslation();
  return (
    <section className="dark:bg-darkGray-100 w-full bg-primary-100 py-16">
      <div className="justify-content mx-auto w-3/5 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" className="block dark:hidden" />
          <img src={LogoDark} alt="logo" className="hidden dark:block" />
          <p className="my-5">{translate("footerText")}</p>
          <p className="font-bold">{translate("footerRights")}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{translate("footerLinks")}</h4>
          <p className="my-5">{translate("footerLink1")}</p>
          <p className="my-5">{translate("footerLink2")}</p>
          <p>{translate("footerLink3")}</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{translate("footerContact")}</h4>
          <p className="my-5">{translate("footerCnts")}</p>
          <p>+7(913)879-24-90</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
