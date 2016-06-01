// index.test.js
import React from 'react';
import { View } from 'react-native';

import test from 'ava';
import { Select, Picker } from '../';
import { render } from 'enzyme';

test(t => {
  let prefix = '';
  const wrapper = render(
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
  );

  t.truthy(wrapper);
});
