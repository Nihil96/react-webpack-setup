import "./RoundedImage.scss"

interface RoundedImageProps {
  img: string
}

const RoundedImage = ({ img }: RoundedImageProps) => {
  return <img className="rounded-image" src={img} alt="rounded image" />
}

export { RoundedImage }
