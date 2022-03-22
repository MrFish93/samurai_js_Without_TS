export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';

/*let initialState = {
    users: [],
}*/
let initialState = {
    users: [
        {id: 1, url: 'https://clck.ru/eBYYe', followed: true, name: 'Dima P.', status: 'Im boss', location: {city: 'Tbilisi', country: 'Georgia'}},
        {id: 2, url: 'https://clck.ru/eBYYe', followed: true, name: 'Sasha R.', status: 'im princess', location: {city: 'Voronezh', country: 'Russia'}},
        {id: 3, url: 'https://clck.ru/eBYYe', followed: false, name: 'Vova K.', status: 'Im loser', location: {city: 'Limasol', country: 'Kipr'}},
        {id: 4, url: 'https://clck.ru/eBYYe', followed: true, name: 'Vlad O.', status: 'You\'re dont understand', location: {city: 'Berlin', country: 'Germany'}},
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: true } : u )}
        case UNFOLLOW:
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: false } : u )}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUserAC = (users) => ({type: SET_USERS, users});