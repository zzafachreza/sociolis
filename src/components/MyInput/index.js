import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, ListItem, Button } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';

export default function MyInput({
  onFocus,
  label,
  iconname,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  labelColor = colors.white,
  styleInput,
  placeholder,
  opacity = 0.5,
  autoFocus,
  tinggi,
  multiline,
  label2,
  styleLabel,
  colorIcon = colors.white,
}) {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 3,
        }}>
        {/* <Icon type="ionicon" name={iconname} color={colorIcon} size={16} /> */}
        <Text
          style={{
            opacity: opacity,
            fontFamily: fonts.secondary[600],
            color: labelColor,
            left: 0,
            fontSize: 12,
            ...styleLabel,
          }}>
          {label}
        </Text>
      </View>
      {label2 && (
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            color: colors.primary,
            left: 10,
            fontSize: 12,
            ...styleLabel,
          }}>
          {label2}
        </Text>
      )}
      <TextInput
        multiline={multiline}
        autoFocus={autoFocus}
        onFocus={onFocus}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        style={{
          borderColor: colors.border,
          borderRadius: 15,
          height: tinggi,
          borderWidth: 1,
          backgroundColor: '#D9D9D9',
          opacity: opacity,
          paddingLeft: 10,
          color: colors.primary,
          fontSize: 12,
          fontFamily: fonts.primary[400],
          ...styleInput,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
