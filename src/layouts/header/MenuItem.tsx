import { useMenu } from '@/common/stores/menu'
import { NavigationMenuItem, NavigationMenuLink } from '@radix-ui/react-navigation-menu'

interface MenuItemProps {
	href: string
	title: string
}

const MenuItem = ({ href, title }: MenuItemProps) => {
	const { isActive, setIsActive, hideMenu } = useMenu()

	const handleClick = () => {
		hideMenu()
		setIsActive(title)
	}

	return (
		<NavigationMenuItem onClick={handleClick}>
			<a href={href}>
				<NavigationMenuLink asChild className="w-full rounded-md px-2 py-1 dark:bg-neutral-800">
					<p className="font-medium dark:text-slate-50">{title}</p>
				</NavigationMenuLink>
			</a>
		</NavigationMenuItem>
	)
}

export default MenuItem
