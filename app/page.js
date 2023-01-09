"use client";
import Community from "components/Community";
import Features from "components/Features";
import Hero from "components/Hero";
import Roadmap from "components/Roadmap";
import Tokenomics from "components/Tokenomics";
import Partners from "components/Partners";
import Head from "next/head";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>GooGly Bot</title>

        <meta property="og:title" content="GooGly Bot" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="GooGlyBot.io" />
        <meta
          property="og:description"
          content=" GooGly Bot is a convenient and efficient way to search for
          information on Telegram. With this bot, you can easily find what
          you're looking for without having to leave the Telegram app."
        />
        <meta property="title" content="GooGly Bot" />
        <meta property="type" content="website" />
        <meta property="image" content="/logo.png" />
        <meta property="url" content="GooGlyBot.io" />
        <meta
          property="description"
          content=" GooGly Bot is a convenient and efficient way to search for
          information on Telegram. With this bot, you can easily find what
          you're looking for without having to leave the Telegram app."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <Hero />
      {/* <Features /> */}
      {/* <Swap />
      <Staking />
      <Bridge />
      <MarketPlace /> */}
      <Tokenomics />
      <Roadmap />
      {/* <Community /> */}
      {/* <Team /> */}
      <Partners />
      <Footer />
    </div>
  );
}
