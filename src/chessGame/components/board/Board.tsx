import type { CSSProperties, FC } from "react"
import { useEffect, useState } from "react"

import type { Game, Position } from "../Game.js"
import { Piece } from "../knight/Piece.js"
import { BoardSquare } from "./BoardSquare.js"

export interface BoardProps {
  game: Game
}

/** Styling properties applied to the board element */
const boardStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
}
/** Styling properties applied to each square element */
const squareStyle: CSSProperties = { width: "12.5%", height: "12.5%" }

/**
 * The chessboard component
 * @param props The react props
 */
export const Board: FC<BoardProps> = ({ game }) => {
  const [[knightX, knightY], setKnightPos] = useState<Position>(
    game.knightPosition
  )
  useEffect(() => game.observe(setKnightPos))

  return (
    <div style={boardStyle}>
      {[...Array(64)].map((_, idx) => {
        const x = idx % 8
        const y = Math.floor(idx / 8)

        return (
          <div key={idx} style={squareStyle}>
            <BoardSquare x={x} y={y} game={game}>
              {/* {`idx: ${idx}`}
              <br />
              {`x: ${x}`}
              <br />
              {`y: ${y}`} */}
              <Piece isKnight={x === knightX && y === knightY} />
            </BoardSquare>
          </div>
        )
      })}
    </div>
  )
}
