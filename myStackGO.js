/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Button,
    TextInput,
    Text,
    View,
    Picker,
    Alert
} from 'react-native';

export default class AwesomeProject extends Component {
    constructor() {
        super()
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.arr = [];
        this.state = {
            object: '',
            dataSource: ds.cloneWithRows(this.arr),
        }
    }


    _pop() {
        Alert.alert('Hello ^^', 'Do you get some information to use this application?', [
            { text: 'Yes', onPress:()=> this._confirmPop('Yes'), style: 'positive' },
            { text: 'No', onPress:()=> this._confirmPop('No'), style: 'negative' }
        ])

    }
    _confirmPop(text) {
        if (text == 'Yes') {
            this.arr.pop();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.arr)
            })
        }
    }
    _push(rowData) {
        this.arr.push(rowData);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.arr)
        })

    }
    render() {
        return (
            <View>

                <TextInput

                    placeholder="Please, enter some thing here."
                    value={this.state.object}
                    onChangeText={(text) => this.setState({ object: text })}
                />
                <Button onPress={() => this._push(this.state.object)} title="Push"></Button>

                <Button onPress={() => this._pop()} title="Pop"></Button>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
    }

}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);