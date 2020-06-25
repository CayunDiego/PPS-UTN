import React, { useState } from 'react';
import { useStorage } from 'reactfire';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const FileUpLoad = ({setUpload, folder}) => {
    const [ progress, setProgress ] = useState(0);
    const [ image, setImage ] = useState(null);
    const [ , setUrl ] = useState("");
    const [ error, setError ] = useState(null);
    const storage = useStorage();


    const handChange = e => {
        const file = e.target.files[0];
        if(file){
            const fileType = file["type"];
            const validImageTypes = ["image/jpeg", "image/png"];
            if(validImageTypes.includes(fileType)){
                setError("");
                setImage(file);
            } else {
                setError('Please select an image to upload');
            } 
        }
    }

    const handleUpload = () => {
        if(image){
            const storageRef = storage.ref(`/${folder}/${image.name}`);
            const uploadTask = storageRef.put(image);
            uploadTask.on("state_changed", async snapshot => {
                let progress = await Math.round((127823/snapshot.totalBytes)*100);
                for (let index = 0; index <= progress; index++) {
                    setTimeout(() => {
                        setProgress(index);
                    }, progress);
                }
            }, error => {
                setError(error);
            }, async () => {
                const downloadUrl = await storage.ref(folder).child(image.name).getDownloadURL();
                setUrl(downloadUrl);
                setUpload(downloadUrl);
                setProgress(100);
                setTimeout(() => {
                    setProgress(0);
                }, 1000);
            });
        } else {
            setError("Error please choose an image to upload");
        }
    }

    return ( 
        <div className='fileUpload'>
            {progress > 0 ?  <><progress className='fileUpload__progress' value={progress} min="0" max="100"/><br/></> : ""}
            <input type="file" name="" id="" onChange={handChange}/>
            <br/>
            <br/>
            <Button
                    endIcon={<CloudUploadIcon/>}
                    type='button'
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={handleUpload}>
                    Subir Foto
            </Button>
            <p className='fileUpload__error'>{error}</p>
            <br/>
            {/* { 
                url && (<img src={url} alt="imagen" height="42" width="42"/>)
            } */}
        </div>
     );
}
 
export default FileUpLoad;