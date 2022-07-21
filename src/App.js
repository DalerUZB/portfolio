import './App.css';
import IntroContainer from './containers/Intro';
import ServisesContainer from './containers/Servises';
import PersonsContainer from './containers/PersonsContainer';
import ContactContainer from './containers/ContactContainer';
import NodFound from './components/NodFound';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Header from './components/Header';


function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="*" element={<NodFound />} />
        <Route path="/" element={<IntroContainer />} />
        <Route path="/services" element={<ServisesContainer />} />
        <Route path="/team" element={<PersonsContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>



    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`
