export interface ITipoContenidoAudiovisual {
  id: number;
  singular: string;
  plural: string;
}

export const tiposContenidoAudiovisual: ITipoContenidoAudiovisual[] = [
  { id: 1, singular: "SERIE", plural: "SERIES" },
  { id: 2, singular: "PELÍCULA", plural: "PELÍCULAS" },
  { id: 3, singular: "ANIME", plural: "ANIMES" },
];