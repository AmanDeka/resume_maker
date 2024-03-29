'use client'

import { pdfjs, Document, Page ,} from 'react-pdf';
import { usePDF } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import Template1Form from '@/components/Template1Form/Template1Form';

import { get_pattern_dict } from '@/server/utils';



import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
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

export default function App() {

    //const [instance, update] = usePDF({ document : <Doc/>});
    return (
        <div className="flex flex-row h-screen">
            <Template1Form update = {()=>{}}/>
        </div>
    )
}