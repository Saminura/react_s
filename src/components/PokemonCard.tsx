export function PokemonCard({data}) {
    return (
        <div className='card'>
          <h2>{data.name}</h2>
          <img src={data.image} />

          <p>Рост: {data.height}</p>
          <p>Вес: {data.weight}</p>

          <div className='types'>
            {data.types.map(type => (
            <span key={type} className='type'>
              {type}r
              </span>
            ))}
          </div>
        </div>
    )
}

export default PokemonCard