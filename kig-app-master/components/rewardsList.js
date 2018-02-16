import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
  Dimensions,
  FlatList
} from 'react-native';
import { Cards } from 'react-native-elements';
import { rewards } from '../config/rewards';
import ProgressBar from '../components/progressBar';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class RewardsList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isLoading: true,
      data: rewards
    }
  }

  componentDidMount() {
    var self = this;
    setTimeout(function () {
        self.setState({ isLoading: false });
    }, 1);
  }
  render() {
    return (
      this.state.isLoading ? 
      <View>
      <ProgressBar/>
      </View> : 
      <FlatList 
        data={this.state.data}
        renderItem={({ item: rowData }) =>{
          return(
            <Card
              title={null}
              image = {{ url: null}}
              containerStyle={{ padding: 0, width: 160}}
            >
            <Text style={{ marginBottom: 10 }}>Test</Text>
            </Card>
          )
        }}
        keyExtractor={(item, index) => index}
      />
    )
  }
}