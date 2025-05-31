import { generosContenidoAudiovisual } from "@/src/constants/Data/generosContenidoAudiovisual"; 

export function GET(response: Response){
    return Response.json(generosContenidoAudiovisual);
}