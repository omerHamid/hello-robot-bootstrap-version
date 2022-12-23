import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios'
import Card from './Card'
import Search from './Search'


export default function App() {
  const [robotList, setRobotList] = useState([])
  const [searcher, setSearcher] = useState("")
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setRobotList(res.data.map(item =>{
        return {
                id: item.id,
                name: item.name,
                email: item.email
               }
      }))
    })
    .catch(e => console.log('something went wrong!!' + e))
  }, [])


  const filteredRobots=robotList.filter(item => item.name.toLowerCase().includes(searcher.toLocaleLowerCase()))

  return (
    <div>
      <Search setSearcher={setSearcher}/>
      {
        filteredRobots.length ? <Card filteredRobots={filteredRobots}/> : <h3 style={{textAlign:'center'}}> no robots available :(</h3> 
      }
    </div>
  )
}
