import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./App.module.scss";
import TypingPractice from "./components/TypingPractice";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <TypingPractice />
      <Footer />
    </div>
  );
}

export default App;
