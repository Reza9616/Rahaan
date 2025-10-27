import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';
import { Container } from './ui/Container';
import { Button } from './ui/button';

export function CarouselBasic() {
  return (
    <Container className='bg-accent mt-10'>
    <div className='relative w-full max-w-5xl mx-auto h-[60vh] flex items-center'>
      <Carousel>
        <CarouselContent>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/4. Financial Security.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/5. Mobile Banking.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/13. Online Store.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/16. Office Building.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/20. Financial Report.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/4. Financial Security.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/4. Financial Security.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Image
                className=''
                src={'/4. Financial Security.png'}
                width={500}
                height={500}
                alt=''
              >
              </Image>
            </div>
          </CarouselItem>
          <CarouselItem className='p-4 md:basis-1/3'>
            <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
              <Button variant={'link'}>مشاهده ی بیشتر</Button>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation alwaysShow />
        <CarouselIndicator />
      </Carousel>
    </div>
    </Container>
  );
}
