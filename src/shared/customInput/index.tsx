import { View } from 'react-native'
import React from 'react'
import { TextInput, TextInputProps } from 'react-native-paper'
import { hp } from '@/utils/responsiveHelper'
import Colors from '@/constants/color'

interface CustomTextProps extends TextInputProps {
  label?: string,
  disabled?: boolean,
  mb?: number
  bg?: any,
  bgColor?: any,
  textA?: any,
  textAV?:any,
  minHeight?: any
}
const CustomInput: React.FC<CustomTextProps> = ({
  label,
  disabled,
  mb,
  bg,
  bgColor,
  textA,
  textAV,
  minHeight,
  ...props
}) => {

  return (
    <View style={{ marginBottom: mb || hp(2.5), flexDirection: 'row' }}>
      <TextInput label={label} style={{ backgroundColor: bgColor || Colors.white, fontSize: hp(1.9), flex: 1, textAlign: textA, minHeight: minHeight, textAlignVertical: textAV}}
        outlineStyle={{ borderRadius: hp(1.5), borderColor: bg || Colors.gray }} mode='outlined'
        textColor={Colors.black} activeOutlineColor={Colors.black} disabled={disabled}
        {...props}
      />
    </View>
  )
}

export default CustomInput