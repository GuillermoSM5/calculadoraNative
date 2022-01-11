import {FunctionComponent, useRef, useState} from 'react';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import BotoneCalc from '../components/BotonCalc';
import useCalculadora from '../Hooks/useCalculadora';

interface CalculadoraScreenProps {}

const CalculadoraScreen: FunctionComponent<CalculadoraScreenProps> = () => {
  const {
    numero,
    numeroAnterior,
    limpiarNumero,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    calcular,
    btnMultiplicar,
    btnResta,
    btnSumar,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* Boton */}
        <BotoneCalc text="C" color="#9B9B9B" accion={limpiarNumero} />
        <BotoneCalc text="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotoneCalc text="Del" color="#9B9B9B" accion={btnDelete} />
        <BotoneCalc text="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotoneCalc text="7" accion={armarNumero} />
        <BotoneCalc text="8" accion={armarNumero} />
        <BotoneCalc text="9" accion={armarNumero} />
        <BotoneCalc text="x" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotoneCalc text="4" accion={armarNumero} />
        <BotoneCalc text="5" accion={armarNumero} />
        <BotoneCalc text="6" accion={armarNumero} />
        <BotoneCalc text="-" color="#FF9427" accion={btnResta} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotoneCalc text="1" accion={armarNumero} />
        <BotoneCalc text="2" accion={armarNumero} />
        <BotoneCalc text="3" accion={armarNumero} />
        <BotoneCalc text="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        {/* Boton */}
        <BotoneCalc text="0" ancho accion={armarNumero} />
        <BotoneCalc text="." accion={armarNumero} />
        <BotoneCalc text="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
