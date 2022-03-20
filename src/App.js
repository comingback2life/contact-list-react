import { useEffect,useState } from 'react';
import './App.css';
import { ContactCard } from './components/ContactCard';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';

function App() {
  const [contacts,setContacts]=useState([]); 
  useEffect(()=>{
  
  },[])
  console.log("Rendering completed");
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
          <ContactCard></ContactCard>
        </div>
    </div>
  );
}

export default App;
