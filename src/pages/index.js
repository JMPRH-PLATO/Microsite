import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title="Overview" description={siteConfig.tagline} wrapperClassName={styles.page}>
      <main className={styles.hero}>
        <div className={styles.text}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>

          <div className={styles.description}>
            <p>
              A experimental validation and implementation system to control a line with several selfdriven vehicles
            </p>
            <p className={styles.muted}>
              This site gathers the project's milestones, schedule, team and working
              notes for the team and supervisors.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
