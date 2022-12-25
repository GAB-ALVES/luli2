import React from "react";
import './Ask.scss'

import Swal
  from "sweetalert2";

// MUI
import {
ButtonGroup,
Button
} from '@mui/material';

export default function Ask() {

    function yes() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Parabéns!!',
            html: 'Você acaba de fazer uma <b>péssima</b> escolha.',
            showConfirmButton: false,
            timer: 5000
          })
    }
    return (
        <div className="Ask Challenge">
            <h1> <span className="sublime">Quer na</span>morar comigo ?</h1>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color='success' onClick={yes}>Sim</Button>
                <Button color='error' onClick={yes}>Sim<span className='small'>(so que vermelho)</span></Button>
            </ButtonGroup>
        </div>
    )
}