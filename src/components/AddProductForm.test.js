import { render, screen, } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../redux/store";
import AddProductForm from "./AddProductForm"
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

test("The submit button is disabled when no values are entered for either input feilds and enabled when input has values", () => {

    render(
        <Provider store={store}>
            <AddProductForm />
        </Provider>,
        );

        expect(screen.getByRole("button", {name: /submit/i})).toBeDisabled();
        
        userEvent.type(screen.getByPlaceholderText(/Enter product name/i), "Lucozade")
        userEvent.type(screen.getByPlaceholderText(/Enter price/i), "40")
        
        expect(screen.getByRole("button", {name: /submit/i})).toBeEnabled();
})