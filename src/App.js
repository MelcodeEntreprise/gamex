import React from 'react';
import { Blog, Community, Event, Experience, Footer, Forum, Home, Navigation } from './components';



function App() {
  return (
    <div className="app">
      <nav className="navigation">
        <Navigation />
      </nav>
      <main>
        <section className="home">
          <Home />
        </section>
        <section className="experience">
          <Experience />
        </section>
        <section className="community">
          <Community />
        </section>
        <section className="event">
          <Event />
        </section>
        <section className="blog">
          <Blog />
        </section>
        <section className="forum">
          <Forum />
        </section>
      </main>
      <footer className="footer">
          <Footer />
      </footer>
    </div>
  );
}

export default App;
