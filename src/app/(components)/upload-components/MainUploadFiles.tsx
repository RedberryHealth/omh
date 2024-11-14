'use client';

import React, { useState } from 'react';
import UploadProgress from './UploadProgress';
import CompletedUpload from './CompletedUpload';
import FailedtoSend from './FailedtoSend';
import DragDropBrowse from './DragDropBrowse';
import { FaArrowRight } from 'react-icons/fa';

export default function MainUploadFiles() {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setFileName(selectedFile.name);
    setUploading(true); // Start the upload progress animation
  };

  const handleUploadComplete = () => {
    setUploading(false);
    setUploadComplete(true);
  };

  const resetToInitialState = () => {
    setFile(null);
    setFileName('');
    setUploadComplete(false);
    setUploading(false);
    setUploadFailed(false);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:4000/files/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('File uploaded successfully!');
        resetToInitialState();
      } else {
        setUploading(false);
        setUploadFailed(true); // Show FailedtoSend component on server failure
      }
    } catch (error) {
      console.error('File upload failed:', error);
      setUploading(false);
      setUploadFailed(true); // Show FailedtoSend component on network failure
    }
  };

  return (
    <div className='w-full max-w-[400px] items-start gap-[31px] flex-[0_0_auto] flex flex-col relative'>
      {!uploading && !uploadComplete && !uploadFailed && (
        <DragDropBrowse onFileSelect={handleFileSelect} />
      )}
      {uploading && !uploadComplete && (
        <UploadProgress onComplete={handleUploadComplete} />
      )}
      {uploadComplete && !uploadFailed && (
        <CompletedUpload fileName={fileName} onClear={resetToInitialState} />
      )}
      {uploadFailed && (
        <FailedtoSend fileName={fileName} onClear={resetToInitialState} />
      )}

      <div className='my-8 flex h-auto max-h-[100px] items-center justify-center px-8 py-2.5 relative self-stretch w-full'>
        <button
          className='bg-main-color text-white px-6 py-3 rounded-full font-semibold flex items-center whitespace-nowrap'
          onClick={handleUpload}
          disabled={!file}>
          Upload Your Merchant Statement
          <FaArrowRight className='ml-2 w-4 h-4' />
        </button>
      </div>
    </div>
  );
}
