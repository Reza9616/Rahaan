import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';
import { Container } from './ui/Container';

type slidesType = {
  id: number,
  imgUrl: string
}

const slides: slidesType[] = [
  { id: 1, imgUrl: "erp01.jpg" },
  { id: 2, imgUrl: "erp02.jpg"},
  { id: 3, imgUrl: "erp03.jpg"},
  { id: 4, imgUrl: "eco01.jpg" },
  { id: 5, imgUrl: "eco02.jpg"},
  { id: 6, imgUrl: "eco03.jpg"},
  { id: 7, imgUrl: "omoomi.jpg" },
  { id: 8, imgUrl: "gold.jpg"},
  { id: 9, imgUrl: "hyper.jpg"},
  { id: 10, imgUrl: "beauti-edu.jpg"},
  { id: 11, imgUrl: "baker.jpg"},
  { id: 12, imgUrl: "cafe.jpg"},
]
  
export function CarouselBasic() {
  return (
    <Container className='relative mt-20 bg-accent hidden'>
    <div className='w-full max-w-xl xl:max-w-4xl mx-auto h-[60vh] flex items-center'>
      <Carousel>
        <div className='mb-5'>
          <h5 className='text-2xl font-bold'>محصولات ما:</h5>
        </div>
        <CarouselContent>
          
          {slides.map((slide) => (
          <CarouselItem key={slide.id} className='p-4 basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4'>
            <div className='flex items-center justify-center border border-zinc-200 dark:border-zinc-800 overflow-hidden'>
              <Image
                className='pointer-events-none object-cover'
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
