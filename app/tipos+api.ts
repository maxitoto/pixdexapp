import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual"; 

export function GET(response: Response){
    return Response.json(tiposContenidoAudiovisual);
}