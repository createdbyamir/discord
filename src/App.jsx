import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Introduction from './Introduction.jsx'
import './index.scss';

function App() {
  return(
    <>
      <div className="purple">
        <Header/>
        <Introduction/>
      </div>
      <Footer/>
    </>
  );
}

export default App
