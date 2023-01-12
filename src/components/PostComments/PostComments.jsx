import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Badge } from '@mui/material';
// import createComents from '../../utils/comments';
import parse from 'html-react-parser';



export default function PostComment({ comments }) {
    


    return (
     
        <div>
                    
            <Accordion>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                    <Typography><span style={{ paddingRight: '15px' }}>Комментарии</span><Badge badgeContent={comments?.length} color="primary" /></Typography>

                </AccordionSummary>

                <AccordionDetails>

                    {comments?.map((e, i) => (<div key={i}>
                        {parse(e.text)}
                    </div>))}

                </AccordionDetails>
                
            </Accordion>

        </div>
    );
}