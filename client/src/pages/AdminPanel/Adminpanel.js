import React, {Component} from 'react';
import style from './Adminpanel.module.scss';
import List from '../../components/UsersList/userList';
import {Link} from 'react-router-dom';
import {getAllUsers} from '../../actions/actionCreator';
import connect from 'react-redux/es/connect/connect';
import {Redirect} from 'react-router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AdminP extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }
    render() {
        if (this.props.user === null || (this.props.user.role === "USER")) {return <Redirect to="/notFound"/>}

        return (
            <div className={style.body}>
                {(this.props.users) ? <List users={this.props.users}/> :{} }
                <ToastContainer/>
                <Link to="/">
                    <div className={style.main}>Home</div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
        user: state.userReducers.user,
        users: state.getAllUsersReducer.data
    };
};
const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsers())
});
export default connect(mapStateToProps, mapDispatchToProps)(AdminP);