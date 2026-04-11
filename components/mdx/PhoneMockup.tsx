interface PhoneMockupProps {
  src: string;
  caption?: string;
}

const PhoneMockup = ({ src, caption }: PhoneMockupProps) => {
  return (
    <figure className="my-8 flex flex-col items-center">
      <div className="relative w-[280px] rounded-[2.5rem] border-[8px] border-[#1A1A1A] bg-[#1A1A1A] shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1A1A1A] rounded-b-2xl z-10" />
        <div className="rounded-[2rem] overflow-hidden">
          <img src={src} alt={caption || ""} className="w-full h-auto" />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 font-sans text-sm text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default PhoneMockup;
