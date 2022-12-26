import './Moments.scss'
import { Typography } from "@mui/material"
import testeImg from '../../../utils/media/imgs/penguin.jpeg'
import { CardComponent } from '../../../components/CardComponent/CardComponent'

function Moments() {

    const Card = (imgSrc) => {
        return (
            <CardComponent imgSrc={imgSrc} />
        )
    } 

    return (
        <div className='Moments'>
            <Typography variant='h2' marginBottom='30px'>
                Moments
            </Typography>
            <div className="Galery">
            {Card(testeImg)}
            {Card(testeImg)}
            {Card(testeImg)}
            {Card(testeImg)}
            {Card(testeImg)}
            {Card(testeImg)}
            {Card(testeImg)}
            {Card(testeImg)}

            </div>
        </div>
    )
}

export {Moments}