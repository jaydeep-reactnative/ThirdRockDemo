import React, { Component } from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // alert(JSON.stringify(this.props.navigation.state.params.data.mediaUrl));
  }

  render() {
    return (
      <View style={{flex:1}}>
        <WebView
          bounces={true}
          scrollEnabled={true}
          source={{ uri: this.props.navigation.state.params.data.mediaUrl}}
        />
      </View>
    );
  }
}

export default DetailScreen;
