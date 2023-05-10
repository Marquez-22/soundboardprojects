import { Button } from "../Button"

type AudioType = "Audio"

interface AudioProps {

    type?: AudioType
    UrlAudio?: string
    TextBtn?: string
}

export const AudioComponent = ({ type = "Audio", TextBtn = "", UrlAudio = "" }: AudioProps) => {
    const playAudio = () =>{
        const audio = new Audio(UrlAudio)
        audio.play()
    }
    function platAudio2() {
        
    }
    return (<>
        <div className={`audio ${type}`}>
           <Button onClick={playAudio}>
            {TextBtn}
           </Button>
        </div>
    </>)
}