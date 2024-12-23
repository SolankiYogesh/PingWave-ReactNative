import React from 'react'
import {Text, View} from 'react-native'

import {CommonStyles} from '@/Helpers/CommonStyles'

type CenterViewProps = {
  title: string
}

const CenterView = ({title}: CenterViewProps) => {
  return (
    <View style={[CommonStyles.flex, CommonStyles.centerItem]}>
      <Text>{title}</Text>
    </View>
  )
}

export default CenterView
