import './Moments.scss'
import { CardActionArea, Typography } from "@mui/material"
import testeImg from '../../../utils/media/imgs/penguin.jpeg'

function Moments() {

    const Card = (imgSrc) => {
        return (
            <div className="Image">
                    <CardActionArea style={{width: '100%', height: '100%'}}>
                        <img src={imgSrc} alt="someImg"/>
                    </CardActionArea>
            </div>
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