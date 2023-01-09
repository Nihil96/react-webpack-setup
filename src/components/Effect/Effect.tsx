import type { FC } from "react"
import { useEffect, useState } from "react"
import "./Effect.scss"

interface EffectProps {}

const Effect: FC<EffectProps> = () => {
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    // if there is no provided dependency, the useEffect will run after every render
    console.log("useEffect without dependency")
  })

  useEffect(() => {
    // this will produce infinite loop
    // uncomment the line below to see the loop in the console
    // setCount(count + 1)
    // console.log("Infinite loop!")
  })

  useEffect(() => {
    // this will run only on mount (when the component is initialy rendered)
    console.log("component is mounted!")
  }, [])

  useEffect(() => {
    // this will run on mount and when 'count' changes
    console.log("I will run on the initial render and when 'count' variable changes !")
  }, [count])

  useEffect(() => {
    console.log("component is mounted!")

    // cleanup function
    return () => {
      console.log("component is unmounted!")
    }
  }, [])

  // this is the correct way of fetching data to avoid race conditions
  // also this code will run only once in development with strict mode
  useEffect(() => {
    let isMounted = true // variable to track if the component is still mounted
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (response) => await response.json())
      .then((result) => {
        if (isMounted) {
          setTodos(result)
        }
      })
      .catch((error) => {
        if (isMounted) {
          console.log(error)
        }
      })

    // cleanup function to cancel the fetch if the component unmounts
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className='Effect'>
      Count: {count}
      <button onClick={handleClick}>Increment</button>
      <div>{todos.length}</div>
    </div>
  )
}

export { Effect }
