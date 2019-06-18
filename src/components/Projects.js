import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0

        }
    }
    toggelCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div  className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>
                            # 1  React Project
                    </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, , ac auctor augue maximus ac. Duis sit amet porta massa.
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Github</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name='share' />
                            </CardMenu>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>
                            # 1  React Project
                    </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, , ac auctor augue maximus ac. Duis sit amet porta massa.
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Github</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name='share' />
                            </CardMenu>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>
                            # 1  React Project
                    </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, , ac auctor augue maximus ac. Duis sit amet porta massa.
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Github</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name='share' />
                            </CardMenu>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div><h1>Angular</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>Vue</h1></div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>MongoDB</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vue</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggelCategories()}
                            </div>
                        </Cell>
                    </Grid>
               
            </div>
        );
    }
}

export default Projects;