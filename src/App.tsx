import { PrimaryButton } from "./components/PrimaryButton"
import { RoundedImage } from "./components/RoundedImage/RoundedImage"
import Cheshire from "../src/assets/images/cheshire.png"
import { StandardClock } from "./components/StandardClock"

import "./styles/global_classes.scss"

const App = () => {
  return (
    <>
      <PrimaryButton />
      <RoundedImage img={Cheshire} />
      <StandardClock className='big-standard-clock' />
    </>
  )
}

export default App
