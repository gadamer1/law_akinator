import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { END } from "redux-saga";
import "./styles.css";
import { SagaStore, wrapper } from "../Components/store";
import AppLayout from "../Layouts/AppLayout";

class LawAkinator extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as SagaStore).sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    );
  }
}

export default wrapper.withRedux(LawAkinator);