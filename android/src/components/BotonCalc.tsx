import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface BotoneCalcProps {
  text: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const BotoneCalc = ({
  text,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: BotoneCalcProps) => {
  return (
    <TouchableOpacity onPress={() => accion(text)}>
      <View
        style={[
          styles.boton,
          {backgroundColor: color},
          {width: ancho ? 180 : 80},
        ]}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotoneCalc;
