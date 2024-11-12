"use client";

import React, { useState, useEffect } from 'react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'font-awesome/css/font-awesome.min.css';
import FroalaEditor from 'react-froala-wysiwyg';

export default function EditorComponent() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="editor-container pt-5 mx-auto max-w-4xl">
        <div className="editor-title-input">
          <FroalaEditor 
            tag='textarea' 
            model={title} 
            onModelChange={setTitle} 
            config={{
              toolbarInline: true,
              toolbarSticky: true,
              charCounterCount: false,
              placeholderText: 'Title', 
              theme: 'dark',
              classes: "display-3 text-2xl bg-black",
            }}
          />
        </div>
        <div className="editor-content-input pt-2">
          <FroalaEditor 
            tag='textarea' 
            model={content} 
            onModelChange={setContent} 
            config={{
              toolbarInline: true,
              toolbarSticky: true,
              charCounterCount: false,
              placeholderText: 'Unveil your story...', 
              codeMirror: true,
              theme: 'dark',
            }}
          />
        </div>
      </div>
    </>
  );
}