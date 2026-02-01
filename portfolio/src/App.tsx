import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Navbar />

      {/* padding-top so content doesn't hide behind navbar */}
      <main className="pt-16">
        <Section id="home">
          <div className="min-h-screen flex items-center justify-center bg-gray-50 text-4xl">
            Home
          </div>
        </Section>

        <Section id="about">
          <div className="min-h-screen flex items-center justify-center bg-gray-100 text-4xl">
            About
          </div>
        </Section>

        <Section id="projects">
          <div className="min-h-screen flex items-center justify-center bg-gray-200 text-4xl">
            Projects
          </div>
        </Section>

        <Section id="contact">
          <div className="min-h-screen flex items-center justify-center bg-gray-300 text-4xl">
            Contact
          </div>
        </Section>
      </main>
    </>
  );
}

export default App;
