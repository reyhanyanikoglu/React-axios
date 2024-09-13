import './App.css'
import SearchHeader from './components/SearchHeader'
import searchImages from './api.js'
import { useState } from 'react'
import ImageList from './components/ImageList.jsx'
 
function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => { //child componente girilen değer parenta geliyor
    const result = await searchImages(term)
    setImages(result) // backendden gelenler bu array içerisine girecek
  }

  return (
    <div className='App'> 
      <SearchHeader search={handleSubmit}/> {/* search tetiklendiğinde handleSubmit fonks. gidiyor */}
      <ImageList imagesPlaceholder={images}/> {/*arrayin döndüğü objeler props olarak image list e yollanıyor*/}
    </div>
  )
}

export default App
