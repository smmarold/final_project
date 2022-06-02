import React from 'react'
import { useSelector } from 'react-redux'
import { RemoveFromQueue } from './RemoveFromQueue'

export const QueueList = () => {
  const queue = useSelector(state => state.queue)

  const renderedQueue = queue.map(element => (
    <div key={element.id} className="box-container">
        <img className="preview-image" src={element.image} alt={element.id} />
        <h2>{element.title}</h2>
        <div className='ratings-div'>
        <p>Rating: {element.rating}%</p>
        <div><RemoveFromQueue {...element} /></div>
        </div>
    </div>
  ))

  return (
    <section className="homePage">
      <h1>My Queue</h1>
      {renderedQueue.length > 0 && renderedQueue}
      {renderedQueue.length === 0 && <div>No Movies In Queue</div>}
    </section>
  )
}