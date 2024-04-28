import React, { CSSProperties, FC } from "react"
import { useMemo } from "react"

import { Board } from "./components/board/Board.js"
import { Game } from "./components/Game.js"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export interface ChessboardTutorialAppState {
  knightPosition: [number, number]
}

const containerStyle: CSSProperties = {
  width: 500,
  height: 500,
  border: "1px solid gray",
}

/**
 * The Chessboard Tutorial Application
 */
export const TutorialApp: FC = () => {
  const game = useMemo(() => new Game(), [])

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={containerStyle}>
        <Board game={game} />
      </div>
    </DndProvider>
  )
}
