import './App.css'
import { Header, Video } from './components/Video'

function App() {
  let products=[{
    id:1,
    title:'ALL-IN-ONE SPEAKER',
    description:'Har jagah chalega' ,
    price:'$40',
  },{
    id:2,
    title:'REFRIGIRATOR',
    description:'Har Cheez Garam Karega' ,
    price:'$400',
  },{
    id:3,
    title:'AC',
    description:'Nahi Pata' ,
    price:'$4000',
  },{
    id:4,
    title:'Washing Machine',
    description:'Nahi Pata Kya karu' ,
    price:'$40000',
  }];
  return (
    <>
      <Header></Header>
      <div className='App'>
        {
        products.map(products=> <Video
        id={products.id}
        title={products.title}
        description={products.description}
        price={products.price}
        ></Video>)
        }
      </div>
    </>
  )
}
export default App