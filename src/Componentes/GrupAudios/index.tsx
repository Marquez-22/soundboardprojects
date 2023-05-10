import { AudioComponent } from "../Audio"

type GrupAudiostype = "GrupAudios"


interface GrupAudiosProps {
    type?: GrupAudiostype

}



export const GrupAudios = ({ type = "GrupAudios" }: GrupAudiosProps) => {
    return (<>
        <div className={`GrupAudios ${type}`}>
        <AudioComponent
                 TextBtn='Cow'
                 UrlAudio='/audio/vaca.mp3'
            />
             <AudioComponent
                 TextBtn='Dog'
                 UrlAudio='/audio/perro.mp3'
            />
             <AudioComponent
                 TextBtn='Sheep'
                 UrlAudio='/audio/oveja.mp3'
            />
             <AudioComponent
                 TextBtn='Elephant'
                 UrlAudio='/audio/elefante.mp3'
            />
             <AudioComponent
                 TextBtn='Cat'
                 UrlAudio='/audio/gato.mp3'
            />
             <AudioComponent
                 TextBtn='Chicken'
                 UrlAudio='/audio/pollito.mp3'
            />
<AudioComponent
                 TextBtn='Cow'
                 UrlAudio='/audio/vaca.mp3'
            />
             <AudioComponent
                 TextBtn='Dog'
                 UrlAudio='/audio/perro.mp3'
            />
             <AudioComponent
                 TextBtn='Sheep'
                 UrlAudio='/audio/oveja.mp3'
            />
             <AudioComponent
                 TextBtn='Elephant'
                 UrlAudio='/audio/elefante.mp3'
            />
             <AudioComponent
                 TextBtn='Cat'
                 UrlAudio='/audio/gato.mp3'
            />
             <AudioComponent
                 TextBtn='Chicken'
                 UrlAudio='/audio/pollito.mp3'
            />

        </div>



    </>)
}