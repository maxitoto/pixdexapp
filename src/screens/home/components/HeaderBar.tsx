import { View, StyleSheet, Button } from "react-native";import React, { useState } from "react"
import { PressableIconText } from "@/src/screens/components/PressableIconText";

import {colors} from "@/src/constants/colors";
import { TextFont } from "@/src/screens/components/Textos"

import { ModalFiltro } from "@/src/screens/home/components/ModalFiltro"



export function HeaderBar() {
  const [isVisible, setIsVisible] = useState(false);

  function mostrar(){
    setIsVisible(true);
  }

  function ocultar(){
    setIsVisible(false);
  }

    return (
        <View style={styles.headerContent}>

          <View>
              <TextFont color="purpura" size={20} texto="Pixdex"/>
          </View>

          <PressableIconText 
            iconName={"gear"} 
            iconSize={12} 
            iconColor={colors.lightGray} 
            text={"Filtrar"}   
            textSize={10}  
            action={mostrar}      
          />

          <ModalFiltro visible={isVisible} onModalClose={ocultar}>
              <Button title="Cerrar" onPress={ocultar} />
              <TextFont size={50} color="purpuraClaro" texto="react modal"/>
              <TextFont size={50} color="purpuraClaro" texto="react modal"/>
              <TextFont size={50} color="purpuraClaro" texto="react modal"/>
              <TextFont size={50} color="purpuraClaro" texto="react modal"/>
              <TextFont size={50} color="purpuraClaro" texto="react modal"/>
              <TextFont size={50} color="purpuraClaro" texto="react modal"/>
          </ModalFiltro>

        </View>
    );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
