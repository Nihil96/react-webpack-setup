import { PrimaryButton } from "./components/PrimaryButton"
import { RoundedImage } from "./components/RoundedImage/RoundedImage"
import Cheshire from "../src/assets/images/cheshire.png"

const App = () => {
  return (
    <>
      <PrimaryButton />
      <RoundedImage img={Cheshire} />
    </>
  )
}

export default App
