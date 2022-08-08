import React from 'react';
import {Accordion} from 'react-bootstrap';

const News = (props) => {
    const accordionStyle = {color:'#000', width:'500px'};
    const {title, description} = props.article;
    
    return (
        
            
            <Accordion style={accordionStyle} defaultActiveKey="" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                    {description}
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        
    );
};

export default News;