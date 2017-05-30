/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import ViewPager from "react-native-viewpager";

const bannerDataSource = new ViewPager.DataSource({});

const images = [
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Irene_Bae_-_2016_Gaon_Chart_K-pop_Awards_red_carpet_02.jpg/250px-Irene_Bae_-_2016_Gaon_Chart_K-pop_Awards_red_carpet_02.jpg",
    },

    {
        url: "https://ext.fmkorea.com/files/attach/new/20160528/3655109/63052520/380461377/ea826b7952359e728323fe0e4100cbe7.jpg",
    },

    {
        url: "http://www.zenithnews.com/news/photo/201603/36628_34794_3722.jpg",
    },
];


export default class ViewpagerTest extends Component {

    renderPage(image) {
        return (
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity
                    style={{flex:0.5}}
                    onPress={() => {
                        console.log(image.url);
                    }}>

                    <Image
                        style={{width: 200, height: 200}}
                        source={{uri: image.url}}
                    />

                </TouchableOpacity>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.frame}>
                <ViewPager
                    dataSource={bannerDataSource.cloneWithPages(images)}
                    renderPage={this.renderPage.bind(this)}>
                </ViewPager>
            </View>
        );
    }
}

const styles = {
    frame: {
        position: 'absolute',
        bottom: 40,
        right: 0,
        left: 0,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};

AppRegistry.registerComponent('ViewpagerTest', () => ViewpagerTest);
