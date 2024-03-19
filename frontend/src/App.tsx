
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { searchCompanies } from './api';
import './App.css';
import { CompanySearch } from './company';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
function App() {
  const [search, setSearch] = useState <string>("")
  const [searchResult,setSearchResult] = useState <CompanySearch[]>([])
  const [serverError,setServerError]=useState<String>("")
  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) :void => {
    setSearch(e.target.value);
  }

  const onSearchSubmit = async (e:SyntheticEvent) => {

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
  const onPortfolioCreate = (e:SyntheticEvent)=>{
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate}/>
    </div>
  );
}

export default App;
