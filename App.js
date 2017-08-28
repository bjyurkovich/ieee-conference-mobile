import React from "react";
import { StyleSheet, Text, View, WebView, Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      finishedLoading: false
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
          marginTop: 20
        }}
      >
        <WebView
          source={{ uri: `https://ccta.technicity.io` }}
          style={{ height: height, width: width }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          userAgent={"ccta"}
          onLoadEnd={() => {
            this.setState({ finishedLoading: true });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
