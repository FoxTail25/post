import { Pagination } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { React,} from "react";
import {Banner} from '../../components/Banner/banner'
import {PostList} from '../../components/PostList/post-list'



export default function AllPost({pagePostCount, pageNumber, paginatePage}) {

    return (

        <Stack>
     
            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: '10px',
                marginTop: '10px',

            }} maxWidth='xl'>
                <Banner/>

            </Container>
            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                padding: '15px',
                mb: '1%',
            }}>

                <Pagination 
                // defaultPage={pageNumber} 
                page={pageNumber}
                count={pagePostCount} color="primary" onChange={(event, num) => 
                paginatePage(num)
            } sx={{
                    background: 'white',
                    borderRadius: '10px'
                }} />

            </Container>
            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: '10px',
                marginTop: '10px',

            }} maxWidth='xl'>

                <PostList />

            </Container>

            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                padding: '15px',
                mb: '10%',
            }}>

            </Container >

        </Stack>
    )
}
