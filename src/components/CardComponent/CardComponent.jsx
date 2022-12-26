import './CardComponent.scss'
import { CardActionArea } from '@mui/material'

function CardComponent({imgSrc}) {
    return (
        <div className="CardComponent">
                <CardActionArea style={{width: '100%', height: '100%'}}>
                    <img src={imgSrc} alt="someImg"/>
                </CardActionArea>
            </div>
    )
}

export {CardComponent}