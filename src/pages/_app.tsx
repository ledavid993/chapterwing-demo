import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import App from 'next/app';
import { Provider } from 'react-redux';
import theme from '../theme';
import withReduxStore from '../lib/with-redux-store';
import '../styles/global.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
