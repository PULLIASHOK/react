let parent=React.createElement("h2",{id:parent},
   React.createElement("p",{id:child},
    React.createElement("p",{class:heading},"Welcome to React")
   ) 
)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)