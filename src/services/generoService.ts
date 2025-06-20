import { API_URL } from "@/src/constants/urls";
import { fetch } from 'expo/fetch'; // Asegurate de que sea esta y no 'expo/fetch'
import type { IGeneroContenidoAudiovisual } from "@/src/constants/Data/generosContenidoAudiovisual";

export async function getGeneros(): Promise<IGeneroContenidoAudiovisual[]> {
  try {
    const response = await fetch(`${API_URL}/generos`);

    if (!response.ok) {
      console.error(`Error HTTP: ${response.status}`);
      throw new Error(`Error al obtener generos: ${response.status}`);
    }

    const generos: IGeneroContenidoAudiovisual[] = await response.json();
    return generos;
  } catch (error) {
    console.error("Fallo al obtener generos:", error);
    return [];
  }
}
