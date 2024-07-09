import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
     <ul>
      <li><Link to="/matrixpage" className='listyle'>MatrixPage</Link></li>
      <li><Link to="/Login" className='listyle'>Login</Link></li>
      <li><Link to="/Logins" className='listyle'>Logins</Link></li>
     </ul>
    </div>
  );
}

export default App;
