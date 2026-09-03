/*
Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. Some HTML is provided for you as example content along with a chevron icon.

Requirements
By default, all sections are collapsed and are hidden from view.
Clicking a section title toggles the contents.
If the section is collapsed, the section will be expanded and the contents will be displayed.
If the section is expanded, the section will be collapsed and the contents will be hidden.
The sections are independent of each other.
Example
Try out an example of an accordion component.

Notes
The focus of this question is on functionality, not the styling. Do not spend too much time writing custom CSS.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) and use client-side rendering instead.
You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).
Hints
New
Hint 1: Model each section independently
Treat expansion as a separate choice for every section, identified by something stable rather than its current visual position. Keep that state scoped to one accordion so that multiple instances cannot affect one another.

Hint 2: Drive one view from one state
Derive both the panel visibility and its indicator from the same expanded value. This prevents the icon from claiming a different state than the content, including on the initial collapsed render.

Hint 3: Preserve native interaction
Make only the section header control interactive and use a native button so pointer and keyboard activation work together. Hide collapsed panel content with the platform's hidden-state mechanism, and keep decorative indicators out of the accessibility tree.
*/
import { useState } from "react";
export default function Accordion() {
  const [viewStatus, setViewStatus] = useState(new Array(3).fill(false));
  const data = [
    {
      title: "HTML",
      content: `The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.`,
    },
    {
      title: "CSS",
      content: `Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.`,
    },
    {
      title: "JavaScript",
      content: `JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.`,
    },
  ];
  function handleAccordian(title) {
    let newStatus;
    if (title === "HTML") {
      newStatus = [!viewStatus[0], viewStatus[1], viewStatus[2]];
    } else if (title === "CSS") {
      newStatus = [viewStatus[0], !viewStatus[1], viewStatus[2]];
    } else {
      newStatus = [viewStatus[0], viewStatus[1], !viewStatus[2]];
    }
    setViewStatus(newStatus);
  }
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div onClick={() => handleAccordian(item.title)}>
              {item.title}
              <span
                aria-hidden={true}
                className={`accordion-icon ${viewStatus[i] ? `accordion-icon--rotated` : ""}`}
              />
            </div>
            <div hidden={!viewStatus[i]}>{item.content}</div>
          </div>
        );
      })}
    </div>
  );
}
//css

body {
  font-family: sans-serif;
}

.accordion-icon {
  border: solid currentcolor;
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 8px;
  pointer-events: none;
  transform: translateY(-2px) rotate(45deg);
  width: 8px;
}

.accordion-icon--rotated {
  transform: translateY(2px) rotate(-135deg);
}
