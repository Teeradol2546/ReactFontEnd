import Hello from './assets/Hello'
import Contact from './assets/contact'
import Counter from './assets/counter'


function App() {
  const hellodata = [
    {name : 'Teeradol' , message : 'Hi world'},
    {name : 'Srivaree' , message : 'Hi world'}
  ]
  return (
      <div>
        <Counter/>
        {hellodata.map((data , index) => (
          <Hello key = {index} name = {data.name} message = {data.message}/>
        ))}

        <Contact email = 'Teeradol@gmail.com' phone = '0999999999'/>
      </div>

  )
}

export default App
