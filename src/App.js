import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import './App.css';

function App() {

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [age, setAge] = useState()
  const [statu, setStatu] = useState('')
  const [items, setItems] = useState([])

  function addItem () {

    if(!nom || !prenom || !age){
      alert('Veuillez entrer une valeur!')
    }

    const item = {
      id: Math.floor(Math.random * 1000),
      prenom: prenom,
      nom: nom,
      age: age,
      statu: statu,
      barre: false
    }

    setItems(update => [...update, item])
    setPrenom('')
    setNom('')
    setAge('')
    setStatu('')

  }

  // function Barré(){
    const infoBarre = (id) => {
      console.log("barré")
      setItems((update) =>
        update.map((item) =>
          item.id === id ? { ...item, barre: !item.barre } : item
        )
      );
    };
  // }

  return (
    <div className='w-75 mx-auto'>
      <h1 className='text-center'>Todo list React JS</h1>
      <form>
        <div className="mb-3">
        <div className='mt-2'>
            <label htmlFor="prenom" className="form-label">Prenom</label>
            <input 
              type="text" 
              className="form-control" 
              id="prenom" 
              value={prenom} onChange={(e) => {
                setPrenom(e.target.value)
                console.log(e.target.value)
                }} 
            />
          </div> 
          <div className='mt-2'>
            <label htmlFor="nom" className="form-label">Nom</label>
            <input 
              type="text" 
              className="form-control" 
              id="nom" 
              value={nom} onChange={(e) => {
                setNom(e.target.value)
                console.log(e.target.value)
                }} 
            />
          </div>  
          <div className='mt-2'>
            <label htmlFor="age" className="form-label">Age</label>
            <input 
              type="number" 
              className="form-control" 
              id="age" 
              value={age} onChange={(e) => {
                setAge(e.target.value)
                console.log(e.target.value)
                }} 
            />
          </div> 

          <div className="mt-2 form-check ps-0">
            <label className="form-check-label" htmlFor="statu">
                Statu
            </label>
            <select className="form-select" aria-label="Default select example" onChange={(e) => {
                  setStatu(e.target.value)
                  console.log(e.target)
                  }}>
              <option selected>En cours</option>
              <option value={statu}>Terminer</option>
            </select>
          </div>  

          <button type='button'
            className="btn btn-primary mt-3 w-100"
            onClick={() => addItem()}
          >Submit</button>
        </div>
      </form>

      <div className='w-100 mx-auto'>
      <table className='w-100'>
          <tr><td>Prenom</td><td>Nom</td><td>Age</td><td>Actions</td></tr>
          {items.map((item) => (
            <tr
              key={item.id}
              className={item.barre ? 
                'alert alert-success barre' : 
                'alert alert-success'} 
            >
              <td className='w-25'>{item.prenom}</td>
              <td className='w-25'>{item.nom}</td>
              <td className='w-25'>{item.age}</td>
              <td className='w-25'>
                <button className='btn btn-success me-1' onClick={() => infoBarre(item.id)}> Ter</button>
                <button className='btn btn-danger'> EnC </button>
              </td>
            </tr>
          ))}
      </table>  
      </div>
    </div>  
  )
}

export default App;