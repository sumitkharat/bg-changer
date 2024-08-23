import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ background: Color }}>
        <div className=' flex bottom-12 fixed flex-wrap justify-center inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-2 py-3 bg-white rounded-3xl'>
            <button style={{ background: 'red' }} className=' outline-slate-950  px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('red')}>
              Red
            </button>

            <button style={{ background: 'green' }} className=' outline-slate-950  px-4 py-1 rounded-full shadow-lg text-black' onClick={() => setColor('blue')}>
              Blue
            </button>
          </div>

        </div>


      </div>

    </>
  )
}

export default App
