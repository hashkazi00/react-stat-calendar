import { useState } from "react"
import dayjs from "dayjs"
import Calendar from "./components/Calendar"
import Navigation from "./components/Navigation"

function App() {
  const [currentDate, updateCurrentDate] = useState(dayjs())

  console.log(dayjs())
  return (
    <div>
      <h1 className="text-3xl mb-4">Stat Calendar</h1>
      <Calendar value={currentDate} />
      <Navigation value={currentDate} navigate={updateCurrentDate}/>
    </div>)
}

export default App
