import { contenidosAudiovisuales } from "@/src/constants/Data/contenidosAudiovisuales"; 

export function GET(response: Response){
    return Response.json(contenidosAudiovisuales);
}