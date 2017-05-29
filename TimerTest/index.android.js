/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
let TimerMixin = require('react-timer-mixin');


export default class TimerTest extends Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    constructor(props) {
        super(props);
        this.state = {
            timeLineTop: 0
        }


        TimerMixin.setInterval( () => {
            this.setState({
                timeLineTop: this.state.timeLineTop+1
            })
        }, 500);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={[
                    { marginTop: this.state.timeLineTop },
                ]}><Text>TOP - {this.state.timeLineTop}</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:60,
    },
});

AppRegistry.registerComponent('TimerTest', () => TimerTest);
