import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import search from '/assets/images/icon-search.svg'
import logo from '/assets/images/logo.svg'
import Dropdown from './components/Dropdown'
import moon from '/assets/images/icon-moon.svg'
// import darkmode from './components/Darkmode'

function App() {
  const [value, setValue] = useState('')
  const [word, setWord] = useState('')
  const [phonetic, setPhonetic] = useState('')
  const [data, setData] = useState('')
  const [check, setCheck] = useState(false)

  if (check == true) {
    document.querySelector('body').style.backgroundColor = '#050505'
    document.querySelector('body').style.color = '#fff'

  }
  else {
    document.querySelector('body').style.backgroundColor = '#fff'
    document.querySelector('body').style.color = '#000'
  }

  const Api = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/` + value)
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='max-md:p-6 md:px-10 md:py-14 md:w-[750px] max-md:w-full relative'>
      <header className='flex justify-between w-full pb-6'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className='flex items-center'>
          <Dropdown check={check} />
          <span className='h-8 w-[2px] bg-[#E9E9E9] mx-6'></span>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" onClick={() => setCheck(!check)} />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"><img src={moon} alt="" /></span>
            </label>

          </div>
        </div>
      </header>
      <form className='w-full' onSubmit={Api}>
        <div className={check == false ? 'bg-[#F4F4F4] input-div w-full flex rounded-2xl' : 'bg-[#1F1F1F] input-div w-full flex rounded-2xl'}>
          <input className='bg-transparent w-[87%] md:w-[93%] outline-none py-3 px-6 ' onChange={(e) => setValue(e.target.value)} type="text" />
          <button type='submit' onClick={() => setWord(value)} className='btn'><img src={search} alt="" /></button>

        </div>
        <div>
          <h1>{word}</h1>
          <p>{phonetic}</p>
        </div>
      </form>
    </div>
  )
}

export default App
