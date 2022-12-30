import { Grid, Typography } from "@mui/material"

import { SectionBackground } from "../../../components/SectionBackground/SectionBackground"
import { CardComponent } from "../../../components/CardComponent/CardComponent"

import bg1 from '../../../utils/media/imgs/Vector8.svg'
import bg2 from '../../../utils/media/imgs/Vector6.svg'

function Timeline() {
    return (
        <>
            <SectionBackground bgImg={bg1} side='left'>
                <Typography variant='h2' marginBottom='30px'>
                    Timeline
                </Typography>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography fontSize={40}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} display='flex' justifyContent='center'>
                        <CardComponent/>
                    </Grid>

                </Grid>
                
            </SectionBackground>
            <SectionBackground bgImg={bg2} side='right'>
                <Grid container>
                    <Grid item xs={4} display='flex' justifyContent='center'>
                        <CardComponent/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography fontSize={40}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>

                </Grid>
                
            </SectionBackground>
        </>
    )   
}

export {Timeline}