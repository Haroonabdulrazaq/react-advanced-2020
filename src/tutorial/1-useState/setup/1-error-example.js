import React, {useState} from 'react';

const ErrorExample = () => {
  const data = [
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
      id: 5,
      name: "Lola Gardner",
      age: 29,
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    }
    
  ];

  let [people, setPeople] = useState(data)

  const clearAll=()=>{
    setPeople([])
  }
   
  return (
   
    <React.Fragment >
      <h2>5  Bithdays Today</h2>
      <button className="btn" onClick={clearAll}>Clear all</button>
      <section style={{width: "100vw", height: "100vh"}}> 
        {people.map((person, index)=>{
          return <div style={{display: "flex", flexDirection:"row", padding:"2rem"}}>
            <img  src= {person.image}  alt={person.name} style ={{width:100, height: 100, borderRadius:"50%"}}/>
            <div style={{margin:"2rem"}}>
              <h3>{person.name}</h3>
              <p>{`${person.age} years`}</p>
            </div>
          </div>} )}
      </section>
     
     
  </React.Fragment>
  )
};

export default ErrorExample;
