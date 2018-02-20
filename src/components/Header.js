// import needed libraries
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

// make the Component (functional component, dont have lifecycle events)
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        {props.headerText}
      </Text>
    </View>
  )
};

// make it available for other places in the app
export default Header;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});
