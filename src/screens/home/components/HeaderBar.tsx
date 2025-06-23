import { View, StyleSheet } from "react-native";
import { useState } from "react";

import { PressableIconText } from "@/src/screens/components/PressableIconText";
import { ModalExpo } from "@/src/screens/components/Modal";
import { Filtros } from "@/src/screens/home/components/Filtros";

import { colors } from "@/src/constants/colors";
import { TextFont } from "@/src/screens/components/Textos";
import { useDataFilterContext } from "@/src/context/useDataFilterContext";
import { useDataContext } from "@/src/context/useDataContext";

export function HeaderBar() {
  const [isVisible, setIsVisible] = useState(false);

  const { tipos, generos } = useDataContext();
  const { tiposIdFilter, generosIdFilter, setfiltrados } = useDataFilterContext();

  function mostrar() {
    setIsVisible(true);
  }

  function ocultar() {
    setIsVisible(false);
  }

  function aplicarYCerrar() {
    const tiposfiltrados = tipos.filter(e => tiposIdFilter.includes(e.id));
    const generosfiltrados = generos.filter(e => generosIdFilter.includes(e.id));

    setfiltrados({
      tipos: tiposfiltrados,
      genero: generosfiltrados
    });

    ocultar();
  }


  return (
    <View style={styles.headerContent}>
      <View>
        <TextFont color="purpura" size={20} texto="Pixdex" />
      </View>

      <PressableIconText
        iconName={"gear"}
        iconSize={12}
        iconColor={colors.lightGray}
        text={"Filtrar"}
        textSize={10}
        action={mostrar}
      />

      <ModalExpo visible={isVisible} onModalClose={ocultar}>
        <Filtros />
        <View style={styles.botones}>
          <PressableIconText text="CANCEL" textSize={15} action={ocultar} />
          <PressableIconText
            text="APPLY FILTERS"
            textSize={15}
            action={aplicarYCerrar}
          />
        </View>
      </ModalExpo>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  botones: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
