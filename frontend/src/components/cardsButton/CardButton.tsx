import '../cardsButton/CardButton.css'

export default (props: { title: string; subTitle: string ; }) => {
    return (
        <div id='cardButton'>
            <span id='spanTitle'>{props.title} </span>
            <span id="spanSubTitle"> {props.subTitle}</span>
        </div>
    )
}