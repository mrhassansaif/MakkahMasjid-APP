import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonLoader = () => {
  // Create animated value for the loading animation
  const shimmerAnimation = new Animated.Value(-1);

  // Function to start the shimmer animation
  const startShimmerAnimation = () => {
    Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ).start();
  };

  // Start the shimmer animation when the component mounts
  useEffect(() => {
    startShimmerAnimation();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Row */}
      <View style={[styles.row, styles.headerRow]}>
        <View style={[styles.cell, styles.headerCell]} />
        <View style={[styles.cell, styles.headerCell]} />
        <View style={[styles.cell, styles.headerCell]} />
      </View>

      {/* Table Rows */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <View key={index} style={styles.row}>
          <View style={styles.cell}>
            {/* Apply shimmer animation */}
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX: shimmerAnimation }] },
              ]}
            />
          </View>
          <View style={styles.cell}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX: shimmerAnimation }] },
              ]}
            />
          </View>
          <View style={styles.cell}>
            <Animated.View
              style={[
                styles.shimmer,
                { transform: [{ translateX: shimmerAnimation }] },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderBottomWidth: 1,
    borderColor: '#eee',
    minHeight: 50, // Adjust the height as needed
  },
  headerRow: {
    borderTopWidth: 1,
  },
  cell: {
    flex: 1,
    margin: 2,
    minHeight: 40, // Adjust the height as needed
    overflow: 'hidden',
  },
  headerCell: {
    backgroundColor: '#e0e0e0', // Light grey color for header cells
  },
  shimmer: {
    backgroundColor: '#ececec', // Light grey color
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default SkeletonLoader;
