export interface ITipoContenidoAudiovisual {
  id: number;
  singular: string;
  plural: string;
}

export const tiposContenidoAudiovisual: ITipoContenidoAudiovisual[] = [
  { id: 1, singular: "serie", plural: "series" },
  { id: 2, singular: "película", plural: "películas" },
  { id: 3, singular: "anime", plural: "animes" },
];