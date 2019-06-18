import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Rajaram Joshi </h2>
                        <img
                            src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
                            alt="AVATAR"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Etiam sodales felis risus, vitae placerat neque venenatis a. Sed eget malesuada nunc. Nulla venenatis nisl in convallis aliquam. Ut id felis et nulla tempor tincidunt at non elit. Nullam pretium diam urna, id mattis urna convallis nec. In est tellus, convallis at sapien molestie, elementum tincidunt quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae volutpat ipsum, quis tempus lectus. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}} >
                                        <i className='fa fa-phone-square' aria-hidden='true'></i>
                                         8959859526
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}} >
                                        <i className='fa fa-fax' aria-hidden='true'></i>
                                         8959859526
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}} >
                                        <i className='fa fa-envelope' aria-hidden='true'></i>
                                         rjoshi.prober@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}} >
                                        <i className='fa fa-skype' aria-hidden='true'></i>
                                         SkypeID
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>


                    </Cell>
                </Grid>

            </div>
        );
    }
}

export default Contacts;