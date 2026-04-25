interface PullQuoteProps {
  children: React.ReactNode;
}

const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <blockquote className="my-8 border-l-4 border-primary pl-6 sm:pl-8">
      <p className="font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground">
        {children}
      </p>
    </blockquote>
  );
};

export default PullQuote;
