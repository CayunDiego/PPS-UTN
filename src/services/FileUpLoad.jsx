import React, { useState } from 'react';
import { useStorage } from 'reactfire';


const FileUpLoad = ({setUserPhoto}) => {
    const [ progress, setProgress ] = useState(0);
    const [ image, setImage ] = useState(null);
    const [ url, setUrl ] = useState("");
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
            const storageRef = storage.ref(`/imagenPerfil/${image.name}`);
            const uploadTask = storageRef.put(image);
            uploadTask.on("state_changed", snapshot => {
                const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                setProgress(progress);
            }, error => {
                setError(error);
            }, async () => {
                const downloadUrl = await storage.ref("imagenPerfil").child(image.name).getDownloadURL();
                setUrl(downloadUrl);
                setUserPhoto(downloadUrl);
                setProgress(0);
            });
        } else {
            setError("Error please choose an image to upload");
        }
    }


    return ( 
        <div>

            {progress > 0 ?  <progress value={progress} max="100"/> : ""}
            <br/>
            <input type="file" name="" id="" onChange={handChange}/>
            <button onClick={handleUpload}>Subir</button>
            <br/>
            { 
                url ? (<img src={url} alt="imagen"/>): (<img src="https://image.freepik.com/iconos-gratis/cargar-documento_318-8461.jpg" alt="imagen"/>)
            }
            <div>
                <p>{error}</p>
            </div>
        </div>
     );
}
 
export default FileUpLoad;