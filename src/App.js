import { useEffect,useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
import { fetchUsers } from './helper/apiCall';

function App() {
  const [contacts,setContacts]=useState([]); 
  useEffect(()=>{
fetchUsers().then(data=> setContacts(data.results))
  },[])
  console.log(contacts,"Rendering completed");
  return (
    <div className="wrapper">
      <div className="container">
        <Title/>
        <SearchFilter/>

        <hr/>
        <div className="row">
          <div className="col">55 user Found</div>
          </div>
          <ContactList contact={contacts}></ContactList>
        </div>
    </div>
  );
}

export default App;
