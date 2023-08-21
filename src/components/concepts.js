export default function Concepts({neww}){
    return(
        <ul id="concepts">
        <li className="concept">
          <img src={neww[0].image} />
          <h2>{neww[0].title}</h2>
                 <p>{neww[0].description}</p>
        </li>
        <li className="concept">
          <img src={neww[1].image} alt={neww[1].title} />
          <h2>{neww[1].title}</h2>
                 <p>{neww[1].description}</p>
        </li>
        <li className="concept">
          <img src={neww[2].image} alt={neww[2].title} />
          <h2>{neww[2].title}</h2>
                 <p>{neww[2].description}</p>
        </li>
      </ul>
    )
}