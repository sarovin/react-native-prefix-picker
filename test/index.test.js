// index.test.js
import React from 'react';
import { View } from 'react-native';

import test from 'ava';
import { Picker } from '../';
import { render } from 'enzyme';

test(t => {
  let prefix = '';
  const wrapper = render(
    <View>
      <Picker
        selectedValue={'IT'}
        onSubmit={(option) => {
          prefix = option;
        }}
      />
    </View>
  );

  t.truthy(wrapper);
});
