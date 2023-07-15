

const Description = ({image,title,description})=> {
   
    return (
      <div className="concept DescriptionContents">
          <h2>{title}</h2>
        <img src={image} className="logo-sm"/>
        <div className="description"><p> {description}</p></div>
      </div>
    );
  }
  
  export default Description;