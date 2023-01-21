import { Accordion, AccordionDetails, AccordionSummary, Badge, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { PostComments } from '../PostComments/PostComments'

export const PostTagList = ({ tags, id }) => {

    // console.log(tags)
    return (
        <>


            <Accordion>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                    <Typography><span style={{ paddingRight: '15px' }}>tags</span><Badge badgeContent={tags?.length} color="primary" /></Typography>

                </AccordionSummary>

                <AccordionDetails>

                    <div >
                        #tags:
                        {
                            tags?.map((e, i) => <div key={i} style={{
                                padding: '5px 5px',
                                margin: '5px',
                                border: '1px solid blue',
                                borderRadius: '10px'
                            }}>{`${i + 1}) ${e}`}</div>)
                        }
                    </div>


                </AccordionDetails>

            </Accordion>

        </>

    )
}
