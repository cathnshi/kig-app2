import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    ListView,
    FlatList,
    StyleSheet
} from 'react-native';
import { List, ListItem, Card } from 'react-native-elements';
import { challenges } from '../config/challenges';
import ProgressBar from '../components/progressBar';

class ChallengeDetail extends Component {

      render() {
        return (
            <Text>Test</Text>
        )
      }
}

const styles = StyleSheet.create({
    card: {
        height: 162,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 34,
        marginTop: 40,
        color: '#60D5C7',
    },
    coinText: {
        color: '#EAE466',
        fontSize: 18,

    }
})



export default ChallengeDetail;