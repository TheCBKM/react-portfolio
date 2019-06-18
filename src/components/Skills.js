import React, { Component } from 'react';
import { Grid, Cell,ProgressBar } from 'react-mdl';
class Skills extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell coll={12}>
                        <div style={{display:'flex'}}>{this.props.skill}
                        <ProgressBar style={{margin:'10px',width:'100%'}} progress={this.props.progress } />
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Skills;