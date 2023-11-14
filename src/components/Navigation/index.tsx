import dayjs, {Dayjs} from "dayjs"

interface Props {
    value: Dayjs
    navigate: (val: Dayjs) => void
}

const Navigation: React.FC<Props> = ({
    value,
    navigate
}) => {
    const handlePreviousMonth = () => {
        const previousMonth = dayjs(value).subtract(1, 'month')
        navigate(previousMonth)
    }
    const handleNextMonth = () => {
        const nextMonth = dayjs(value).add(1, 'month')
        navigate(nextMonth)
    }
    return (
        <div className="mt-2 flex gap-x-2">
            <div
                className="border rounded-md px-2 cursor-pointer"
                onClick={handlePreviousMonth}
            >Previous</div>
            <div
                className="border rounded-md px-2 cursor-pointer"
                onClick={handleNextMonth}

            >Next</div>
        </div>
    )
}

export default Navigation