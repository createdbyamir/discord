import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Introduction from './Introduction.jsx'
import './index.scss';
import Features from './Features.jsx';
import { ShieldCheck, Smile, PlugZap, Settings, BarChart3 } from 'lucide-react';
import Dashboard from './Dashboard.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import About from './About.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App() {
  return(
    <>
      <div className="purple">
        <Header/>
        <Introduction/>
      </div>
      <div className="features-section">
        <h1>Why NEXA?</h1>
        <div className="card">
        <Features 
          icon={<ShieldCheck />} 
          name="Secure" 
          description="Keep your community safe with automated moderation tools, customizable filters, and detailed logs." 
        />
        <Features 
          icon={<Smile />} 
          name="Engaging" 
          description="Bring fun and interactivity to your server with games, memes, and social features." 
        />
        <Features 
          icon={<PlugZap />} 
          name="Integrations" 
          description="Easily connect your server to other platforms with seamless integrations." 
        />
        <Features 
          icon={<Settings />} 
          name="Customizable" 
          description="Tailor Nexa to fit your community with flexible, easy-to-use settings." 
        />
        <Features 
          icon={<BarChart3 />} 
          name="Insights" 
          description="Monitor server activity with clear analytics and reports." 
        />
        </div>
      </div>
      
      <Dashboard />
      <About />
      <Footer/>
    </>
  );
}

export default App
