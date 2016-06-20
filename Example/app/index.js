// index.js
import React, {
  Component,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Picker } from 'react-native-prefix-picker';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prefix: '',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          marginTop: 80,
          padding: 20,
        }}
      >
        <Picker
          ref="SELECT1"
          pickerRef={() => this.refs.picker}
          style={{
            width: 80,
            height: 64,
            marginRight: 8,
          }}
          styleLabel={{
            fontSize: 14,
          }}
          styleValue={{
            fontSize: 14,
          }}
          transparent
          onSubmit={(option) => {
            this.setState({
              prefix: option,
            });
          }}
        />
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            margin: 10,
            color: '#f87f1d',
          }}
        >
          TEST
        </Text>
      </View>
    );
  }
}

export default Login;
