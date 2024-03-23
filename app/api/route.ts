import generate_document,{create} from '@/server/document'

export async function GET(){
    try{
        const buffer = await generate_document();
        return new Response(buffer);
    }
    catch(e){
        return new Response('error');
    }
}