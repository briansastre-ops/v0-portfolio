import { Keyboard } from 'react-native';
"use client"
import { useState, useEffect, useCallback } from 'react';


const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_DIRECTION = { x: 1, y: 0 }
const GAME_SPEED = 150

type Position = { x: number; y: number }

export function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [direction, setDirection] = useState<Position>(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
    setFood(newFood)
  }, [])

  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setScore(0)
    setGameOver(false)
    setIsPlaying(true)
    generateFood()
  }

  const checkCollision = useCallback((head: Position, body: Position[]) => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true
    }
    // Self collision (skip the head itself)
    for (let i = 1; i < body.length; i++) {
      if (body[i].x === head.x && body[i].y === head.y) {
        return true
      }
    }
    return false
  }, [])

  useEffect(() => {
    if (!isPlaying || gameOver) return

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        }

        if (checkCollision(newHead, prevSnake)) {
          setGameOver(true)
          setIsPlaying(false)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((prev) => prev + 10)
          generateFood()
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }

    const gameLoop = setInterval(moveSnake, GAME_SPEED)
    return () => clearInterval(gameLoop)
  }, [direction, food, isPlaying, gameOver, checkCollision, generateFood])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [direction, isPlaying])

  return (
    <div className="p-4 h-full bg-black text-green-400 font-mono flex flex-col items-center justify-center">
      <div className="mb-4 text-center">
        <h2 className="text-2xl mb-2">🐍 SNAKE.EXE</h2>
        <div className="text-yellow-400 mb-2">SCORE: {score}</div>
        {!isPlaying && !gameOver && (
          <div className="text-sm mb-2">Press START to begin</div>
        )}
        {gameOver && (
          <div className="text-red-500 mb-2 animate-pulse">GAME OVER!</div>
        )}
      </div>

      <div
        className="relative border-2 border-green-400 bg-black"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={`snake-${index}`}
            className="absolute bg-green-400"
            style={{
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              opacity: index === 0 ? 1 : 0.8,
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute bg-yellow-400 animate-pulse"
          style={{
            left: `${food.x * CELL_SIZE}px`,
            top: `${food.y * CELL_SIZE}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
          }}
        />
      </div>

      <div className="mt-4 flex gap-2">
        {!isPlaying && (
          <button
            onClick={resetGame}
            className="bg-green-400 text-black px-4 py-2 font-mono font-bold hover:bg-yellow-400 transition-colors"
          >
            {gameOver ? "RESTART" : "START"}
          </button>
        )}
        {isPlaying && (
          <button
            onClick={() => setIsPlaying(false)}
            className="bg-red-500 text-white px-4 py-2 font-mono font-bold hover:bg-red-600 transition-colors"
          >
            PAUSE
          </button>
        )}
      </div>

      <div className="mt-4 text-xs text-center text-muted-foreground">
        <div>Use arrow keys to control</div>
        <div className="mt-1">↑ ↓ ← →</div>
      </div>
    </div>
  )
}