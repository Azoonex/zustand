import React from 'react'
import { useCatStore } from '../stores/catStore'

export default function CatBox() {
  const bigCats = useCatStore(state => state.cats.bigCats);
  const smallCats = useCatStore(state => state.cats.smallCats)
  const increaseBigCats = useCatStore(state => state.increaseBigCats)
  const increaseSmallCats = useCatStore(state => state.increaseSmallCats)

  return (
    <div>
      CatBox
      <div>
        bigCats <span>bigCats</span> <span>smallCats</span>
      </div>
      <div>
        <h1>
          {bigCats}
        </h1>
        <h1>
          {smallCats}
        </h1>
        <button onClick={increaseBigCats}>big  cats</button>
        <button onClick={increaseSmallCats}>small  cats</button>
      </div>
    </div>
  )
}
