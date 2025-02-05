import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import LogoDark from "@/assets/LogoDark.png";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Modal from "@/modal";
import ThemeToggle from "@/shared/ThemeToggle";
import LanguageSwitcher from "@/shared/LanguageSwitch";
import { useTranslation } from "@/hooks/useTranslation";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const { translate } = useTranslation();
  const flexBetween = "flex items-center justify-between";
  const [isModalOpen, setIsModalOpen] = useState(false);
  // касотмный хук для отслеживания изменений ширины окна
  const isAboveMediumScreens = useMediaQuery("(min-width: 1100px)");

  // нажата ли кнопка меню
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // фон навигации при прокрутке страницы
  const navbarBG = isTopOfPage
    ? ""
    : "bg-primary-100 dark:bg-darkGray-100 drop-shadow";

  // Закрытие окна мобильного меню при нажатии за границы этого меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");

      if (menu && !menu.contains(event.target as Node)) {
        setIsMenuToggled(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* Навигационное меню */}
      <div
        className={`${navbarBG} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Левая часть меню */}

            <img src={Logo} alt="logo" className="block dark:hidden" />
            <img src={LogoDark} alt="logo" className="hidden dark:block" />

            {/* Правая часть меню*/}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="ourClasses"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="contactUs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <button onClick={() => setIsModalOpen(true)}>
                    <p>{translate("signIn")}</p>
                  </button>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    {translate("becomeMember")}
                  </ActionButton>
                </div>
                <div className="flex gap-4">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <Bars3Icon className="h-7 w-7 text-white"></Bars3Icon>
              </button>
            )}
          </div>
        </div>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="gap-8 bg-primary-300 p-10 text-center">
          <h2 className="mb-5 text-gray-500">{translate("hi")}</h2>
          <p className="mb-5 text-gray-500">{translate("tg")}</p>
          <button
            className="rounded-xl bg-secondary-500 px-2 py-3 text-center text-gray-500 hover:bg-primary-500"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            {translate("close")}
          </button>
        </div>
      </Modal>

      {/* Мобильное меню  */}

      {!isAboveMediumScreens && (
        <div
          id="mobile-menu"
          className={`dark:bg-darkGray-100 fixed bottom-0 right-0 z-40 h-full w-[300px] transform rounded-3xl bg-primary-100 drop-shadow-2xl transition-transform duration-500 ease-in-out ${
            isMenuToggled ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-12 pt-6">
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <XMarkIcon className="h-7 w-7 text-white"></XMarkIcon>
            </button>
          </div>

          {/* Ссылки на страницы в мобильном меню  */}
          <div className={`ml-[33%] flex flex-col gap-10 text-xl`}>
            <Link
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="ourClasses"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="contactUs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className="ml-[33%] pt-7">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
