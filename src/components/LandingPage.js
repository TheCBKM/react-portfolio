import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-page-grid">
                    <Cell col={12}>
                        <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
                            alt="AVATAR"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                HTML/CSS | Bootstrap | JavaScript | React | Nodejs | Express
                            </p>
                            <div className="social-links">
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        );
    }
}

export default LandingPage;