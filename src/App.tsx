import "./App.css"
import { TutorialApp } from "./chessGame/TutorialApp"

function App() {
  return (
    <>
      {/* {[...Array(5)].map((_, idx) => {
        return (
          <CardDraggable
            key={"card_" + idx}
            isDragging={false}
            text={`${idx}_card`}
          />
        )
      })} */}

      <TutorialApp />
    </>
  )
}

export default App
