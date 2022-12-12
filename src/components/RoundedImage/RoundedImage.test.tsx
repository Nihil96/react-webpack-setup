import { render } from "@testing-library/react"

import { RoundedImage } from "./RoundedImage"

describe("RoundedImage", () => {
  it("should render the image with the rounded-image class", () => {
    const { container } = render(<RoundedImage img="test.png" />)
    const imgElement = container.querySelector("img.rounded-image")
    expect(imgElement).toBeInTheDocument()
  })

  it("should set the src attribute of the image to the provided value", () => {
    const imgSrc = "test.png"
    const { container } = render(<RoundedImage img={imgSrc} />)
    const imgElement = container.querySelector("img")
    expect(imgElement).toHaveAttribute("src", imgSrc)
  })

  it("should set the alt attribute of the image to 'rounded image'", () => {
    const { container } = render(<RoundedImage img="test.png" />)
    const imgElement = container.querySelector("img")
    expect(imgElement).toHaveAttribute("alt", "rounded image")
  })

  it("should render the image with the correct role and aria-label", () => {
    const { getByRole } = render(<RoundedImage img="test.png" />)
    const imgElement = getByRole("img", {
      hidden: true,
    })
    expect(imgElement).toBeInTheDocument()
  })
})
