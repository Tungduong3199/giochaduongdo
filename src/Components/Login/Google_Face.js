import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
};

/**
 * @return {null}
 */

function Login() {

    return (
        <>
            <Grid container justify={"center"} alignItems={"center"} direction={"column"}>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </Grid>

        </>
    );
}

export default Login