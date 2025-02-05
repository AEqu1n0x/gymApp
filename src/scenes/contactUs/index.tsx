import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const { translate } = useTranslation();
  const inputStyle = `mt-5 w-full rounded-xl bg-primary-300 px-5 py-3 placeholder-white 
  focus:outline-none focus:ring-0 focus:border-primary-500 dark:focus:border-secondary-500 
  dark:bg-darkGray-100 dark:text-white dark:placeholder-gray-400 
  border border-transparent dark:border-gray-600`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="dark:bg-darkGray-50">
      <section id="contactus" className="mx-auto w-5/6 pb-32 pt-40">
        <motion.div
          onViewportEnter={() => {
            setSelectedPage(SelectedPage.ContactUs);
          }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className="md:w-3/5"
            >
              <HText>
                <span className="text-primary-500">
                  {translate("joinNowBig")}{" "}
                </span>
                {translate("shape")}
              </HText>
              <p className="my-5">{translate("OurClassesDescription")}</p>
            </motion.div>
          </div>
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/oneorov@gmail.com"
              >
                <input
                  className={inputStyle}
                  type="text"
                  placeholder="NAME"
                  {...register("name", { required: true, maxLength: 100 })}
                />

                {errors.name && (
                  <p className="dark: mt-1 text-primary-500 dark:text-secondary-500">
                    {errors.name.type === "required" &&
                      "This field is required"}
                    {errors.name.type === "maxLength" &&
                      "This field is too long"}
                  </p>
                )}

                <input
                  className={inputStyle}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />

                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" &&
                      "This field is required"}
                    {errors.email.type === "pattern" && "Invalid email"}
                  </p>
                )}

                <input
                  className={inputStyle}
                  type="text"
                  placeholder="PHONE"
                  {...register("phone", {
                    required: true,
                    pattern:
                      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,5}$/gm,
                  })}
                />

                {errors.phone && (
                  <p className="mt-1 text-primary-500">
                    {errors.phone.type === "required" &&
                      "This field is required"}
                    {errors.phone.type === "pattern" && "Invalid phone"}
                  </p>
                )}

                <textarea
                  className={inputStyle}
                  rows={4}
                  cols={50}
                  placeholder="MESSAGE"
                  {...register("message", { required: true, maxLength: 2000 })}
                />

                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" &&
                      "This field is required"}
                    {errors.message.type === "maxLength" &&
                      "This field is too long. 2000 char available"}
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-primary-500 hover:text-white dark:bg-primary-500 dark:hover:bg-secondary-500 dark:hover:text-black"
                >
                  {translate("submit")}
                </button>
              </form>
            </motion.div>

            <motion.div
              className="relative z-0 mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img
                  className="mt-5 w-full"
                  alt="contact-us-pic"
                  src={ContactUsPageGraphic}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUs;
