 
import {
	CodeIcon,
	GlobeIcon,
	LayersIcon,
	UserPlusIcon,
	Users,
	Star,
	FileText,
	Shield,
	RotateCcw,
	Handshake,
	Leaf,
	HelpCircle,
	DollarSign,
	BarChart,
	PlugIcon,
	MenuIcon,
	XIcon,
} from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuLink,
	type NavItemType,
	NavGridCard,
	NavSmallItem,
	NavLargeItem,
	NavItemMobile,
} from '@/components/ui/navigation-menu';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Logo from "./Logo";
import { AnimatedTabs } from './ui/animated-tabs';

export const productLinks: NavItemType[] = [
	{
		title: 'محصولات نرم افزاری ',
		href: 'Software',
		description: 'مشاهده لیست محصولات نرم افزاری',
		icon: GlobeIcon,
	},
	{
		title: 'محصولات سخت افزاری',
		href: 'Products',
		description: 'مشاهده لیست محصولات سخت افزاری',
		icon: LayersIcon,
	},  
	{
		title: 'استعلام قیمت',
		href: 'Calculator',
		description: 'مشاهده لیست محصولات سخت افزاری',
		icon: LayersIcon,
	},    
];

export const companyLinks: NavItemType[] = [
	{
		title: 'درباره ی ما',
		href: 'about',
		description: 'درباره داستان و تیم ما بیشتر بدانید',
		icon: Users,
	},
	{
		title: 'مقالات',
		href: '',
		description: 'درباره مقالات ما بیشتر بدانید',
		icon: Users,
	},    
];

export default function NavigationMenuDemo() {
	return (
		<div className="relative w-full px-6 py-4 lg:px-12 bg-accent">
			<div className="bg-transparent sticky top-1/4 z-50 mx-auto h-14 w-full sm:px-4 rounded-lg">
				<div className="flex h-full items-center justify-between">
					<div className='flex items-center gap-x-5'>
					<Logo />
					<DesktopMenu />
					</div>
					<div className="flex items-center gap-2">
						<Button className="text-xs sm:text-sm">دمو رایگان</Button> 
						<Button variant={'outline'} className="text-xs sm:text-sm hidden lg:block">فعال ساز</Button>
						<MobileNav />
					</div>
				</div>
			</div>
		</div>
	);
}

function DesktopMenu() {
	return (
		<NavigationMenu dir="rtl" className="hidden lg:block">
			<NavigationMenuList>
		  
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer" href='/'>
						صحفه اصلی
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer" href='Software'>
						محصولات نرم افزاری
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer" href='Products'>
						محصولات سخت افزاری
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer" href='about'>
						درباره ما
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer" href='/'>
						مقالات
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer" href='Calculator'>
						قیمت‌ها
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
function MobileNav() {
  const sections = [
    {
      title: "محصولات",
      list: productLinks,
    },
    {
      title: "رهان",
      list: companyLinks,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden rounded-full"
        >
          <MenuIcon className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        showClose={false}
        className="w-full p-0 bg-background rtl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b px-4 bg-background">
          <span className="text-base font-bold">منو</span>
          <SheetClose asChild>
            <Button size="icon" variant="ghost" className="rounded-full">
              <XIcon className="size-5" />
            </Button>
          </SheetClose>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-4 py-6 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              {/* Section title */}
              <h3 className="text-sm font-semibold text-muted-foreground">
                {section.title}
              </h3>

              {/* Links */}
              <ul className="space-y-2">
                {section.list.map((link) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <a
                        href={link.href}
                        className="flex items-center justify-start w-full rounded-2xl px-4 py-4 text-base font-medium transition active:scale-[0.98] hover:bg-muted"
                      >
                        {link.title}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
