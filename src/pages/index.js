import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import Profile from './home/Profile';
import Projects from './home/Projects';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="sleepy zone blog, projects ..."
    >
      <div className="app">
        <Profile />
        <Projects />
      </div>
    </Layout>
  );
}
