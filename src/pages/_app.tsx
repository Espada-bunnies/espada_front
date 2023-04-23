import '@/styles/index.scss';

import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import allFonts from '@/assets/fonts/fonts';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className={allFonts.map((i) => i.className).join(' ')}>
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
