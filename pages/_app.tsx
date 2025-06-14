
// pages/_app.tsx (CORRECT)
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout> {/* Only wrap with Layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;