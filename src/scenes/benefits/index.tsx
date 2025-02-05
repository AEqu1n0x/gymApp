import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { useTranslation } from "@/hooks/useTranslation";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 dark:text-white" />,
    title: "facilities",
    description: "facilitiesDescription",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 dark:text-white" />,
    title: "classes",
    description: "classesDescription",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 dark:text-white" />,
    title: "trainers",
    description: "trainersDescription",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const { translate } = useTranslation();
  return (
    <div className="dark:bg-darkGray-50">
      <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          onViewportEnter={() => {
            setSelectedPage(SelectedPage.Benefits);
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:w--3/5 md:my-5"
          >
            <HText>{translate("justGym")}</HText>
            <p className="my-5 text-sm">{translate("benefitsDesc")}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mt-5 items-center justify-between gap-8 md:flex"
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={translate(benefit.title)}
                description={translate(benefit.description)}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          {/* Картинка и описание*/}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* Картинка */}
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
            {/* Описание*/}

            <div>
              {/* Заголовок*/}
              <div className="relative">
                <div className="overflow-hidden before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    variants={{
                      hidden: { opacity: 0, x: 100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      {translate("benefitsMill")} {"  "}
                      <span className="text-primary-500">
                        {" "}
                        {translate("fit")}
                      </span>
                    </HText>
                  </motion.div>
                </div>
              </div>

              {/* Описание*/}
              <div className="overflow-hidden">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <p className="my-5">{translate("benefitText1")}</p>
                  <p className="mb-5">{translate("benefitText2")}</p>
                </motion.div>
              </div>

              {/* Кнопка*/}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    {translate("joinNow")}
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Benefits;
