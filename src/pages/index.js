import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import HeroSection from './home/HeroSection';
import RecentPosts from './home/RecentPosts';
import WorksSection from './home/WorksSection';
import Newsletter from './home/Newsletter';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="sleepy zone blog, projects ..."
    >
      <div className="app">
        <div className="home-page">
          <HeroSection />
          <RecentPosts />
          <WorksSection />
          <Newsletter />
        </div>
      </div>
    </Layout>
  );
}
