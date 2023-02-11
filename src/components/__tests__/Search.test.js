import { render, waitFor, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import "@testing-library/jest-dom";
import Body from "../Body"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"
import store from "../../Utils/Store"

// dummy function given by jest 
//promise return a readable stream
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(RESTAURANT_DATA); 
        },
    });
});
test("Shimmer load  on homepage" , ()=> {
     const body =  render(
        <StaticRouter>
          <Provider store={store}>
            <Body/>
            </Provider>
            </StaticRouter>
      )
      const shimmer = body.getByTestId("shimmer");
      expect(shimmer.children.length).toBe(10)
    //   console.log(shimmer)
})
test("Restaurant should load on homepage", async()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("search-btn")));
    const restList = body.getByTestId("rest-list");
    expect(restList.children.length).toBe(15);
});

  test("search for string food  should load on Homepage",async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  console.log(body);
    await waitFor(() => expect(body.getByTestId("search-btn")));
    
    const searchInput = body.getByTestId("search-input");
    fireEvent.change(searchInput, {
        target:{
            value:"food",
        },
    });
    // dummy onchange event  
        const searchBtn = body.getByTestId("search-btn")
        fireEvent.click(searchBtn);
        const resList = body.getByTestId("rest-list")
    expect(resList.children.length).toBe(4);
  
//     //console.log(shimmer);
  });