import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
import { fetchUsers } from './helper/apiCall';

function App() {
  const [contacts, setContacts] = useState([]);
  const [displayUser, setDisplayUser]=useState([]);
  useEffect(() => {
    fetchUsers().then(data => setContacts(data.results));
  }, []);

  const handleOnGenderChange = e => {
    const { value } = e.target;
    const params = `?results=12&gender=${value}`;
    fetchUsers(params).then(data => setContacts(data.results));
  };

  const handleOnSearch=e=>{
    const{value}=e.target;
    //filter
    const filterArgs = contacts.filter(user=>{
      const userName=(user.name.first+" "+user.name.last).toLowerCase();     
      if(userName.includes(value.toLowerCase())){
        return true;
      }
    }
  )
    console.log(filterArgs);
}
  
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <SearchFilter handleOnGenderChange={handleOnGenderChange} />

        <hr />
        <div className="row">
          <div className="col">{contacts.length} user Found</div>
        </div>
        <ContactList contact={contacts}></ContactList>
      </div>
    </div>
  );
}

export default App;
