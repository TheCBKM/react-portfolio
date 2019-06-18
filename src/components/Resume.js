import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className='resume-left-col' col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt='avatar'
                                style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Rajaram Joshi</h2>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <p>Etiam sodales felis risus, vitae placerat neque venenatis a. Sed eget malesuada nunc. Nulla venenatis nisl in convallis aliquam. Ut id felis et nulla tempor tincidunt at non elit. Nullam pretium diam urna, id mattis urna convallis nec. In est tellus, convallis at sapien molestie, elementum tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae volutpat ipsum, quis tempus lectus. </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Address</h5>
                        <p>9,Evershine Colony, Bicholi mardana,Indore M.P. </p>
                        <h5>Phone</h5>
                        <p>8959859526 </p>
                        <h5>Email</h5>
                        <p>rjoshi.prober@gmail.com </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>

                    </Cell>

                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2001}
                            endYear={2018}
                            schoolName={'St. Paul'}
                            schoolDesc={'Etiam sodales felis risus, vitae placerat neque venenatis a.  convallis aliquam. Ut id felis et nulla tempor tincidunt at non elit. Nullam pretium diam urna, id mattis urna convallis nec. In est tellus, convallis at sapien molestie, elementum tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae volutpat ipsum, quis tempus lectus.'
                            }></Education>
                        <Education
                            startYear={2018}
                            endYear={2022}
                            schoolName={'Medi-Caps University'}
                            schoolDesc={'Etiam sodales felis risus, vitae placerat neque venenatis a.  convallis aliquam. Ut id felis et nulla tempor tincidunt at non elit. Nullam pretium diam urna, id mattis urna convallis nec. In est tellus, convallis at sapien molestie, elementum tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae volutpat ipsum, quis tempus lectus.'
                            }></Education>
                        <hr style={{ borderTop: '3px solid #e22947' }}></hr>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName={'first Job'}
                            jobDesc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'}></Experience>
                             <hr style={{borderTop:'3px solid #e22947'}}></hr>
                        <h2>Skills</h2>
                        <Skills
                        skill={'JavaScript'}
                        progress={90}
                        />
                        <Skills
                        skill={'HTML/CSS'}
                        progress={70}
                        />
                        <Skills
                        skill={'Node.js'}
                        progress={60}
                        />
                        <Skills
                        skill={'React'}
                        progress={25}
                        />
                        <Skills
                        skill={'MongoDB'}
                        progress={40}
                        />
                    </Cell>
                </Grid>
            </div >
        );
    }
}

export default Resume;