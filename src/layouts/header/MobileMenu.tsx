import MobileMenuButton from "./MobileMenuButton";
import MenuItemList from "./MenuItemList";
import { useEffect } from "react";
import { useMenu } from "../../common/stores/menu.tsx";
import ThemeToggleButton from "./ThemeToggleButton";

const MobileMenu = () => {
  const { isOpen } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed z-[999] block w-full space-y-2 border-b-2 bg-neutral-300 px-4 py-2 backdrop-blur-3xl dark:border-primary dark:bg-dark-tertiary/30 lg:hidden ">
      <div className="flex justify-end gap-4">
        <ThemeToggleButton />
        <MobileMenuButton />
      </div>
      {isOpen && <MenuItemList />}
    </nav>
  );
};

export default MobileMenu;
