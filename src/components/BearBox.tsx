import { useBearStore } from "../stores/bearStore"

export default function BearBox() {

    const { bears, increasePopulation, removeAllBears, getoWner } = useBearStore()

    return (
        <div>
            <h3>Zustand Tutorial</h3>
            <div className="">
                <h3>bears : {bears}</h3>
                <button onClick={increasePopulation}>add bear</button>
                <button onClick={removeAllBears}>remove bear</button>
            </div>
        </div>
    )
}
