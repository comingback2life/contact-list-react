import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
import { fetchUsers } from './helper/apiCall';

function App() {
  const [contacts, setContacts] = useState([]);
  const [user, setUser]=useState([]);
  useEffect(() => {
    fetchUsers().then(data => {
      setContacts(data.results)
      setUser(data.results)
    });
  }, []);

  const handleOnGenderChange = e => {
    const { value } = e.target;
    const params = `?results=12&gender=${value}`;
    fetchUsers(params).then(data => setContacts(data.results));
  };

  const handleOnSearch=e=>{
    const{value}=e.target;
    //filter
    const filterArgs = user.filter(user=>{
      const userName=(user.name.first+" "+user.name.last).toLowerCase();     
      if(userName.includes(value.toLowerCase())){
        return true;
      }
    }
  )
    setContacts(filterArgs);
}
  
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <SearchFilter handleOnGenderChange={handleOnGenderChange} handleOnSearch={handleOnSearch} />

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
