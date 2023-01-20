export const likeIsHer = (likesArr, userDataid) => {
    return likesArr.some(e => e === userDataid)
}