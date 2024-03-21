import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container" style={{ padding: '0 40px' }}>
        <Heading as="h1" className="hero__title" style={{ marginLeft: '8%' }}>
          <span className={styles.headingSpan}>Hey,</span>
          <span className={styles.headingSpan}>I'm SleepyZone 😴</span>
        </Heading>
        <p className="hero__subtitle" style={{ marginLeft: '33%', marginRight: '8%', fontSize: 48, fontWeight: 'bold' }}>
          - A 30+、LowLevel P😅 frontend developer from China🇨🇳
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="sleepy zone blog, projects ...">
      <HomepageHeader />
      <main>
        
      </main>
    </Layout>
  );
}
