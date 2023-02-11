import { fireEvent, waitFor,render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data"
import store from "../../Utils/Store";
import Cart from "../Cart";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MENU_DATA); 
        },
    });
});

test("Add item to  Cart",async()=>{
const restCard = render(
    <StaticRouter>
        <Provider store={store}>
            <Header/>
            <RestaurantMenu/>
            <Cart/>
        </Provider>
    </StaticRouter>
);
await waitFor(()=> expect(restCard.getByTestId("menu")));

const addBtn = restCard.getAllByTestId("addBtn");
fireEvent.click(addBtn[0]);
fireEvent.click(addBtn[2]);
const cart = restCard.getByTestId("cart");
expect(cart.innerHTML).toBe("Cart - 2 items");
// const cartPage = restCard.getAllByTestId("cart");
// console.log(cartPage)
// fireEvent.click(cart);
// expect(cart).toBe(2);


})

