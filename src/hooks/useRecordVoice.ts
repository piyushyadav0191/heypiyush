import { useEffect, useState, useRef } from "react";

export const useRecordVoice = () => {
  // State to hold the media recorder instance
  const [mediaRecorder, setMediaRecorder] = useState(null);

  // State to track whether recording is currently in progress
  const [recording, setRecording] = useState(false);

  // Ref to store audio chunks during recording
  const chunks = useRef([]);

  // Function to start the recording
  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
    }
  };

  // Function to stop the recording
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop(); 
      setRecording(false);
    }
  };

  // Function to initialize the media recorder with the provided stream
  const initialMediaRecorder = (stream) => {
    const mediaRecorder = new MediaRecorder(stream);

    // Event handler when recording starts
    mediaRecorder.onstart = () => {
      chunks.current = []; // Resetting chunks array
    };

    // Event handler when data becomes available during recording
    mediaRecorder.ondataavailable = (ev) => {
      chunks.current.push(ev.data); // Storing data chunks
    };

    // Event handler when recording stops
    mediaRecorder.onstop = () => {
      // Creating a blob from accumulated audio chunks with WAV format
      const audioBlob = new Blob(chunks.current, { type: "audio/wav" });
      console.log(audioBlob, 'audioBlob')

      // You can do something with the audioBlob, like sending it to a server or processing it further
    };

    setMediaRecorder(mediaRecorder);
  };

  useEffect(() => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(initialMediaRecorder)
        .catch((err) => {
          console.error(`you got an error: ${err}`);
        });
  }, []); 

  return { recording, startRecording, stopRecording
 };
};