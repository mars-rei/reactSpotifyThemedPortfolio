import { useState } from 'react';

const ImageSlideshow = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="md:w-full lg:w-160 h-full bg-[#282828] rounded-md">
        <div className="h-full overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap md:gap-x-8 lg:gap-x-0">
            <div className="slide flex-shrink-0 md:w-full lg:w-160 flex justify-center items-center mt-5 mb-2">
              <figure className="space-y-1">
                <img 
                  src={items[currentSlide].src} 
                  className="rounded-md md:h-full lg:h-160 object-contain" 
                  alt={items[currentSlide].caption} 
                />

                <figcaption className="text-xs text-faded text-center">
                  {items[currentSlide].caption}
                </figcaption>


                <p className="text-xs text-faded mt-5 text-center">
                  Slide {currentSlide + 1}/{items.length}
                </p>
                
                <div className="flex justify-center mt-3">
                  {currentSlide === 0 && items.length > 1 && (
                    <div onClick={next} className="cursor-pointer hover:text-white">
                      <i className="fa-solid fa-arrow-right fa-sm"></i>
                    </div>
                  )}
                  
                  {currentSlide === items.length - 1 && items.length > 1 && (
                    <div onClick={prev} className="cursor-pointer hover:text-white">
                      <i className="fa-solid fa-arrow-left fa-sm"></i>
                    </div>
                  )}
                  
                  {currentSlide > 0 && currentSlide < items.length - 1 && items.length > 1 && (
                    <div>
                      <div onClick={prev} className="cursor-pointer hover:text-white mx-2">
                        <i className="fa-solid fa-arrow-left fa-sm"></i>
                      </div>
                      <div onClick={next} className="cursor-pointer hover:text-white mx-2">
                        <i className="fa-solid fa-arrow-right fa-sm"></i>
                      </div>
                    </div>
                  )}
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;