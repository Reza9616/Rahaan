import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';
import { Container } from './ui/Container';
import { div } from 'framer-motion/client';

type slidesType = {
  id: number,
  imgUrl: string
}

const slides: slidesType[] = [
  { id: 1, imgUrl: "4. Financial Security.png" },
  { id: 2, imgUrl: "5. Mobile Banking.png"},
  { id: 3, imgUrl: "13. Online Store.png"},
  { id: 4, imgUrl: "4. Financial Security.png" },
  { id: 5, imgUrl: "5. Mobile Banking.png"},
  { id: 6, imgUrl: "13. Online Store.png"},
  { id: 7, imgUrl: "4. Financial Security.png" },
  { id: 8, imgUrl: "5. Mobile Banking.png"},
  { id: 9, imgUrl: "13. Online Store.png"},
]
  



export function CarouselBasic() {
  return (
    <Container className='relative mt-20 bg-accent'>
    <div className='w-full max-w-xl xl:max-w-4xl mx-auto h-[60vh] flex items-center'>
      <Carousel>
        <div className='mb-5'>
          <h5 className='text-2xl font-bold'>محصولات ما:</h5>
        </div>
        <CarouselContent>
          
          {slides.map((slide) => (
          <CarouselItem key={slide.id} className='p-4 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800 overflow-hidden'>
              <Image
                className='pointer-events-none'
                src={`/${slide.imgUrl}`}
                width={500}
                height={1}
                alt=''
              >
              </Image>
              
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </div>
    </Container>
  );
}
