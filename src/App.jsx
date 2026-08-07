import Header from "./components/Header";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import KnowYourRights from "./components/KnowYourRights";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main id="home">
        <Hero />
        <Resources />
        <KnowYourRights />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;
