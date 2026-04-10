const Card = ({title, notice, image, paragraph}) => {
    return ( 
        <>
        <div style={{border: "1px solid black"}}>
            {image}
            {title}
            {notice}
            {paragraph}
        </div>
        </>
     );
}
 
export default Card;

