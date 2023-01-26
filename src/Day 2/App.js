/*
bundling,minification,image optimization so parcel doing using other dependencies
parcel is a bundler which minified our code
create a server
parcel cache should  place in gitignore****
node module is doing all this things
Hot module Replacement(HMR)
file watcher Algorithm -c++
bundling
minify
remove console cleaning the code
dev and prod build
super fast build algorithm 
image optimization
caching while development
compatible with older version of browser
https on dev
npx parcel index.html --https
port number manage
consistent hashing algo
0 configure bundler
Treee shaking means remove unwanted code
****
*Transitive dependencies
*
*/
import React from "react";
import ReactDOM from "react-dom/client";
const headindR1 = React.createElement(
  "h1",
  {
    id: "heading1",
    hello: "world",
    key:"h1"
  },
  "helllo react"
);
//React.createElement  => object =>html(DOM)
// JSX = React.createElement => object  => html(DOM)
console.warn(headindR1)
const headindR2 = React.createElement(
  "h2",
  {
    id: "heading2",
    key:"h2"
    // style:{color:"red"}
  },
  "helllo react"
);


const container = React.createElement("div", { id: "container" }, [
  headindR1,
  headindR2,
]);
const list = React.createElement("div", { id: "container" }, [
    React.createElement("ul",{},React.createElement("li", {},"about us")),
        React.createElement("ul",{},React.createElement("li", {}," us")),
            React.createElement("ul",{},React.createElement("li", {},"contact us"))])
//   ]);



const Heading = () => {
    return(<h1 id="title" key ="h1">Hello react</h1>)
} 
const HeadingComponent = () => {
    return(
        <>
        {<Heading/>}
        <h3 id="hello" key="lll">Hello</h3>
        </>
    )
}
    // return (<)
    // };

// we can only have one root element & one render method
const rootR = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside root
rootR.render(<HeadingComponent/>);


// functional componennts
// const heading = () => {
// return (<h1>Hello react</h1>)
// };

// const heading7 = () => (<h1>Hello react</h1>);
//both are  same