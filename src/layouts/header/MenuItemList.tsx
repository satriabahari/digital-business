import { MENUS } from '@/common/constants/menu'
import { NavigationMenu, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import MenuItem from './MenuItem'

const MenuItemList = () => {
	const filteredMenus = MENUS.filter((menu) => menu.isShow)
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex h-screen cursor-pointer flex-col gap-x-8 gap-y-4 lg:h-auto lg:flex-row">
				{filteredMenus.map((menu) => (
					<MenuItem href={menu.href} title={menu.title} />
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default MenuItemList
