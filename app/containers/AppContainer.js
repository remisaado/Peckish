import React, {Component} from "react";
import ReactNative from "react-native";
const {View, Text} = ReactNative;

class AppContainer extends Component {
  render() {
    return <View>
      <Text style={{marginTop: 20}}>
        I am App Container!
      </Text>
    </View>
  }
}

export default AppContainer;
