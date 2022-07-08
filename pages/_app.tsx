import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/Global'

const Root = styled.main`
  width: 100%;
`
function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--MOBILE-vh', `${vh}px`)
  }, [])

  return (
    <>
      <Head>
        <title>Sungyu Jang&apos;s Devfolio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="xodm95@gmail.com" />
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta
          name="keywords"
          content="Jang Sungyu, Portfolio, Developer, Front-End, 개발자, 프론트엔드"
        />
        <meta
          name="description"
          content="
          FrontEnd Developer Jang Sungyu's Devfolio 프론트엔드 개발자 장선규의 개발 포트폴리오 입니다. 
          찾아주셔서 감사합니다!
          Thank you for visiting my dev portfolio site!!
          "
        />
        <meta name="og:site_name" content="장선규's Devfolio" />
        <meta name="og:title" content="프론트엔드 개발자 장선규" />
        <meta
          name="og:description"
          content="안녕하세요 프론트엔드 개발자 장선규의 포트폴리오 사이트 입니다."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:image" content="/favicon.ico" />
        <meta name="robots" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Root id="root">
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default MyApp
