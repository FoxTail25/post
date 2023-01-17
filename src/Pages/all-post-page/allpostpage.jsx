import { Pagination } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { React, useContext, } from "react";
import { Banner } from '../../components/Banner/banner'
import { allUserData } from "../../components/context/context";
import { PostList } from '../../components/PostList/post-list'



export default function AllPost({ pagePostCount, pageNumber, paginatePage }) {

    // const { autorozation:autohorized } = useContext({ ...allUserData })

    const displayPaginate = pagePostCount > 1

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
                        // defaultPage={pageNumber} 
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
                        // defaultPage={pageNumber} 
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
        {/* : null */}
    {/* } */}
    </>
    )
}
