import { Dispatch, SetStateAction, useState } from 'react';
import ArrowRight from "@modules/common/icons/arrow-right"
import ArrowLeft from "@modules/common/icons/arrow-left"
import Image from 'next/image';
import { GridTileImage } from '../grid/tile';

export function Gallery({ images, imageIndex, setImageIndex }: { images: { src: string; altText: string }[], imageIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>; }) {

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center';

  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 && (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <button
                aria-label="Previous product image"
                className={buttonClassName}
                onClick={() => setImageIndex(previousImageIndex)}
              >
                <ArrowLeft size={16} color="grey"/>
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                aria-label="Next product image"
                className={buttonClassName}
                onClick={() => setImageIndex(nextImageIndex)}
              >
                <ArrowRight size={16} color="grey"/>
              </button>
            </div>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="h-auto w-20">
                <button
                  aria-label="Enlarge product image"
                  onClick={() => setImageIndex(index)}
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
