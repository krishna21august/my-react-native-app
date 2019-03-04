import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

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
                <TextInput placeholder="Enter Email" />
                <TextInput placeholder="Password" />
                <TextInput placeholder="Confirm Password" />

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
    }
});

export default AuthScreen;