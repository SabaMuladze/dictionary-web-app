import { useState } from 'react'
import arrow from '/assets/images/icon-arrow-down.svg'


const Dropdown = ({ check }) => {
    const [selected, setSelected] = useState('Sans-Serif')
    const [change, setChange] = useState(false)
    const [selectClass, setSelectClass] = useState('menu opacity-0 pointer-events-none h-0')


    const changeFunc = () => {
        setChange(!change)
        if (change == true) {
            if (check == false) {
                setSelectClass('menu opacity-1 pointer-events-auto transition-all shadow-md rounded-2xl p-6  w-[180px] absolute right-40 bg-white')
            }
            else {
                setSelectClass('menu opacity-1 pointer-events-auto transition-all shadow-md rounded-2xl p-6  w-[180px] absolute right-40 bg-[#1F1F1F]')
            }
        }
        else {
            setSelectClass('menu opacity-0 pointer-events-none h-0')
        }

    }
    document.querySelector('body').style.fontFamily = selected.toLowerCase()

    if (selected == 'Mono') {
        document.querySelector('body').style.fontFamily = 'Roboto Mono', ' monospace'

    }

    return (
        <div>
            <div className="dropdown flex relative z-10">
                <div className='select flex'>
                    <span onClick={changeFunc} className={`selected pr-2 cursor-pointer bg-transparent z-10 rig` + ` ` + `font-${selected.toLowerCase()}`}>{selected}</span>
                    <div className="caret flex items-center z-0"><img src={arrow} alt="" /></div>
                </div>
            </div>
            <ul className={selectClass}>
                <li className='cursor-pointer font-semibold hover:text-[#A445ED] font-[sans-serif]' onClick={(e) => setSelected(e.target.textContent)}>Sans-Serif</li>
                <li className='cursor-pointer font-semibold hover:text-[#A445ED]  font-[serif]' onClick={(e) => setSelected(e.target.textContent)}>Serif</li>
                <li className='cursor-pointer font-semibold hover:text-[#A445ED] font-mono' onClick={(e) => setSelected(e.target.textContent)}>Mono</li>
            </ul>
        </div>
    )
}

export default Dropdown