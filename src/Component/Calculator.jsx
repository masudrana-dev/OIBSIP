import { useEffect, useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [value, setValue] = useState(localStorage.getItem("values") ?
        JSON.parse(localStorage.getItem("values")) : [])

    useEffect(() => {
        localStorage.setItem("values", JSON.stringify(value));
    }, [value])

    return (
        <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <div className='p-20 rounded-md bg-white'>
                <form action="" >
                    <div className='display'>
                        <input type="text" value={value} />
                    </div>
                    <div>
                        <input type="button" value='AC' onClick={e => setValue(" ")} />
                        <input type="button" value='DE' onClick={e => setValue(value.slice(0, -1))} />
                        <input type="button" value='.' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='/' onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value='7' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='8' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='9' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='*' onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value='4' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='5' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='6' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='+' onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value='1' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='2' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='3' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='-' onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value='00' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='0' onClick={e => setValue(value + e.target.value)} />
                        <input type="button" value='=' className='w-[123px]'
                            onClick={e => setValue(eval(value))} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Calculator