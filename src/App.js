import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Profile from './components/profile'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Curricular from './components/curricular'
import Software from './components/software'
import Reference from './components/reference'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonGroup,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

function App() {
  return (
    <Container sx = {{alignItems: 'flex-start'}} maxWidth="xl">
    <div className="App">
        <Header></Header>
        <Profile></Profile>
        <Experience></Experience>
        <Education></Education>
        <Skills></Skills>
        <Curricular></Curricular>
        <Software></Software>
        <Reference></Reference>
    </div></Container>
  );
}

export default App;
