import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark:bg-dark-secondary rounded-full  p-2 transition"
    >
      {theme === "light" ? (
        <MoonIcon className="dark:text-dark-text h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
