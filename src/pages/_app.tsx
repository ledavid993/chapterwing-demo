import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import { wrapper } from '../store';
import theme from '../theme';
import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo
          canonical="https://chapterwing.com"
          twitter={{
            handle: '@ChapterWing',
            site: '@ChapterWing',
            cardType: 'summary_large_image',
          }}
        />
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
