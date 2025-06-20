import { API_URL } from "@/src/constants/urls";
import { fetch } from 'expo/fetch'; // Asegurate de que sea esta y no 'expo/fetch'
import type { ITipoContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual";

export async function getTipos(): Promise<ITipoContenidoAudiovisual[]> {
  try {
    const response = await fetch(`${API_URL}/tipos`);

    if (!response.ok) {
      console.error(`Error HTTP: ${response.status}`);
      throw new Error(`Error al obtener tipos: ${response.status}`);
    }

    const tipos: ITipoContenidoAudiovisual[] = await response.json();
    return tipos;
  } catch (error) {
    console.error("Fallo al obtener tipos de contenido audiovisual:", error);
    return [];
  }
}
