import {SRLWrapper} from 'simple-react-lightbox'
export default function Award({imgp,caption,captionsec}){
    return(
        <SRLWrapper>
        <div className="award shadow">
        <img src={imgp} className="awardpic"/>
         <p className="awardcap">{caption}</p>
         {captionsec && <p className="awardcap">{captionsec}</p>}
        </div>
        </SRLWrapper>
    )
}