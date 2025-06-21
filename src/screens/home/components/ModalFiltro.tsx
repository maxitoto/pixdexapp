import { ReactNode } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { colors } from "@/src/constants/colors"

interface IModalReactNativeProps {
  visible: boolean;
  onModalClose: () => void;
  children: ReactNode;
}
export function ModalFiltro({
  visible,
  onModalClose,
  children,
}: IModalReactNativeProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onModalClose}>
        <View
          style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <TouchableWithoutFeedback>
            <View style={{
              flex:1, 
            }}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}