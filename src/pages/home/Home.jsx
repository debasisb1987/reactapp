import React from 'react';
import { connect } from "react-redux";

import { getUserAction } from './homeAction';

class Home extends React.Component {
    // componentDidMount() {
    //     this.props.updateUser();
    // }
    render() {
        const { userData } = this.props;
        console.log("home-data::::::::", this.props.userData);
        const userName = userData.result && userData.result.name;
        return (
            (userData && userData.fetching) ? (
                <h2>Loading...</h2>
            ) : (
                    <h1 class="homepage"> UserName: {userName}
                        <button onClick={() => this.props.getUser()}>update</button>
                    </h1>
                )

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.homeReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    updateUser: () => {
        alert("update user call")
        return dispatch({ type: "UPDATE_USER", "text": "Debasis" })
    },
    getUser: () => (dispatch(getUserAction({ name: 'kshirodram' })))

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
