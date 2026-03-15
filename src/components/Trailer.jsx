import styles from './Trailer.module.css'

function Trailer({trailerLink}){
  return (
      <div>
        <video controls>
            <source src={trailerLink} type='video/mp4' />
        </video>
      </div>
  )
}

export default Trailer;