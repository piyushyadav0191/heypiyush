import {describe, expect, test} from "vitest"
import {render} from "@testing-library/react"
import Hero from "../src/components/hero"
import PageTitle from "@/components/page-title"

describe("Hero", () => {
    test("renders hero components", () => {
        render(<Hero />).getAllByText("Piyush Yadav")
    })
})

describe("About", () => {
    test("renders page title", () => {
        render(<PageTitle title="About" description="👋 Hi there! I am Piyush." />)
    })
})