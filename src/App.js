import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
     <ul>
      <li><Link to="/matrixpage" className='listyle'>MatrixPage</Link></li>
     </ul>
    </div>
  );
}

export default App;
