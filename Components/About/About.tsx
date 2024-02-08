import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Image, Text} from 'native-base';

export const About = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imagediv}>
        <Image
          source={require('../About/img/aboutbg.jpg')}
          style={styles.img}
          alt="About Us Background"
        />
      </View>
      <View style={styles.contentdiv}>
        <View style={styles.row1}>
          <View style={styles.leftcol}>
            <Text style={styles.historyheading}>History</Text>
          </View>
          <View style={styles.rightcol}>
            <Text style={styles.historydate}>Jan 1, 2021 • 3344 views</Text>
          </View>
        </View>

        <View style={styles.row2}>
          <Text style={styles.title}>Lorem Ipsum Dolor Sit</Text>
          <Text style={styles.author}>By: Origin</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt
            molestiae velit dolorum, facilis amet placeat accusamus iste?
            Commodi, veritatis? Quas quia id sequi mollitia excepturi hic
            voluptatibus odio temporibus?
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F2D2C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagediv: {
    width: 350,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    width: 320,
    height: 190,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 30,
  },
  contentdiv: {
     backgroundColor: 'rgba(240, 240, 240, 0.60)',
    width: 320,
    borderRadius: 20,
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leftcol: {
    padding: 6,
    // backgroundColor: '#F2F2F2',
    borderRadius: 6,
  },
  historyheading: {
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5
  },
  historydate: {},
  rightcol: {},
  row2: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    padding: 10,
  },
  author: {
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'left',
    color: '#333333',
    // alignItems: 'flex-start',
    marginLeft: 30,
    marginBottom: 10,
    // padding: 10
  },
  paragraph: {
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'left',
    color: '#333333',
    // alignItems: 'flex-start',
    marginLeft: 30,
    lineHeight: 30,
    marginBottom: 10,
    // padding: 10
  },
});
