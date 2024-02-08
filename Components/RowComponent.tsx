import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { styles } from '../styles/global';

interface Props {
  children: React.ReactNode;
  localStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const { children, localStyles, onPress } = props;

  const content = (
    <View
      style={[
        localStyles,
        styles.tabbarContainer,
        {
          flexDirection: 'row',
          paddingHorizontal: 8,
          paddingVertical: 4,
        },
      ]}
    >
      {children}
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }

  return content;
};

export default RowComponent;
