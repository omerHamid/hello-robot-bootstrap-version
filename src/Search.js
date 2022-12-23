// import {useState} from 'react';

export default function Search({setSearcher}) {

  const handelSearch= (e) => {
    setSearcher(e.target.value)
  }

  return (
    <div>
      <input className="form-control w-50  text-center  sticky-top my-5 mx-auto"
      type="input" placeholder="Search by name" onChange={handelSearch}/>
    </div>
  )
}
