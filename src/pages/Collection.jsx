import React, {useState} from 'react'
import Item from '../components/Item'
import { useAppContext } from '../context/AppContext'


const Collection = () => {

  const {products, searchQuery} = useAppContext()
const [category, setCategory] = useState([])
const [type, setType] = useState([])
const [selectedSort, setSelectedSort] = useState("relevant")
const [filteredProducts, setFilteredProducts] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [availableTypes, setAvailableTypes] = useState([])
const itemsPerPage = 8


  return (
    <div>
      <h1>Collection</h1>
      <p>Explore our exclusive collection of curtains.</p>
    </div>
  )
}

export default Collection
