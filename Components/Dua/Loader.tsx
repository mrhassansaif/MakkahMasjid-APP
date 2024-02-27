import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing,Text} from 'react-native';
// import { Text } from 'react-native-svg';

const Loader = () => {
  const pulseAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulse = Animated.sequence([
      Animated.timing(pulseAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(pulseAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }),
    ]);

    Animated.loop(pulse).start();
  }, [pulseAnimation]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              {
                scale: pulseAnimation.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 1.5, 1],
                }),
              },
            ],
          },
        ]}
      ></Animated.View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b0836f',
    borderRadius: 40,
    width: 70,
    height: 70,

  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#f2d2c4',
    borderRadius: 20,
    position: 'relative',
    borderWidth: 2,
    borderColor: '#824327',
  },
});

export default Loader;
