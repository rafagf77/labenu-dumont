import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

export const MainDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    padding-left: 15px;
    background-color: #0a0617;
`

export const RightDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Link = styled.a `
    margin-left: 40px;
    font-weight: bolder;
    color: white;
    cursor: pointer;
`

export const LinkAdm = styled.a `
    margin-left: 40px;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    border: 1px solid white;
    padding: 5px;
`

export const Title = styled.h1 `
    cursor: pointer;
    color: white;
`