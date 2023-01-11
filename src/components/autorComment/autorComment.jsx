import React from 'react'

export const AutorComment = ({ author }) => {

    console.log(author)

    return (

        <div>
            {author?.map((e) => <div>{e.name}</div>)}
        </div>
        
    )

}
