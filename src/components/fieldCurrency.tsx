import React from "react"
interface Props {
    value: number
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}
const FieldCurrency = ({ value, handleChange, handleBlur }: Props) => {
    return (
        <div className="input-icon">
            <input
                type="number"
                className="font-rubik text-xl md:text-2xl font-medium text-gray h-14 w-full border border-border rounded pl-9"
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </div>
    )
}

export default FieldCurrency
