import { useEffect, useState } from "react"


const DetailPage2:React.FC = () => {
  
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds')
        const data = await response.json();
        console.log(data);
        setBreeds(data);
      } catch(error) {
        console.log("Error Fetching data : ", error);
      }      
    }
    fetchData();
  }, [])

  
  return(
    <>
      <div>
        <h1>Dog Breeds</h1>
        <ul>
            {
              breeds.map((breed: any) => (
                <li key={breed.id}>
                  <h2>{breed.name}</h2>
                </li>
              ))
            }
        </ul>
      </div>
    </>
  )

}

export default DetailPage2