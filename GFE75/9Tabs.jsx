/*
Build a tabs component that displays one panel of content at a time depending on the active tab element. Some HTML is provided for you as example content.

Requirements
Clicking a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for the active tab to differentiate it from the non-active tabs.
At all times, only one panel's contents should be displayed — the one corresponding to the active tab.
Support an initial active tab, and ensure multiple instances on the page maintain independent selections.
Notes
The focus of this question is functionality, not styling. There's no need to write any custom CSS except for highlighting the active tab.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc.) and use client-side rendering instead.
You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).
Hints
New
Hint 1: Use one active identity
Represent the current selection with the same stable value used to identify an item, and initialize it from the requested default. The active tab styling and visible panel should both be derived from that single value.

Hint 2: Render pairs from one source
Generate each tab and its panel from the same item so labels, values, and content cannot become misaligned. Native buttons provide the interaction, while inactive panels can be omitted or hidden consistently.

Hint 3: Isolate every instance
Keep active state and event handling within a component instance rather than relying on document-wide selectors. This lets several tab groups use the same implementation without changing one another.
*/


//Approach: 1, simple
//App.js
import Tabs from './Tabs';

export default function App() {
  return <Tabs />;
}


//Tabs.js
import {useState} from "react";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("html");
  function handleActiveTab(tab){
    setActiveTab(tab);
  }
  return (
    <div>
      <div>
        <button className = {activeTab === "html"?"btn":""} onClick = {()=>handleActiveTab("html")}>HTML</button>
        <button className = {activeTab === "css"?"btn":""} onClick = {()=>handleActiveTab("css")}>CSS</button>
        <button className = {activeTab === "js"?"btn":""} onClick = {()=>handleActiveTab("js")}>JavaScript</button>
      </div>
      <div>
        <p className = {activeTab === "html"?"active":""}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
        <p  className = {activeTab === "css"?"active":""}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
        <p  className = {activeTab === "js"?"active":""}>
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </p>
      </div>
    </div>
  );
}


//style.css
body {
  font-family: sans-serif;
}
p{
  display: none;
}
.btn{
  color: blue;
}
.active{
  display: block;
}

//Approach 2: props and dynamic based
//App.js
import Tabs from "./Tabs";

export default function App() {
  return <Tabs
  items = {
    [
      {
        value:"html",
        label:"HTML",
        panel:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
      },
      {
        value:"css",
        label:"CSS",
        panel:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
      },
      {
        value:"js",
        label:"JavaScript",
        panel:"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
      }
    ]
  }
   />;
}

//Tabs.js
import { useState } from "react";
export default function Tabs({ defaultValue, items }) {
  const [value, setValue] = useState(defaultValue ?? items[0].value); //here ?? is nullish coalescing operator that return left value if true otherwise right side value
  function handleActiveTab(tab) {
    setValue(tab);
  }
  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map(({ label, value: valueItem }) => {
          //here value from props used as valueItem name to avoid conflict with alreay existed value of Tab component
          const isActive = valueItem === value;
          return (
            <button
              className={
                ["tabs-list-item", isActive && "tabs-list-item-active"]
                  .filter(Boolean)
                  .join(" ")
                //here Boolean is short form of (value)=>Boolean(value) that return true for
                // truthy value and false for falsy value and here combined with filter to
                // return only truthy value
              }
              onClick={() => handleActiveTab(valueItem)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
      {
        items.map(({value:valueItem, panel})=>{
          const isActive = valueItem === value;
          return (
            <p hidden={!isActive}>{panel}</p>
          )
        })
      }
      </div>
    </div>
  );
}

//styles.css
body {
  font-family: sans-serif;
}
.tabs {
  display: flex;
  flex-direction: column;
}
.tabs-list {
  display: flex;
  gap: 5px;
}
.tabs-list-item {
  --active-color: blueviolet;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
}
.tabs-list-item:hover{
  border-color:var(--active-color) ;
  color: var(--active-color);
}
.tabs-list-item-active,
.tabs-list-item-active:hover
 {
  color: #fff;
  border: 1px solid var(--active-color);
  background-color: var(--active-color);
}
