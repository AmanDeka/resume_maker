'use client'

/*import { pdfjs, Document, Page ,} from 'react-pdf';
import { usePDF } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
*/
import UserForm from '@/components/userForm';
import { useTheme } from 'next-themes';
/*
import { Button } from "@/components/ui/button"
import { update_pattern_dict } from '@/server/document';



import type { PDFDocumentProxy } from 'pdfjs-dist';
*/
/*pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Doc() {
    return (
        <Document file={{ url: '/api' }}>
            <Page pageNumber={1} />
        </Document>
    )
}
*/
export default function App() {

    //const [instance, update] = usePDF({ document : <Doc/>});
    /*const cus = () => {
        update_pattern_dict({'!name':'Hello'});
        update(<Doc/>)
    }*/

    return (
        <div className="h-screen">
            <UserForm/>
        </div>
    )
}