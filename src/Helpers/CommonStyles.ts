import {StyleSheet} from 'react-native'

import Colors from './Colors'
import {W_HEIGHT, W_WIDTH} from './Responsive'

export const CommonStyles = StyleSheet.create({
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex: {
    flex: 1
  },
  fullWindow: {
    height: W_HEIGHT,
    width: W_WIDTH
  },
  modalStyle: {
    margin: 0,
    padding: 0
  },

  rowView: {alignItems: 'center', flexDirection: 'row'},
  shadow: {
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84
  },
  viewFull: {
    height: '100%',
    width: '100%'
  }
})
