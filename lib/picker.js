import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Picker,
  Dimensions,
  PropTypes,
} from 'react-native';
import countries from 'world-countries';

const PickerItem = Picker.Item;

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  modalContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#F5FCFF',
  },

  buttonView: {
    width: SCREEN_WIDTH,
    padding: 8,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  bottomPicker: {
    width: SCREEN_WIDTH,
  },
});

class CustomPicker extends Component {

  constructor(props) {
    super(props);

    const prefix = this.getCountries();
    const selected = this.findCountriesCca2(this.props.selectedValue);

    this.state = {
      buttonColor: this.props.buttonColor || '#007AFF',
      modalVisible: false,
      selectedOption: selected,
      options: prefix,
    };

    this.onPressCancel = this.onPressCancel.bind(this);
    this.onPressSubmit = this.onPressSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentDidMount() {
    this.onCreate();
  }

  onPressCancel() {
    this.setState({
      modalVisible: false,
    });
  }

  onPressSubmit() {
    this.onCreate();

    this.setState({
      modalVisible: false,
    });
  }

  onValueChange(option) {
    this.setState({
      selectedOption: option,
    });
  }

  onCreate() {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.selectedOption);
    }
  }

  getCountries() {
    const array = [];
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].callingCode.length > 1) {
        for (let j = 0; j < countries[i].callingCode.length; j++) {
          array.push({
            cca2: countries[i].cca2 + '( ' + countries[i].callingCode[j] + ' )',
            callingCode: countries[i].callingCode[j],
          });
        }
      }
      else {
        array.push({
          cca2: countries[i].cca2,
          callingCode: countries[i].callingCode[0],
        });
      }
    }
    return array;
  }

  findCountriesCca2(cca2) {
    const prefix = this.getCountries();

    for (let i = 0; i < prefix.length; i++) {
      if (prefix[i].cca2 === cca2) {
        return prefix[i].callingCode;
      }
    }
    return prefix[0].callingCode;
  }

  show() {
    this.setState({
      modalVisible: true,
    });
  }

  renderItem(option) {
    let value = option.callingCode;
    let label = option.cca2;
    return (
      <PickerItem
        key={label}
        value={value}
        label={label}
      />
    );
  }

  render() {
    const { buttonColor } = this.state;
    const itemStyle = this.props.itemStyle || {};

    return (
      <Modal
        animated
        transparent
        visible={this.state.modalVisible}
        onRequestClose={() => {this.onPressCancel()}}
      >
        <View style={styles.basicContainer}>
          <View style={styles.modalContainer}>
            <View style={styles.buttonView}>
              <TouchableOpacity onPress={this.onPressCancel}>
                <Text style={{ color: buttonColor }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressSubmit}>
                <Text style={{ color: buttonColor }}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.mainBox}>
              <Picker
                ref={'picker'}
                style={styles.bottomPicker}
                selectedValue={this.state.selectedOption}
                onValueChange={(option) => this.onValueChange(option)}
                itemStyle={itemStyle}
              >
                {this.state.options.map((option) => { return this.renderItem(option); })}
              </Picker>
            </View>

          </View>
        </View>
      </Modal>
    );
  }
}

CustomPicker.propTypes = {
  buttonColor: PropTypes.string,
  itemStyle: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
};

export default CustomPicker;
