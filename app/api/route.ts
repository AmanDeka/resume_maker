import create from '@/server/generate'

export async function GET(){
    const buffer = await create();
    return new Response(buffer);
}