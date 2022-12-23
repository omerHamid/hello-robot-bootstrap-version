
export default function Card({filteredRobots}) {  
    return (
      <div className='container'>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3 text-center">
          {
            filteredRobots.map(item => 
              <li key={item.id}>
                {/* <div container-fluid> */}
                  <div className="col">
                    <div className="card" >
                      <img src={'https://robohash.org/'+item.id} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title text-danger-sm">{item.name}</h5>
                        <p className="card-text">{item.email}</p>
                      </div>
                    </div>
                {/* </div> */}
                </div>
              </li>
            )
          }
        </ul> 
      </div>
    )
  }
  
  
  