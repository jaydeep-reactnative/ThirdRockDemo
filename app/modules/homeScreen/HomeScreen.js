import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [], isRefreshing: false };
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  async getDataFromApi() {
    try {
      const response = await fetch(
        "https://www.monclergroup.com/wp-json/mobileApp/v1/getPressReleasesDocs"
      );
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          isRefreshing: false,
          dataSource: responseJson.content,
        },
        function () {}
      );
    } catch (error) {
      console.error(error);
    }
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={{ marginTop: 5, backgroundColor: "yellow" }}
        onPress={() => {
          this.props.navigation.navigate("DetailScreen", { data: item });
        }}
      >
        <Text>{item.mediaId}</Text>
        <Text>{item.mediaTitleCustom}</Text>
      </TouchableOpacity>
    );
  }

  handleRefresh = () => {
    this.setState({ isRefreshing: true });
    this.getDataFromApi();
  };

  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    ) : (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <SwipeListView
          data={this.state.dataSource}
          renderItem={({ item }) => this.renderItem(item)}
          renderHiddenItem={(data, rowMap) => (
            <View >
              <Text>Left</Text>
              <Text>Right</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isLoading}
              onRefresh={this.handleRefresh}
            />
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
