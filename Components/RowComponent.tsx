// import { View, Text, StyledProps, ViewStyle } from 'native-base'
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from '../styles/global';

interface Props {
  children: any;
  localStyles?: StyleProp<ViewStyle>;
}

const RowComponent = (props: Props) => {
  const {children, localStyles} = props;

  return (
    <View
      style={[
        localStyles,
        styles.tabbarContainer,
        {
          flexDirection: 'row',
          paddingHorizontal: 8,
          paddingVertical: 4,
        },
      ]}>
      {children}
    </View>
  );
};

export default RowComponent;