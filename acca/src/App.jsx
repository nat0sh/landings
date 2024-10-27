import styles from './App.module.scss'

import Banner from "@components/Banner/Banner"
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import Program from "@components/Program/Program"
import Benefits from "@components/Benefits/Benefits"
import Subjects from "@components/Subjects/Subjects"

function App() {
  return (
    <>
      <div className={styles.App}>
        <Header />
        <Banner />
        <Program />
        <Benefits />
        <Subjects />
      </div>
      <Footer />
    </>
  )
}

export default App
