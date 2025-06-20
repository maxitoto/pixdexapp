import { API_URL } from "@/src/constants/urls";
import { fetch } from 'expo/fetch'; // Asegurate de que sea esta y no 'expo/fetch'
import type { IContenidoAudiovisual } from "@/src/constants/Data/contenidosAudiovisuales";

export async function getContenidos(): Promise<IContenidoAudiovisual[]> {
  try {
    const response = await fetch(`${API_URL}/contenido`);

    if (!response.ok) {
      console.error(`Error HTTP: ${response.status}`);
      throw new Error(`Error al obtener contenidos: ${response.status}`);
    }

    const contenidos: IContenidoAudiovisual[] = await response.json();
    return contenidos;
    
  } catch (error) {
    console.error("Fallo al obtener contenido audiovisuales:", error);
    return [];
  }
}