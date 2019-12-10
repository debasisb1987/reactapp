import React from 'react';
import { connect } from "react-redux";

class Home extends React.Component {
    // componentDidMount() {
    //     this.props.updateUser();
    // }
    render() {
        console.log("home-data::::::::", this.props.userData);
        return (
            <h1 class="homepage"> Home page 123 <button onClick={() => this.props.updateUser()}>update</button></h1>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
