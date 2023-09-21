import Router from './Router';
import { ErrorBoundary } from 'react-error-boundary';
import DefaultErrorFallback from 'components/errors/DefaultErrorFallback';

import './App.css';

export default function App() {
  console.log('App');
  return (
    <ErrorBoundary FallbackComponent={DefaultErrorFallback}>
      <Router />
    </ErrorBoundary>
  );
}
