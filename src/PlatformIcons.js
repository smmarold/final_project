

const PlatformIcons = (props) => {
    console.log(props)
    return (
        <div className="icons">
            {props.Netflix === "true" && <img className="platform-icons" src={require('./icons/netflix.png')} alt="Netflix" />}
            {props.Hulu === "true" && <img className="platform-icons" src={require('./icons/hulu.png')} alt="hulu" />}
            {props.AmazonPrime === "true" && <img className="platform-icons" src={require('./icons/amazon.png')} alt="Amazon Video" />}
            {props.DisneyPlus === "true" && <img className="platform-icons" src={require('./icons/disney.png')} alt="Disney Plus" />}
            {props.Theaters === "true" && <img className="platform-icons" src={require('./icons/theater.png')} alt="Disney Plus" />}

        </div>
    )
}

export default PlatformIcons;