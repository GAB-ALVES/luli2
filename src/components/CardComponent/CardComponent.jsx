import './CardComponent.scss'
import { CardActionArea } from '@mui/material'

import penguin from '../../utils/media/imgs/penguin.jpeg'

function CardComponent({imgSrc}) {
    return (
        <div className="CardComponent">
                <CardActionArea style={{width: '100%', height: '100%'}}>
                    <img src={imgSrc ? imgSrc : penguin} alt="someImg"/>
                </CardActionArea>
            </div>
    )
}

export {CardComponent}