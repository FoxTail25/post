import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Badge } from '@mui/material';
import createComents from '../../utils/comments';
import { AutorComment } from '../autorComment/autorComment';
import parse from 'html-react-parser'



export default function PostComment({ comments }) {
    
    const [author, setAuthor] = useState([])


    useEffect(() => { setAuthor(createComents(comments)) }, [comments])

    let a = [...author]
    console.log(a)
    // console.log(comments)

    return (
        // null
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