import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import Hero from './home/Hero';
import Portfolio from './home/Portfolio';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="sleepy zone blog, projects ...">
      <div className="app">
        <div className="creative-background"></div>
        <main>
          <Hero />
          <Portfolio />
        </main>
      </div>
    </Layout>
  );
}
