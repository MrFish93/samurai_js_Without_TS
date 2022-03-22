import {followAC, unFollowAC, setUserAC} from './../../redux/users-reducer';
import {Users} from './Users';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onFollowUser: (userId) => {
            dispatch(followAC(userId));
        },
        onUnFollowUser: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUser: (users) => {
            dispatch(setUserAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);