export default (props: { cardTitle: string; title: string; subTitle: string ; }) => {
    return (
        <div className={"cardTitle"}>
            <span className='spanTitle'>{props.title}</span>
            <span className="spanSubTitle">{props.subTitle}</span>
        </div>
    )
}