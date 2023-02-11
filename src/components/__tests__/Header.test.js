import { render } from "@testing-library/react";
import Header from "../Header";
// import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Utils/Store";
import { StaticRouter } from "react-router-dom/server";
test("logo should load on rendering header", () => {
  // load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

   // Check if logo is loaded
   const logo = header.getByTestId("logo");

   expect(logo.src).toBe("http://localhost/dummyLogo.jpg");
  // const logo = header.getAllByTestId("logo");
  // expect(logo[0].src).toBe("http://localhost/dummyLogo.jpg");
});

test("online status rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");  
  expect(onlineStatus.innerHTML.trim()).toBe("Online");
});


test("cart items 0  rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartItem = header.getByTestId("cart");  
  expect(cartItem.innerHTML).toBe("Cart - 0 items");
});


test("Logout rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const login = header.getByTestId("login");  
  expect(login.innerHTML).toBe("LogIn");
});