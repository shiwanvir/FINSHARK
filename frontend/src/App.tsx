
import { ChangeEvent, useState } from 'react';
import { searchCompanies } from './api';
import './App.css';
import { CompanySearch } from './company';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
function App() {
  const [search, setSearch] = useState <string>("")
  const [searchResult,setSearchResult] = useState <CompanySearch[]>([])
  const [serverError,setServerError]=useState<String>("")
  const handleEvent = (e:ChangeEvent<HTMLInputElement>) :void => {
    setSearch(e.target.value);
  }

  const onClick = async (e:React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    console.log("Log clicked...");
   const result =  await searchCompanies(search);
   if(result){
   if(typeof result == "string"){
    setServerError(result)
   }
   else if(Array.isArray(result?.data)){
    setSearchResult(result.data);
  }
  }
  else{
    setServerError("No responsse received from the server")
  }
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleEvent={handleEvent} />
      {serverError && <h1>{serverError}</h1>}
      <CardList/>
    </div>
  );
}

export default App;
