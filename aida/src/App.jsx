import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import TargetAudience from '@components/TargetAudience/TargetAudience';
import Subjects from '@components/Subjects/Subjects';
import Benefits from '@components/Benefits/Benefits';
import Program from '@components/Program/Program';

import styles from './App.module.scss'
function App() {

  return (
    <>
      <div className={styles.App}>
        <Header />
        <Banner />
        <TargetAudience />
        <Subjects />
        <Benefits />
        <Program />
      </div>
      <Footer />
    </>
  )
}

export default App
