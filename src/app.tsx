import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Button from "@components/button"
import "./index.css"
import products from "./products.json"
import FieldCurrency from "@components/fieldCurrency"
import FieldWithArrows from "@components/fieldWithArrows"
interface Product {
    id: string
    interest: number
    name: string
    min_amount: number
    max_amount: number
    min_tenure: number
    max_tenure: number
    image: string
}

const formatDate = (numberOfMonths: number) => {
    const date = new Date()
    date.setMonth(date.getMonth() + Number(numberOfMonths))
    return date.toLocaleString("en-us", { month: "long", year: "numeric" })
}
const formatDigit = (digit: number) => digit.toLocaleString("en-US")

const App = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
    const [loanAmount, setLoanAmount] = useState(selectedProduct.min_amount)
    const [numberOfMonths, setNumberOfMonths] = useState(selectedProduct.min_tenure)
    const [totalAmount, setTotalAmount] = useState(
        loanAmount + loanAmount * selectedProduct.interest
    )
    const [monthlyInstallment, setMonthlyInstallment] = useState(totalAmount / numberOfMonths)

    useEffect(() => {
        const total = Number(loanAmount) + Number(loanAmount) * selectedProduct.interest
        setTotalAmount(total)
        setMonthlyInstallment(total / numberOfMonths)
    }, [loanAmount, numberOfMonths])

    useEffect(() => {
        setLoanAmount(selectedProduct.min_amount)
        setNumberOfMonths(selectedProduct.min_tenure)
    }, [selectedProduct])

    const handleChangeLoanAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
        setLoanAmount(Number(e.target.value || 0))
    const handleBlurLoanAmount = (e: React.FocusEvent<HTMLInputElement>) =>
        setLoanAmount(
            Math.min(
                selectedProduct.max_amount,
                Math.max(selectedProduct.min_amount, Number(e.target.value || 0))
            )
        )
    const decrementNumberOfMonths = () =>
        setNumberOfMonths(
            Math.min(
                selectedProduct.max_tenure,
                Math.max(selectedProduct.min_tenure, numberOfMonths - 1)
            )
        )
    const incrementNumberOfMonths = () =>
        setNumberOfMonths(
            Math.min(
                selectedProduct.max_tenure,
                Math.max(selectedProduct.min_tenure, numberOfMonths + 1)
            )
        )
    const handleChangeNumberOfMonths = (e: React.ChangeEvent<HTMLInputElement>) =>
        setNumberOfMonths(Number(e.target.value))
    const handleBlurNumberOfMonths = (e: React.FocusEvent<HTMLInputElement>) =>
        setNumberOfMonths(
            Math.min(
                selectedProduct.max_tenure,
                Math.max(selectedProduct.min_tenure, Number(e.target.value))
            )
        )
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-center text-blue text-lg md:text-xl font-work-sans mb-6">
                Let&apos;s plan your <strong>loan.</strong>
            </h1>
            <div className="rounded-lg shadow-box px-5 md:px-20 pt-5 md:pt-7 pb-10 flex flex-col items-center justify-center w-360 md:w-560">
                <div className="flex space-x-3 mb-6">
                    {products.map((product: Product) => (
                        <button
                            key={product.id}
                            className={`rounded-full  h-24 w-24 flex justify-center items-center ${
                                product.id === selectedProduct.id && "bg-border"
                            }`}
                            onClick={() => setSelectedProduct(product)}>
                            <img
                                src={product.image}
                                width="86"
                                height="86"
                                className="rounded-full"
                            />
                        </button>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 w-full">
                    <div className="w-full md:w-56/100 mb-4 md:mb-0">
                        <label className="mb-1 text-xs md:text-sm">Loan amount</label>
                        <FieldCurrency
                            value={loanAmount}
                            handleBlur={handleBlurLoanAmount}
                            handleChange={handleChangeLoanAmount}
                        />
                    </div>
                    <div className="w-full md:w-2/5">
                        <label className="mb-1 text-xs md:text-sm" htmlFor="">
                            Reach goal by
                        </label>
                        <FieldWithArrows
                            value={numberOfMonths}
                            handleChange={handleChangeNumberOfMonths}
                            handleBlur={handleBlurNumberOfMonths}
                            increment={incrementNumberOfMonths}
                            decrement={decrementNumberOfMonths}
                        />
                    </div>
                </div>
                <div className="w-full border border-border rounded-lg mb-8">
                    <div className="h-20 b flex justify-between items-center p-6">
                        <span className="text-lg md:text-xl">Monthly amount</span>
                        <span className="text-2xl md:text-32 text-blue-light font-rubik font-medium">
                            ${formatDigit(monthlyInstallment)}
                        </span>
                    </div>
                    <p className="text-center bg-background p-6 text-xs">
                        You&apos;re planning {numberOfMonths} <strong>monthly deposits</strong> to
                        reach your
                        <strong> ${formatDigit(loanAmount)}</strong> goal by
                        <strong> {formatDate(numberOfMonths)}.</strong>
                        The total amount loaned will be
                        <strong> ${formatDigit(totalAmount)}.</strong>
                    </p>
                </div>
                <Button />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
