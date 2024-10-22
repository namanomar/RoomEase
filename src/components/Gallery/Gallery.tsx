import Image from 'next/image';
import { assets } from '../../../public/assets/assets';

const Gallery = () => {
  return (
    <div className='mx-auto container py-14 h-full'>
      <div className='flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img object-cover max-w-sm'
              src={assets.hotel1}
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src={assets.hotel2}
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48 object-cover'>
            <Image
              alt='gallery'
              className='img'
              src={assets.hotel3}
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48 object-cover'>
            <Image
              alt='gallery'
              className='img'
              src={assets.hotel7}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src={assets.hotel4}
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src={assets.hotel5}
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src={assets.hotel6}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
