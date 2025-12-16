 
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
		href: '',
		description: 'مشاهده لیست محصولات نرم افزاری',
		icon: GlobeIcon,
	},
	{
		title: 'محصولات سخت افزاری',
		href: '',
		description: 'مشاهده لیست محصولات سخت افزاری',
		icon: LayersIcon,
	},
	{
		title: 'مای رهان',
		href: '',
		description:  'بزودی',
		icon: UserPlusIcon,
	},
	{
		title: 'نرم افزار سازمانی رهان',
		href: '',
		icon: BarChart,
	},
	{
		title: 'نرم افزار صنعتی بازرگانی رهان',
		href: '',
		icon: PlugIcon,
	},
	{
		title:  'نرم افزار فروشگاهی رهان',
		href: '',
		icon: DollarSign,
	}, 
];

export const companyLinks: NavItemType[] = [
	{
		title: 'درباره ی ما',
		href: '',
		description: 'درباره داستان و تیم ما بیشتر بدانید',
		icon: Users,
	},
	{
		title: 'داستان مشتریان',
		href: '',
		description: 'ببینید چگونه به مشتریان خود در موفقیت کمک کرده‌ایم',
		icon: Star,
	},   
	{
		title: 'همکاری',
		href: '',
		icon: Handshake,
		description: 'برای رشد و توسعه مشترک با ما همکاری کنید',
	},
	{
		title: 'وبلاگ',
		href: '',
		icon: Leaf,
		description: 'بینش‌ها، آموزش‌ها و اخبار شرکت',
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
						<Button variant={'secondary'} className="text-xs sm:text-sm hidden lg:block">درخواست نمایندگی</Button>
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
