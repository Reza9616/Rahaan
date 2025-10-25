import { useId } from 'react'

import { Container } from '@/components/ui/Container'
import { number } from 'framer-motion'

type featuresType = {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
}
const features: featuresType[] = [
  {
    id: 1,
    name: 'مدیریت حسابداری پیشرفته',
    description:
      'کنترل کامل بر حساب‌ها و گزارش‌گیری.',
    icon: DeviceArrowIcon,
    category: 'رهان ERP'
  },
  {
    id: 2,
    name: 'با رویکرد ERP',
    description:
      'رهان اکو با رویکردی ERP',
    icon: DeviceClockIcon,
    category: 'رهان اکو'
  },
  {
    id: 3,
    name: 'نرم افزار مدیریت طلافروشی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    icon: GoldIcon,
    category: 'رهان استور'
  },
  {
    id: 3,
    name: 'نرم افزار مدیریت کافه، رستوران',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    icon: RestaurantIcon,
    category: 'رهان استور'
  },
  {
    id: 3,
    name: 'نرم افزار مدیریت سالن های زیبایی',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    icon: BeautyIcon,
    category: 'رهان استور'
  },
  
]

function DeviceArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function BeautyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <path 
        fill="#000000" 
        d="M28.185 24.38h-9.14v-1.52h-1.52V32h12.19v-9.14h-1.53zm-4.57-19.81h3.05V6.1h-3.05Zm0 6.1h1.53v3.05h-1.53Zm-1.52-4.57h1.52v1.52h-1.52Z"/>
      <path 
        fill="#000000" 
        d="M28.185 22.86V6.1h-1.52v10.67h-6.1V9.15h-1.52v13.71Zm-7.62-4.57h6.1v3.05h-6.1Z"/>
      <path 
        fill="#000000" 
        d="M20.565 7.62h1.53v1.53h-1.53ZM3.805 0v1.53h-1.52V32h12.19V1.53h-1.52V0Zm9.15 24.38h-9.15v-1.52h9.15Zm0-3.04h-9.15v-3.05h9.15Zm0-12.19h-1.53V4.57h-3.05V3.05h3.05v1.52h1.53Z"/>
    </svg>
  )
}

function RestaurantIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path 
        fill="none" 
        stroke="#000000" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="1.5" 
        d="M3 12v5m0 0h2c1.414 0 2.121 0 2.56.44C8 17.878 8 18.585 8 20v1m-5-4v4M4 7l5.317-2.917C10.633 3.361 11.292 3 12 3s1.367.361 2.683 1.083L20 7m-2-1v4M6 6v4m15 2v5m0 0h-2c-1.414 0-2.121 0-2.56.44C16 17.878 16 18.585 16 20v1m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1" 
        color="currentColor"/>
    </svg>
  )
}

function GoldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path 
        fill="none" 
        stroke="#000000" 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="1.5" 
        d="M14.265 18.372c.316-.965.474-1.447.797-1.779q.231-.238.527-.386C16 16 16.5 16 17.5 16s1.5 0 1.912.207q.294.148.527.386c.323.332.48.814.797 1.779l.326.995c.394 1.202.591 1.802.297 2.218c-.295.415-.917.415-2.162.415h-3.393c-1.245 0-1.868 0-2.162-.415c-.295-.416-.098-1.016.296-2.218zm-5.501-8c.316-.965.475-1.447.797-1.779q.233-.238.527-.386C10.5 8 11 8 12 8s1.5 0 1.912.207q.294.148.527.386c.322.332.48.814.797 1.779l.326.995c.394 1.202.59 1.802.297 2.218c-.295.415-.917.415-2.163.415h-3.392c-1.246 0-1.868 0-2.162-.415c-.295-.416-.098-1.016.296-2.218zm-5.5 8c.317-.965.475-1.447.798-1.779q.231-.238.527-.386C5 16 5.5 16 6.5 16s1.5 0 1.912.207q.294.148.527.386c.323.332.48.814.797 1.779l.326.995c.394 1.202.591 1.802.297 2.218c-.295.415-.917.415-2.162.415H4.804c-1.245 0-1.868 0-2.162-.415c-.295-.416-.098-1.016.296-2.218zM12 2v2m-4.5-.5L9 5m7.5-1.5L15 5" 
        color="currentColor"/>
    </svg>
  )
}

export default function SecondaryFeatures() {
  const groupedFeatures = features.reduce((acc, feature) => {
  const cat = feature.category;
  if (!acc[cat]) { acc[cat] = []; } acc[cat].push(feature);
    return acc;
  }, {});

  return (
    <section
      id="service"
      aria-label="Features of Rahaan Product"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900">
            ما حساب‌ها رو ساده می‌کنیم تا شما وقت بیشتری برای رشد داشته باشید.
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            از نرم‌افزارهای فروشگاهی تا ERP کامل شرکتی — هر ابزاری که برای مدیریت بهتر کارتون نیاز دارید اینجاست.
          </p>
        </div>
        {Object.keys(groupedFeatures).map((category) =>
          <div key={category} className='mt-10'>
            <h3 className='text-2xl font-semibold mb-4'>
              {category}
            </h3>
            <ul
              role='list'
              className='mx-auto grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
            >
              {groupedFeatures[category].map((feature) =>
              (
                <li
                  key={feature.name}
                  className='rounded-2xl border border-gray-200 p-8 flex flex-col space-y-6'
                >
                  <feature.icon className="h-8 w-8" />
                  <h4 className='bg-muted-foreground/10 py-2 px-4 rounded-lg text-lg'>
                    {feature.name}
                  </h4>
                  <p className='text-gray-700'>
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  )
}
