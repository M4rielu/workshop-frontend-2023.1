import { Grid } from '@mui/material'
import { Container } from "@mui/material"
import CharactersCard from "../../CharactersCard/Characterscard"
import NavBar from "../../navBar"
import axios from 'axios'
import { useEffect, useState } from 'react'

function Personagens (){
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = () => {
        var endpoints = []
        for (var i = 1; i < 100; i++){
            endpoints.push(`https://rickandmortyapi.com/api/character/${i}`)
        }
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setCharacters(res))
        return response
    }

    return (
        <div>
            <NavBar />
            <br/>
            <Container maxWidth='false'>
                <Grid container>
                    {characters.map((character,key) =>( 
                         <Grid item xs={3} key={key}>
                            <br/>
                         <CharactersCard name={character.data.name}/>
                     </Grid>
                    ))}
                </Grid>
            </Container>
        </div>

    )
}
export default Personagens