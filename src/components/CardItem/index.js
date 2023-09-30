import './index.css'
// Write your code here.
const Technologies = props => {
  const {cardList} = props
  const {title, description, className, imgUrl} = cardList
  return (
    <li className={className}>
      <h1 className="tech-heading">{title}</h1>
      <p className="tech-des">{description}</p>
      <div className="img-card">
        <img src={imgUrl} className="tech-img" alt={title}/>
      </div>
    </li>
  )
}

export default Technologies
