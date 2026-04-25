interface PhoneMockupProps {
  src: string;
  alt: string;
  caption?: string;
}

const PhoneMockup = ({ src, alt, caption }: PhoneMockupProps) => {
  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="relative w-[220px] sm:w-[260px] md:w-[280px] rounded-[2.5rem] bg-slate-900 p-[10px] shadow-2xl ring-1 ring-black/40">
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
          <div className="pointer-events-none absolute top-0 left-1/2 z-10 h-6 w-[45%] -translate-x-1/2 rounded-b-2xl bg-slate-900" />
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 max-w-xs text-center font-sans text-sm italic text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PhoneMockup;
