import { useMenu } from "../../common/stores/menu.tsx";
import { IoClose as CloseIcon } from "react-icons/io5";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";

const MobileMenuButton = () => {
  const { isOpen, toggleMenu } = useMenu();

  const iconSize = 22;

  return (
    <button onClick={toggleMenu} className="text-neutral-900 dark:text-neutral-50">
      {isOpen ? <CloseIcon size={iconSize} /> : <HamburgerIcon size={iconSize} />}
    </button>
  );
};

export default MobileMenuButton;
