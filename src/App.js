import React from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl'

import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration:'none',color : 'white'}} to='/'>CBKM</Link>} scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/contacts'>Contacts</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration:'none',color : 'black'}} to='/'>CBKM</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/contacts'>Contacts</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main></Main>
          </Content>
        </Layout>
      </div>

    </div>
  );
}

export default App;
