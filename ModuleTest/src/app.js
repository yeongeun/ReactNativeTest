import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <Text style={styles.welcome}>
                        Module Test
                    </Text>

                    <TouchableOpacity
                        style={{flex:1,}}
                        onPress={console.log("test")}>
                        <Image
                            style={styles.button}
                            resizeMode={Image.resizeMode.contain}
                            source={require('../pack.jpg')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        flex: 0.1,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    button: {
        flex: 1,
        margin: 30,
    }
};

