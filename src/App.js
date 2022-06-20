
import tw from "tailwind-styled-components"

const Greeting = tw.h1`
text-xs
font-medium
shadow-sm
text-blue-900
hover:bg-purple-700
focus:outline-none`

export default function App() {
  return (
    <Greeting>
      Hello world!
    </Greeting>
  )
}