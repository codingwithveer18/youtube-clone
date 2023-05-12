import './App.css'
import { Header, Video, Footer } from './components/Video'
import products from './data/data'
function App() {
  return (
    <>
      <Header></Header>
      <div className='App'>
        <div className='head'>EXPLORE THE TOP LISTED PRODUCTS</div>
        {
          products.map(products=> <Video
            key={products.id}
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