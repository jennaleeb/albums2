import React from 'react';
import {
  Text,
  View
} from 'react-native'


const Card = (props) => {
  // props.children will render anything that is passed into it
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
};
export default Card;
