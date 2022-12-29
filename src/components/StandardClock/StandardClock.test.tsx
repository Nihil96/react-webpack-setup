import { render, cleanup, act } from "@testing-library/react"
import { StandardClock } from "./StandardClock"

afterEach(cleanup)

describe("StandardClock component", () => {
  it("should render the current time in the format HH:mm:ss", () => {
    const { getByText } = render(<StandardClock />)
    const timeRegex = /^\d\d:\d\d:\d\d$/
    expect(getByText(timeRegex)).toBeInTheDocument()
  })

  it("should apply the class name passed in the props", () => {
    const { container } = render(<StandardClock className='custom-class' />)
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("should update the time every second", async () => {
    jest.useFakeTimers()
    const { getByText } = render(<StandardClock />)
    const timeRegex = /^\d\d:\d\d:\d\d$/
    const initialTime = getByText(timeRegex).textContent
    jest.advanceTimersByTime(1000)

    await act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(getByText(timeRegex).textContent).not.toEqual(initialTime)
  })
})
