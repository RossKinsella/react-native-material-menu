import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

import PropTypes from 'prop-types';

const MenuItem = props => (
  <TouchableHighlight
    disabled={props.disabled}
    onPress={props.onPress}
    style={[styles.container, props.style]}
    underlayColor={props.underlayColor}
  >
    <View
      style={styles.title}
    >
      {props.children}
    </View>
  </TouchableHighlight>
);

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: TouchableHighlight.propTypes.style,
  underlayColor: TouchableHighlight.propTypes.underlayColor,
};

MenuItem.defaultProps = {
  disabled: false,
  underlayColor: 'rgb(224,224,224)',
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124,
  },

  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
  },
});

export default MenuItem;
