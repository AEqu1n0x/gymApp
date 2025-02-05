import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import HText from "@/shared/HText";
import Class from "./Class";
import { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const classes: Array<ClassType> = [
  {
    name: "ourClassesName1",
    description: "ourClassesDescription1",
    image: image1,
  },
  {
    name: "ourClassesName2",
    description: "ourClassesDescription2",
    image: image2,
  },
  {
    name: "ourClassesName3",
    description: "ourClassesDescription3",
    image: image3,
  },
  {
    name: "ourClassesName4",
    description: "ourClassesDescription4",
    image: image4,
  },
  {
    name: "ourClassesName5",
    description: "ourClassesDescription5",
    image: image5,
  },
  {
    name: "ourClassesName6",
    description: "ourClassesDescription6",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const { translate } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const isAtStart = scrollLeft === 0;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
        const canScroll = scrollWidth > clientWidth;
        if (canScroll) {
          container.scrollLeft += e.deltaY;
          if (!(isAtStart && e.deltaY < 0) && !(isAtEnd && e.deltaY > 0)) {
            e.preventDefault();
          }
        }
      }
    };
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <section
      id="ourclasses"
      className="dark:bg-darkPrimary-100 w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.OurClasses);
        }}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText> {translate("OurClassesText")}</HText>
            <p className="py-5">{translate("OurClassesDescription")}</p>
          </div>
        </motion.div>
        <div
          ref={containerRef}
          className="custom-scrollbar mt-10 h-[370px] w-full overflow-x-auto overflow-y-hidden"
        >
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={translate(item.name)}
                description={translate(item.description)}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
