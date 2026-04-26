interface PhoneMockupProps {
  src: string;
  alt: string;
  caption?: string;
}

const PhoneMockup = ({ src, alt, caption }: PhoneMockupProps) => {
  return (
    <figure className="phone-mockup">
      <div className="phone-mockup__tile">
        <div className="phone-mockup__device">
          <div className="phone-mockup__screen">
            <div className="phone-mockup__island" aria-hidden="true" />
            <img src={src} alt={alt} className="phone-mockup__image" />
          </div>
        </div>
      </div>
      {caption && <figcaption className="phone-mockup__caption">{caption}</figcaption>}
    </figure>
  );
};

export default PhoneMockup;
