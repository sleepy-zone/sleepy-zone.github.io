import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ThoughtsList from './thought/Lists';
import { thoughts as data  } from './thought/data';

const App = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="sleepy zone blog, projects ..."
    >
      <div className="app" style={{ background: "#f7f9fc" }}>
        <main className="main-content">
          <ThoughtsList thoughts={data} />
        </main>
      </div>
    </Layout>
  );
};

export default App;
