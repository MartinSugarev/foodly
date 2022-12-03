import React, {useEffect, useState} from 'react';
import './mainLayout.css';
import { ReceiptContainer } from '../ReceiptContainer/ReceiptContainer'
import {dataSea, dataItalian} from '../../mockedData';
import {useDebounce} from '../../debouncer'
import {LoadingBar} from '../LoadingBar/LoadingBar';
import {EmptyContainer} from '../EmptyContainer/EmptyContainer'


export const mainLayout = (Component) => () => {

    const [inputValue, setInputValue] = useState('');
    const [foundData, setFoundData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const debouncedValue = useDebounce(inputValue, 1000, setIsLoading);

   useEffect(() => {
      let returnedData  
      
      setFoundData(() => [...dataSea, ...dataItalian].filter(data => {
          if(data.name.includes(debouncedValue)){
              returnedData = data.name
            }
            
            setIsLoading(() => false)
            return returnedData 
        }))
              
        
   }, [debouncedValue])

   useEffect(() => {
       
    setIsLoading(() => true)
        
   }, [inputValue])
   

   const handleInputChange = (e) => {
       setInputValue(() => e.target.value)
   }

   const clearInput = () => {
       setInputValue('')
   }

    return (
        <div className="main-layout">
          <header>
              <div className="img-container">
                  <img src="Vector.svg" alt="vector-img" />
                  <img src="FOODLY.svg" alt="foodly-text"/>
              </div>
              <div className="input-container">
                     <img src="icon-search.svg" alt="search-icon"/> 
                  <form>
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                  </form>
              </div>
          </header>
          <main >
              { inputValue.length === 0 ? <Component /> : (inputValue.length !== 0 && isLoading === true) ? <LoadingBar /> : foundData.length !== 0 ? <ReceiptContainer title="here's what we found" picture={'🔍'} data={foundData} />  : <EmptyContainer clearInput={clearInput} search={inputValue} /> }
          </main>
        </div>
    )
} 