import {StyleSheet} from 'react-native'

import Colors from './Colors'
import {moderateScale, scale, verticalScale, W_HEIGHT, W_WIDTH, widthPx} from './Responsive'

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

export const styles = StyleSheet.create({
  alignItems: {
    alignItems: 'center'
  },
  backImageStyle: {
    marginLeft: scale(20)
  },
  backImageStyleTop: {
    marginTop: verticalScale(20)
  },
  fixedWidth: {
    width: widthPx(43)
  },
  googleFullContainer: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.greyShadeE8,
    borderWidth: 1,
    width: '100%'
  },
  inputPhoneStyle: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: moderateScale(10),
    borderTopLeftRadius: 0,
    borderTopRightRadius: moderateScale(10),
    flex: 1,
    width: '100%'
  },
  inputStyle: {
    flex: 1,
    width: '100%'
  },
  marginBottom: {
    alignSelf: 'center',
    marginBottom: verticalScale(50),
    width: '90%'
  },
  textStyle: {
    color: Colors.blackShade2A30
  },
  width: {
    marginBottom: verticalScale(20),
    width: '100%'
  }
})
