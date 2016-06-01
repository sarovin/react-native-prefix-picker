// index.test.js
import React from 'react';
import { View } from 'react-native';

import test from 'ava';
import { Select, Picker } from '../';
import { shallow } from 'enzyme';

let prefix = '';

const Test = React.createClass({

  render() {
    return (
      <View>
        <Select
          ref={"SELET1"}
          pickerRef={() => this.refs.picker}
          selected={prefix}
        />
        <Picker
          ref={'picker'}
          selectedValue={'IT'}
          onSubmit={(option) => {
            prefix = option;
          }}
        />
      </View>
    )
  }
});

test(t => {
  const wrapper = shallow(<Test/>);
  t.truthy(wrapper);
});
