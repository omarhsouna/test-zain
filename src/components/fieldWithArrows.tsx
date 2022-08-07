import React from "react"
interface Props {
    value: number
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
    increment: () => void
    decrement: () => void
}
const FieldWithArrows = ({ value, handleChange, handleBlur, increment, decrement }: Props) => {
    return (
        <div className="relative w-full">
            <button className="arrow-left" onClick={decrement}>
                <svg fill="#CBD5DC" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                </svg>
            </button>
            <input
                type="number"
                className="text-input text-center h-14 w-full border border-border rounded text-sm md:text-base"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <button className="arrow-right" onClick={increment}>
                <svg
                    fill="#CBD5DC"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="KeyboardArrowRightIcon">
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
            </button>
        </div>
    )
}

export default FieldWithArrows
