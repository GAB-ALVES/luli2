import './Home.scss'

import NavBar from "../../components/NavBar/NavBar"
import Banner from '../../utils/media/imgs/Banner.svg'
function Home() {
    return (
        <div className='Home'>
            <NavBar/>
            <img className="Banner" src={Banner} alt="" />
            hello word!!!!
        </div>
    )
}

export {Home}