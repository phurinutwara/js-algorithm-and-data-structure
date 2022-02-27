# What is recursion?

🚀 A **process** (a function in our case) that **calls itself**

# Why do I need to know this ?

- 🗺️ It's **Everywhere**

  - 🧨 `JSON.parse()` \ `JSON.stringify()`
  - ✨ `document.getElementById()` and `DOM traversal algorithm`
  - 🎊 Used in `object traversal`
  - 🎉 We will see it with more `complex data structures`
  - 🧹 It's sometimes a **cleaner alternative** to `iteration`

- 📚 You're used to functions being pushed on the `call stack` and `popped off` when they are done
- ➕ When we write recursive functions, we `keep pushing new functions` onto the `call stack` !

# How recursive functions work

⚙️ Invoke the **same** function with a different input until you reach your `base case` !

- `Base Case` The condition when the recursion ends.
  - **This is the most important concept to understand**
- `Different Input` The input of deeper recursion must not be the same (or it will loop infinitely)

# Where things go wrong

- No `base case`
- Forgetting to `return` or `returning the wrong thing`!
  (Especially return input as output and it going infinite loop)
- Stack overflow! (reached `maximum called stack` or around `10000` stacks)

# Pure Recursion Tips

- For arrays, use methods like `slice`, `the spread operator`, and `concat`
  that make copies of arrays so you don't mutate them
- Remember that strings are immutable so you will need to use methods
  like `slice`, `substr`, or `substring` to make copies of strings
- To make copies of objects use `Object.assign`, or the `spread operator`
