import { useParams } from "react-router-dom"

const Songs = () => {
    const { id } = useParams()
  return (
    <div>Song: {id}</div>
  )
}

export default Songs