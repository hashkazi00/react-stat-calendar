import dayjs, {Dayjs} from "dayjs"


const daysOfTheWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
]

interface Props {
    value: Dayjs
}

const Calendar: React.FC<Props> = ({
    value
}) => {
    const daysInMonth = dayjs(value).daysInMonth()
    const startDate = dayjs(value).startOf('month')
    const prefixDays = dayjs(startDate).day()
    return (
        <div className="">
            <div>{dayjs(value).format('MMMM')} {dayjs(value).year()}</div>
            <div className="grid grid-cols-7">
                {
                    daysOfTheWeek.map(day => {
                        return (<div key={day}>{day}</div>)
                    })
                }
                {
                    Array.from({length: prefixDays}).map((_, index) => {
                        return <div key={index}></div>
                    })
                }
                {
                    Array.from({length: daysInMonth}).map((_, index) => {
                        const date = index + 1
                        return (<div key={date}>{date}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default Calendar