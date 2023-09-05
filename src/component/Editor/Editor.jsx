import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'

const Editor = () => {


    useEffect(()=>{

        const quillServer = new Quill('#container', {theme:'snow'})

    }, [])

    return (
        <Box id='container'>

        </Box>
    );
};

export default Editor;