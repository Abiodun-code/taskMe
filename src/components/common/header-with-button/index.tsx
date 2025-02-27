import { View } from 'react-native'
import React from 'react'
import { Button, Title } from '@/shared/index'
import { Text } from 'react-native-paper'
import { hp } from '@/utils/responsiveHelper'
import { MaterialIcons } from "@expo/vector-icons"
import Colors from '@/constants/color'

type HeaderProps = {
  title?: string;
  buttonText?: string;
  press?: () => void;
  showButton?: boolean;
};

const HeaderWithButton = ({ title, buttonText = "Add Task", press, showButton=false }: HeaderProps) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Title iconColor={Colors.shadeBlue} color={Colors.shadeBlue} showIcon={true} textA={'left'} font={'i700'} variant={'titleMedium'} width={hp(20)}>
        {title}
      </Title>
      <Button flexD='row' itemAlign='center' justContent='flex-end' press={press}>
        {showButton && 
          <View style={{ padding: hp(1), backgroundColor: Colors.shadeBlue, borderRadius: hp(6) }}>
            <MaterialIcons name="add" size={hp(1.8)} color={Colors.white} />
          </View>
        }
        
        <Text variant='titleMedium' style={{ color: Colors.shadeBlue, fontFamily: 'i700', paddingLeft: hp(1) }}>
          {buttonText}
        </Text>
      </Button>
    </View>
  );
};

export default HeaderWithButton;
