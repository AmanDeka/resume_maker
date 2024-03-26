'use client'

import { pdfjs, Document, Page ,} from 'react-pdf';
import { usePDF } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import SimpleResumeForm from '@/components/simpleResumeForm';



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
        <div className="h-screen">
            <SimpleResumeForm update = {()=>{}}/>
        </div>
    )
}