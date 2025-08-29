## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    -- getElementById('') : seclect a single element by its unique ID 
    -- getElementsByClassName("class"): Select all elements with the given class. Returns a live HTML Collection. 
    -- querySelector("selector") : Return the first element that matches a CSS selectors 
    -- querySelectorAll("selector") : Return all elements matching a CSS selector as Static Node list  . 

## 2. How do you create and insert a new element into the DOM?

    -- By using document.createElement() we can create a new element , then we can sets its content or attributes , and then insert it in parent not using methods appendChild() or append()

## 3. What is Event Bubbling and how does it work?

    -- Event Bubbling is a process when an event happens on an element , it first runs the handler on athat element , then moves up to its paren , then the ancestor element , until the document can found 

## 4. What is Event Delegation in JavaScript? Why is it useful?

    -- Event Delegation is a technique where adding event listeners to many child element , we add a single event listener to a perent element and use event.target to handle action on the element 

    -- it is useful because it improve performence 
    works dynamically added child elements 

## 5. What is the difference between preventDefault() and stopPropagation() methods?

    -- preventDefault() : prevent default browser behavior 
    stopPropagation() : stop the event from bubbling up to parent elements. 



