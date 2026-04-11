"use client";

import { useState } from "react";

interface ImageGalleryProps {
  images: { src: string; alt?: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="my-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="flex-shrink-0 w-[70vw] md:w-[500px] rounded-2xl overflow-hidden"
            data-cursor="pointer"
          >
            <img
              src={img.src}
              alt={img.alt || ""}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={images[selected].src}
            alt={images[selected].alt || ""}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
