import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import App from 'next/app';
import { wrapper } from '../store';
import theme from '../theme';
import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
