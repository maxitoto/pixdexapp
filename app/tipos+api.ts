import { tiposContenidoAudiovisual } from "@/src/constants/Data/tiposContenidoAudiovisual"; 

export function GET(response: Response){
    console.log('GET function executed');
    return Response.json(tiposContenidoAudiovisual);
}