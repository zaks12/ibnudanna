import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useRoute } from '@/lib/router';
import { applySeo } from '@/lib/seo';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Projects from '@/pages/Projects';
import Approach from '@/pages/Approach';
import Contact from '@/pages/Contact';

function App() {
  const [currentPath, navigate] = useRoute();

  useEffect(() => {
    applySeo(currentPath);
  }, [currentPath]);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home navigate={navigate} />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/projects':
        return <Projects />;
      case '/approach':
        return <Approach />;
      case '/contact':
        return <Contact />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Header />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
