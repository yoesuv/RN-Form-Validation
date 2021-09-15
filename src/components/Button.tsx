import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { THEME_COLOR, BUTTON_DISABLED } from '../data/Colors';

export default function Button(props) {
  const { onPress, title = 'Save', disabled = false} = props;
    return (
      <Pressable disabled={disabled} style={disabled ? styles.buttonDisabled : styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: THEME_COLOR,
  },
  buttonDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: BUTTON_DISABLED,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
