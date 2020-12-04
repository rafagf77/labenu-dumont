import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToFeedPage, goToSignUpPage } from '../../router/Coordinator'
import { NavBar, Options, Hello, Title, ButtonStyled, TitleContainer, TitleColor, SearchContainer } from './styles'
import { AppBar, TextField, IconButton, Grid } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const logout = () => {
        if(window.confirm("Deseja sair da área de acesso ao usuário?")){
            localStorage.removeItem("token")
            goToLoginPage(history)
        }
    }

    return (
        <AppBar color="inherit" position="fixed">
            <NavBar>
                <TitleContainer onClick={()=> goToFeedPage(history)}>
                    <Title variant="h3">labedd</Title>
                    <TitleColor variant="h3">i</TitleColor>
                    <Title variant="h3">t</Title>
                </TitleContainer>
                <SearchContainer>
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Busca" />
                    </Grid>
                    </Grid>
                </SearchContainer>
                {token ?
                    <Options>
                        <Hello color="primary">Olá {username}!</Hello>
                        <ButtonStyled color="primary" variant="outlined" onClick={logout}>Sair</ButtonStyled>
                    </Options>
                :
                    <Options>
                        <ButtonStyled color="primary" variant="outlined" onClick={()=> goToLoginPage(history)}>Entrar</ButtonStyled>
                        <ButtonStyled color="primary" variant="contained" onClick={()=> goToSignUpPage(history)}>Cadastrar</ButtonStyled>
                    </Options>
                }            
            </NavBar>
        </AppBar>

    )
}

export default Header