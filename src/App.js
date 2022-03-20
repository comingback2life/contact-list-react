import './App.css';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        <SearchFilter></SearchFilter>
        </div>
    </div>
  );
}

export default App;
