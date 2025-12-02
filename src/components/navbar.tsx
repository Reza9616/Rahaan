import React from 'react';
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

export const productLinks: NavItemType[] = [
	{
		title: 'رهان ERP',
		href: '',
		description: 'پیشنهادی برای مدیران سازمان های تجاری و دولتی بزرگ',
		icon: GlobeIcon,
	},
	{
		title: 'رهان اکو',
		href: '',
		description: 'نسخه ایی متفاوت از مجموعه رهان که مبتنی بر رویکردهای ERP طراحی شده',
		icon: LayersIcon,
	},
	{
		title: 'رهان استور',
		href: '',
		description: 'نرم افزاری راهبردی و کاربر پسند به همراه آموزش های متنوع و رایگان',
		icon: UserPlusIcon,
	},
	{
		title: 'سامانه مودیان',
		href: '',
		icon: BarChart,
	},
	{
		title: '',
		href: '',
		icon: PlugIcon,
	},
	{
		title: '',
		href: '',
		icon: DollarSign,
	},
	{
		title: '',
		href: '',
		icon: Shield,
	},
	{
		title: '',
		href: '',
		icon: CodeIcon,
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
		title: 'شرایط خدمات',
		href: '',
		description: 'نحوه عملکرد ما را درک کنید',
		icon: FileText,
	},
	{
		title: 'حفظ حریم خصوصی',
		href: '',
		description: 'چگونه از اطلاعات شما محافظت می‌کنیم',
		icon: Shield,
	},
	{
		title: 'سیاست بازپرداخت',
		href: '',
		description: 'جزئیات مربوط به بازپرداخت و لغو سفارش',
		icon: RotateCcw,
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
	{
		title: 'سوالات متداول',
		href: '',
		icon: HelpCircle,
		description: 'پاسخ سوالات خود را بیابید',
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
						<Button variant={'secondary'} className="text-xs sm:text-sm">درخواست نمایندگی</Button>
						<Button variant={'outline'} className="text-xs sm:text-sm">فعال ساز</Button>
						<MoileNav />
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
					<NavigationMenuTrigger>محصولات</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-4xl md:grid-cols-[1fr_.30fr]">
							<ul className="grid grow gap-4 p-4 md:grid-cols-3 md:border-r">
								{productLinks.slice(0, 3).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} />
									</li>
								))}
							</ul>
							<ul className="space-y-1 p-4">
								{productLinks.slice(3).map((link) => (
									<li key={link.href}>
										<NavSmallItem
											item={link}
											href={link.href}
											className="gap-x-1"
										/>
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>شرکت</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="grid w-full md:w-4xl md:grid-cols-[1fr_.40fr]">
							<ul className="grid grow grid-cols-2 gap-4 p-4 md:border-r">
								{companyLinks.slice(0, 2).map((link) => (
									<li key={link.href}>
										<NavGridCard link={link} className="min-h-36" />
									</li>
								))}
								<div className="col-span-2 grid grid-cols-3 gap-x-4">
									{companyLinks.slice(2, 5).map((link) => (
										<li key={link.href}>
											<NavLargeItem href={link.href} link={link} />
										</li>
									))}
								</div>
							</ul>
							<ul className="space-y-2 p-4">
								{companyLinks.slice(5, 10).map((link) => (
									<li key={link.href}>
										<NavLargeItem href={link.href} link={link} />
									</li>
								))}
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer">
						قیمت‌ها
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function MoileNav() {
	const sections = [
		{
			id: 'محصولات',
			name: 'Product',
			list: productLinks,
		},
		{
			id: 'رهان',
			name: 'Company',
			list: companyLinks,
		},
	];

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full lg:hidden w-auto h-a4">
					<MenuIcon className="size-6" />
				</Button>
			</SheetTrigger>
			<SheetContent
				className="bg-background/95 supports-backdrop-filter:bg-background/80 w-full gap-0 backdrop-blur-lg"
				showClose={false}
			>
				<div className="flex h-14 items-center justify-end border-b px-4">
					<SheetClose asChild>
						<Button size="icon" variant="ghost" className="rounded-full">
							<XIcon className="size-5" />
							<span className="sr-only">Close</span>
						</Button>
					</SheetClose>
				</div>
				<div className="container grid gap-y-2 overflow-y-auto px-4 pt-5 pb-12">
					<Accordion type="single" collapsible>
						{sections.map((section) => (
							<AccordionItem key={section.id} value={section.id}>
								<AccordionTrigger className="capitalize hover:no-underline">
									{section.id}
								</AccordionTrigger>
								<AccordionContent className="space-y-1">
									<ul className="grid gap-1">
										{section.list.map((link) => (
											<li key={link.href}>
												<SheetClose asChild>
													<NavItemMobile item={link} href={link.href} />
												</SheetClose>
											</li>
										))}
									</ul>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</SheetContent>
		</Sheet>
	);
}
