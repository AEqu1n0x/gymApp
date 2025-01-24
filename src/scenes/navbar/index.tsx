import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  // касотмный хук для отслеживания изменений ширины окна
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)");

  // нажата ли кнопка меню
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // фон навигации при прокрутке страницы
  const navbarBG = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

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
            <img alt="logo" src={Logo} />

            {/* Правая часть меню*/}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
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

      {/* Мобильное меню  */}

      {!isAboveMediumScreens && (
        <div
          id="mobile-menu"
          className={`fixed bottom-0 right-0 z-40 h-full w-[300px] transform rounded-3xl bg-primary-100 drop-shadow-2xl transition-transform duration-500 ease-in-out ${
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
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
