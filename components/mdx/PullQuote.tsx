interface PullQuoteProps {
  children: React.ReactNode;
}

const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <blockquote className="my-10 border-l-4 border-primary pl-6 py-2">
      <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed italic">
        {children}
      </p>
    </blockquote>
  );
};

export default PullQuote;
