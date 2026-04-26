interface PullQuoteProps {
  children: React.ReactNode;
}

const PullQuote = ({ children }: PullQuoteProps) => {
  return (
    <blockquote className="pull-quote">
      <p className="pull-quote__text">
        <span aria-hidden="true">&#8220;</span>
        {children}
        <span aria-hidden="true">&#8221;</span>
      </p>
    </blockquote>
  );
};

export default PullQuote;
