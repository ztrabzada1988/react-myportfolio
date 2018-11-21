import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { AtomSpinner } from 'react-epic-spinners';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout style={{marginTop: '15px'}}>
            <Header title={<Link to="/" style={{ paddingTop: '35px', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', color: 'white', display: 'flex'}}>Zubair Trabzada<AtomSpinner style={{display: 'flex', marginLeft: '20px', marginTop: '-15px'}} color="#2bd49e"/></Link>} scroll>

                <Navigation className="nav-links">
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>

            <Drawer style={{backgroundColor: '#222222'}} title={<Link to="/" style={{ textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', color: 'white'}}>Zubair Trabzada</Link>}>
                <AtomSpinner style={{paddingLeft: '35px'}} color="#2bd49e"/>
                <Navigation>
                    <Link to="/resume" style={{color: 'white'}}>Resume</Link>
                    <Link to="/aboutme" style={{color: 'white'}}>About Me</Link>
                    <Link to="/projects" style={{color: 'white'}}>Projects</Link>
                    <Link to="/contact" style={{color: 'white'}}>Contact</Link>
                  </Navigation>
              </Drawer>

            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
