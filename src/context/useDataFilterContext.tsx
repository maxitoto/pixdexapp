import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ITipoContenidoAudiovisual } from '@/src/constants/Data/tiposContenidoAudiovisual';
import type { IGeneroContenidoAudiovisual } from '@/src/constants/Data/generosContenidoAudiovisual';


interface IdataFilterContextType {
  tiposIdFilter: number[];
  setTiposIdFilter: React.Dispatch<React.SetStateAction<number[]>>;
  generosIdFilter: number[];
  setGenerosIdFilter: React.Dispatch<React.SetStateAction<number[]>>;

  filtrados: {tipos:ITipoContenidoAudiovisual[], genero:IGeneroContenidoAudiovisual[]};
  setfiltrados: React.Dispatch<React.SetStateAction<{tipos:ITipoContenidoAudiovisual[], genero:IGeneroContenidoAudiovisual[]}>>;
}

const dataFilterContext = createContext<IdataFilterContextType | null>(null);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {

      const [generosIdFilter, setGenerosIdFilter] = useState<number[]>([]);
      const [tiposIdFilter, setTiposIdFilter] = useState<number[]>([]);
    
      const [filtrados, setfiltrados] = 
      useState<{tipos:ITipoContenidoAudiovisual[], genero:IGeneroContenidoAudiovisual[]}>({
        tipos:[],genero:[]
      });

    return (
        <dataFilterContext.Provider value={{ 
            tiposIdFilter, 
            setTiposIdFilter, 
            generosIdFilter, 
            setGenerosIdFilter,
            filtrados,
            setfiltrados,
            }}>
        {children}
        </dataFilterContext.Provider>
    );
};

export const useDataFilterContext = () => {
    const context = useContext(dataFilterContext);
    if (!context) throw new Error("useDataFilterContext debe usarse dentro de <ContenidoProvider>");
    return context;
};