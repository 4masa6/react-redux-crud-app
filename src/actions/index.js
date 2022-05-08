export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// actionを返す関数を、action createrという
export const increment = () => {
    // increment側のaction
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    // decrement側のaction
    return {
        type: DECREMENT
    }
}