import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to login" />
                <View style={styles.inputContainer}>
                    <DefaultInput placeholder="Enter Email" />
                    <DefaultInput placeholder="Password" />
                    <DefaultInput placeholder="Confirm Password" />
                </View>
                <Button title="Submit" onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //take full available space
        justifyContent: "center",//alignment with main axis i.e y axis (column),
        alignItems: "center" //alignment with cross axis
    },
    inputContainer: {
        width: "80%"
    }
});

export default AuthScreen;