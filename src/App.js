import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
import { fetchUsers } from './helper/apiCall';
import {Spinner} from './components/Spinner'
function App() {
  const [contacts, setContacts] = useState([]);
  const [user, setUser]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    setLoading(true)
    fetchUsers().then(data => {
      setContacts(data.results)
      setUser(data.results)
      setLoading(false);
    });
  }, []);

  const handleOnGenderChange = e => {
    const { value } = e.target;
    setLoading(true)
    const params = `?results=12&gender=${value}`;
    fetchUsers(params).then(data => {
      setUser(data.results)
      setContacts(data.results)
      setLoading(true)
    });
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
          <div className="col text-center">{contacts.length} user Found</div>
        </div>
        {loading && <Spinner/>}
        <ContactList contact={contacts}></ContactList>
      </div>
    </div>
  );
}

export default App;
