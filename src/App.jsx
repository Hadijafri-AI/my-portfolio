import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoMarquee from './components/LogoMarquee'
import Features from './components/Features'
import OuterLoop from './components/OuterLoop'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import QuoteSection from './components/QuoteSection';
import CommunitySection from './components/CommunitySection';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-main">
        <Hero />

        <Features />
        <OuterLoop />
        <QuoteSection />
        <CommunitySection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
