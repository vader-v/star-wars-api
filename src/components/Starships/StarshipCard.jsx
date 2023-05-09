const StarshipCard = ({ starship }) => {

    return (
      <li>
        <div className="starship-link">
        <section>
          <p>{starship.name.toUpperCase()}</p>
        </section>
        </div>
      </li>
    )
  }

export default StarshipCard
