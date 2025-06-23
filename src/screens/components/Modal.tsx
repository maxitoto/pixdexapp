import { ReactNode } from "react";
import { Modal, TouchableWithoutFeedback, View, StyleSheet, Pressable } from "react-native";
import { colors } from "@/src/constants/colors"
import { Octicons } from "@expo/vector-icons";

interface IModalReactNativeProps {
  visible: boolean;
  onModalClose: () => void;
  children: ReactNode;
}
export function ModalExpo({
  visible,
  onModalClose,
  children,
}: IModalReactNativeProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={StyleSheet.absoluteFill}>
        <TouchableWithoutFeedback onPress={onModalClose}>
          <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Pressable style={styles.iconClose} onPress={onModalClose}><Octicons name="x" size={20} color={colors.lightGray}/></Pressable>
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",

  },
  modalContent: {
    width: "90%",
    backgroundColor: colors.fondo,
    borderRadius: 10,
    padding: 5,
  },
  iconClose:{
    paddingRight: 5,
    alignItems:"flex-end",
    justifyContent:"center",
  }
});
