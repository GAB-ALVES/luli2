import './Home.scss'

import NavBar from "../../components/NavBar/NavBar"
import Banner from '../../utils/media/imgs/Banner.svg'
import { Moments } from './ Moments/Moments'

import footer from '../../utils/media/imgs/footer.svg'
function Home() {
    return (
        <div className='Home'>
            <NavBar/>
            <img className="Banner" src={Banner} alt="" />
            <Moments/> 
            
            <img src={footer} alt="footer" />
        </div>
    )
}

export {Home}