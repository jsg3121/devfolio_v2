import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../styles/Global'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/common.scss'
import Script from 'next/script'

const Root = styled.main`
  width: 100%;
`
function MyApp({ Component, pageProps }: AppProps) {
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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sungyujang.com" />
        <meta property="og:site_name" content="장선규's Devfolio" />
        <meta
          property="og:title"
          content="프론트엔드 개발자 장선규's Devfolio"
        />
        <meta
          property="og:description"
          content="안녕하세요 프론트엔드 개발자 장선규의 포트폴리오 사이트 입니다."
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="robots" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sungyujang.com" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-HBRHEG0GFL"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HBRHEG0GFL', {
            page_path: window.location.path
          });
          `}
      </Script>
      <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
      <Script id="ntag-init" type="text/javascript" strategy="afterInteractive">
        {`
          if(!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "1bbc74686b266d0";
          if(window.wcs) {
            wcs_do();
          }
        `}
      </Script>
      <GlobalStyle />
      <Root id="root">
        <Component {...pageProps} />
      </Root>
    </>
  )
}

export default MyApp
