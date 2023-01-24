import { Pagination } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { React, } from "react";
import { Banner } from '../../components/Banner/banner'
import { PostList } from '../../components/PostList/post-list'



export default function AllPost({ pagePostCount, pageNumber, paginatePage,search }) {


    const displayPaginate = pagePostCount > 2
 

    return (
        <>
{/* { autohorized */}
        {/* ?  */}
        <Stack>

            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: '10px',
                marginTop: '10px',

            }} maxWidth='xl'>
                <Banner />

            </Container>
            <Container sx={{
                display: "flex",
                flexWrap: 'wrap',
                justifyContent: "center",
                padding: '15px',
                mb: '1%',
            }}>

                {displayPaginate 
                    ? <Pagination
                        page={pageNumber}
                        count={pagePostCount} color="primary" onChange={(event, num) =>
                            paginatePage(num)
                        } sx={{
                            background: 'white',
                            borderRadius: '10px'
                        }} />
                    : null
                }

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

                {displayPaginate 
                    ? <Pagination
                        page={pageNumber}
                        count={pagePostCount} color="primary" onChange={(event, num) =>
                            paginatePage(num)
                        } sx={{
                            background: 'white',
                            borderRadius: '10px'
                        }} />
                    : null
                }

            </Container >

        </Stack>
    </>
    )
}
