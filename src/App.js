// import logo from './logo.svg';
import "./App.css";
import React, { useState,useEffect } from "react";
import CardList from "./component/card_list/card-list.component";
import SearchBox from "./component/search_box/search_box.component"

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters]=useState(monsters)
  console.log(searchField)
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString)
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {setMonsters(users)});
  },[])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newfilteredMonsters)
  },[monsters,searchField])
  return (
    <div className="App">
        <SearchBox className="search-box" placeholder="search monsters" onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters }  />
      </div>
  )
}



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField:""
//     };
//   }

//   componentDidMount() {
    // 
//   }

   
//   }
//   render() {

//     console.log("render");
//     const { monsters, searchField } = this.state
//     const {onSearchChange}=this

    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchField);
    // });

    
//     return (
      
//     );
//   }
// }

export default App;
