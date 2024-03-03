import {create} from '@/server/document'

export async function GET(){
    try{
        const buffer = await create('templates',{'!name':'Aman'});
        return new Response(buffer);
    }
    catch(e){
        return new Response('error');
    }
}