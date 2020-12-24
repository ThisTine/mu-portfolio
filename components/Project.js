const Project = (props)=>{
    return(
        <div className={props.mode==="small" ? "pj pj-min" : "pj"}>
            <div className="pj-pic" style={props.picConHeight ? {height:`${props.picConHeight}`} : {}}>
                {props.children}
            </div>
            <div className="pj-description">
                <p className={props.mode === "small" ?   "pj-description-text pj-text-small" : "pj-description-text"}>{props.description}</p>
                <div className="pj-bottom">
                <div className="pj-web">
    <a className={props.mode === "small" ? "pj-web-text pj-text-small" : "pj-web-text" } href={`https://${props.url}`} target="blank">{props.url}</a>
                </div>
                <div className="framework">
                    {props.framework && props.framework.map(item=>{
                        return(
                            <img  key={Math.random()} src={`/img/framework/${item}.jpg`} className="framework-logo shadow" />
                        )
                    })}
                </div>
                </div>
            </div>

        </div>
    )
}

export default Project