import ReactDOM from 'react-dom/client';
import App from './main/App';
import Header from './main/Header';
import Footer from './main/FOot';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);