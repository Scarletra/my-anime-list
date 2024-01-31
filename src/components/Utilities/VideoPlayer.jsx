"use client"

import YouTube from "react-youtube"
import { X, MonitorPlay } from "@phosphor-icons/react"
import { useState } from "react"

const VideoPlayer = ({ videoId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleCloseButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
            <button 
                onClick={handleCloseButton}
                className="float-right px-3 text-color-primary bg-color-secondary"><X size={24}/>
            </button>
            <YouTube 
                videoId={videoId}
                onReady={(event) => event.target.pauseVideo}
                opts={option}
            />
            </div>
        )
    }

    return (
        isOpen 
        ? 
        <Player /> 
        : 
        <button onClick={handleCloseButton} className="fixed bottom-3 p-1 right-3 w-25 bg-color-primary text-color-dark rounded">
            <MonitorPlay size={28} />
        </button>
    )      
    
}

export default VideoPlayer