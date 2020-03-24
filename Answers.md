# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

   React is a JavaScript library for building out User Interfaces. It aims to simplify how we interact with and manipulate the DOM through the virtual DOM engine, which will update the DOM for us by 'reacting' to changes in state data, and the rerendering only those Elements affected by the change.

   In a process called “reconciliation”, React will detect that the state of the app has changed. Then it will update the virtual DOM, taking note of which nodes have changed due to the state changes. Finally, once it knows which nodes have changed, it will update only those specific nodes on the actual DOM. This takes a lot of pressure off of our browsers and it’s why React is as powerful as it is.



2. What does it mean to think in react?

   Thinking in React means thinking of you app as being composed of many smaller components that only do one thing (the single responsibility principle), and determining the hirearchy of components (for component nesting, for example). Then we can determine what components will require state data, and think about how to pass the needed data.



3. Describe state.

   'State' can be described as 'the current conditions' of the app. To use a couple analogies: If you’re at a soccer game, and each team has three goals, you might say that the “state” of the game is “tied.” A traffic light has three possible states: red, yellow, and green. Similarly, our applications also have states. If you have a to-do app, it might be said to have a state of “three to-dos, none of which are completed.” Upon completing one of the to-dos you’ve changed the application’s state.



4. Describe props.

   When we want to pass information held on state inside one component to another component, we pass them as props. It works as a variable parameter accepted by a child component, which will get defined upon the component's execution.



5. What are side effects, and how do you sync effects in a React component to state or prop changes?

   A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. We sync effects in a React component to state or prop changes by using the effect hook which takes two arguments. The first is a callback function where we can run the side effect. The second is a dependency array in which we will place some specific data or prop. The effect will be synced with the contents of the dependency array, such that the effect will run if and only if the contents of the dependency array are manipulated.
