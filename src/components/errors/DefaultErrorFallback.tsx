'use client';

import { useErrorBoundary } from 'react-error-boundary';

type DefaultErrorFallbackProps = {
  error: any;
  resetErrorBoundary: any;
  onDismiss?: () => void;
};

const DefaultErrorFallback = (props: DefaultErrorFallbackProps) => {
  const { resetBoundary } = useErrorBoundary();
  const { error } = props;
  return (
    <div role="alert">
      {error}
      <button onClick={resetBoundary}>Reset</button>
    </div>
  );
};

export default DefaultErrorFallback;
