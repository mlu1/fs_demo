import AuthneticationPortal from './components/authentication-portal/auth';
import CryptoSearch from './components/cryptocurreny-search/crypto';
import Pizza from './components/pizza-counter/Pizza';

function App() {
  return (
    <div>
      <Pizza/>
      <AuthneticationPortal/>
      <CryptoSearch/>
    </div>
  );
}

export default App;
