
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getContenidos } from '@/src/services/contenidoService';
import { getTipos } from '@/src/services/tipoServices';
import { getGeneros } from '@/src/services/generoService';

import type { IContenidoAudiovisual } from '@/src/constants/Data/contenidosAudiovisuales';
import type { ITipoContenidoAudiovisual } from '@/src/constants/Data/tiposContenidoAudiovisual';
import type { IGeneroContenidoAudiovisual } from '@/src/constants/Data/generosContenidoAudiovisual';

interface IContenidoContextType {
  contenidos: IContenidoAudiovisual[];
  tipos: ITipoContenidoAudiovisual[];
  generos: IGeneroContenidoAudiovisual[];
  loading: boolean;
}

const ContenidoContext = createContext<IContenidoContextType | null>(null);

export const ContenidoProvider = ({ children }: { children: React.ReactNode }) => {
  const [contenidos, setContenidos] = useState<IContenidoAudiovisual[]>([]);
  const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);
  const [generos, setGeneros] = useState<IGeneroContenidoAudiovisual[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [c, t, g] = await Promise.all([
          getContenidos(),
          getTipos(),
          getGeneros(),
        ]);
        setContenidos(Array.isArray(c) ? c : []);
        setTipos(Array.isArray(t) ? t : []);
        setGeneros(Array.isArray(g) ? g : []);
      } catch (error) {
        console.error("Error cargando datos globales:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  return (
    <ContenidoContext.Provider value={{ contenidos, tipos, generos, loading }}>
      {children}
    </ContenidoContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(ContenidoContext);
  if (!context) throw new Error("useContenidoContext debe usarse dentro de <ContenidoProvider>");
  return context;
};
