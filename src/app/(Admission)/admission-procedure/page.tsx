import React from 'react';
import PDFViewer from '@/components/PDFViewer';

const Page = () => {
  return (
    <div>
      <h1>PDF Viewer using react-pdf and Next.js</h1>
      <PDFViewer pdfUrl="https://img1.wsimg.com/blobby/go/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/ADMISSION%20FORM_VBS.pdf" />
    </div>
  );
};

export default Page;