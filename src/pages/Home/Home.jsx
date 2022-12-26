import './Home.scss'

import NavBar from "../../components/NavBar/NavBar"
import Banner from '../../utils/media/imgs/Banner.svg'
import { Moments } from './ Moments/Moments'
function Home() {
    return (
        <div className='Home'>
            <NavBar/>
            <img className="Banner" src={Banner} alt="" />
            <Moments/> 
        </div>
    )
}

export {Home}