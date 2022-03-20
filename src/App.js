import './App.css';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        <SearchFilter/>

        <hr/>
        <div className="row">
          <div className="col">55 user Found</div>
          </div>
          <ContactList></ContactList>
        </div>
    </div>
  );
}

export default App;
