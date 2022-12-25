import React, {useState} from "react";
import './Challenge.scss';

// media
import morse from '../../../utils/media/morse.wav';

import Swal
  from "sweetalert2";

// MUI
import {
TextField,
Button
} from '@mui/material';

export default function Challenge({setAsk, setLevel3}) {

    const [key, setKey] = useState('');
    const [count, setCount] = useState(1);
    const [levelIndx, setLevelIndx] = useState(0);


    const levelKeyword = ['rubik', 'não como bosta apenas cheiro'];
    function submit() {
        console.log(key);
        if (key !== levelKeyword[levelIndx]) {
            if (levelIndx === 1 && count > 3) {
                Swal.fire({
                    icon: 'info',
                    title: 'Dica: ',
                    html: `<p><b>Camaleão</b> -> <span style='color: #e5f4f8'>camaleão</span></p>`,
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Você errou pela ${count}º vez!!`,
                })
            }
            setCount(count + 1);
        } else {
            const lastLevel = levelIndx+1 === levelKeyword.length;
            if (lastLevel) {
                setAsk(1);
            } else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Parabéns!!',
                    showConfirmButton: false,
                    timer: 2500
                  })
                setKey('');
                setLevelIndx(levelIndx + 1);
                setLevel3(true);
            }
        }   
    }
    return (
        <div className="Challenge">
            <h1>Level {levelIndx + 2}</h1>
            <h1> <span className="sublime">Insi</span>ra a chave</h1>
            <TextField
                id="standard-basic"
                label="Chave"
                variant="standard"
                sx={{width: '50%'}}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' ? submit() : null} />
            <Button
                variant="contained"
                onClick={submit}>Enviar !</Button>
            {
                levelIndx === 0 ?
                    <audio controls>
                        <source src={morse} type="audio/wav"/>
                        Your browser does not support the audio element.
                    </audio> :
                    <></>
            }
        </div>
    )
}