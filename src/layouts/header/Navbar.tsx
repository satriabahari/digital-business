import MenuItemList from "./MenuItemList";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <div className="fixed left-1/2 top-6 z-[999] m-auto hidden -translate-x-1/2 items-center gap-x-6 rounded-full border-[1.5px] border-neutral-300 bg-white px-6 py-3 backdrop-blur-3xl dark:border-primary dark:bg-dark-tertiary/30 lg:flex">
      <MenuItemList />
      <ThemeToggleButton />
    </div>
  );
};

export default Navbar;
