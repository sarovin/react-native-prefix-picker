// index.js
import React, {
  Component,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Select, Picker } from 'react-native-prefix-picker';

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
        <Select
          ref="SELECT1"
          pickerRef={() => this.refs.picker}
          width={60}
          height={45}
          style={{
            marginRight: 10,
            padding: 6,
          }}
          styleText={{
            color: '#333333',
            fontSize: 20,
            fontFamily: 'Avenir-Roman',
          }}
          selected={this.state.prefix}
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: '#f87f1d',
          }}
        >
          TEST
        </Text>
        <Picker
          ref={'picker'}
          transparent
          selectedValue={'IT'}
          onSubmit={(option) => {
            this.setState({
              prefix: option,
            });
          }}
        />
      </View>
    );
  }
}

export default Login;
