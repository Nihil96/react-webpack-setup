import { render, screen } from "@testing-library/react"
import { PrimaryButton } from "./PrimaryButton"

test("renders the primary button correctly", () => {
  const { getByText } = render(<PrimaryButton />)
  const button = getByText("Primary Button")
  expect(button).toBeInTheDocument()
  expect(button).toHaveClass("primary-button-container")
})

test("should be enabled by default", () => {
  render(<PrimaryButton />)
  let primaryButton = screen.getByRole("button", {
    name: "Primary Button",
  })

  expect(primaryButton).toBeEnabled()
})
