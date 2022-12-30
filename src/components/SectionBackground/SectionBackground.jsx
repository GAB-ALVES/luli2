import './SectionBackground.scss'

function SectionBackground(props) {
    return (
        <div className='SectionBackground Section'>
            {props.children}
            {props.bgImg ? 
                <img src={props.bgImg} alt="" style={props.side == 'left' ? {left: '-25%'} : {right: '-10%'}}/>:
                <></>
            }
        </div>
    )
}

export {SectionBackground}