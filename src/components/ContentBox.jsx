import { ContentStyled} from "../styles/HomeBodyStyled";


function ContentBox(props) {
    return(
        <ContentStyled to={`/${props.route}`}> 
            {props.image ? <img src={props.image}/> : null}
             <h2>{props.title}</h2>
            <p>{props.content}</p>
        </ContentStyled>
    )
}

export default ContentBox;