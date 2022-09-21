  
### Go (golang) Loops - A Unified "for"

My primary world has been C# for a while. I've been looking at the Go programming language (golang), and I wanted to write a few articles about things I find interesting about the language. Here is the first:

> **The "for" statement is used for all loops in Go.**

In C#, we have quite a few ways to loop, including "for", "foreach", "while", and "do while". Go uses a single "for" statement to handle all of these situations.

  

_**Motivation**: I have been using C# as a primary language for 15 years. Exploring other languages gives us insight into different ways of handling programming tasks. Even though Go (golang) is not my production language, I've found several features and conventions to be interesting. By looking at different paradigms, we can grow as programmers and become more effective in our primary language._

_**Resources**: For links to a video walkthrough, CodeTour, and additional articles, see [A Tour of Go for the C# Developer](http://www.jeremybytes.com/Demos.aspx#TourOfGo)._

  

### Looping with an Indexer

In C#, the "for" loop sets up an indexer. The Go "for" statement can be used this same way.

  

C#

    // Print the numbers 0 through 9

    for (int i = 0; i < 10; i++)

    {

        Console.WriteLine(i);

    }

  

Go

    // Print the numbers 0 through 9

    for i := 0; i < 10; i++ {

        fmt.PrintLn(i)

    }

  

The syntaxes are quite similar. Some differences: 

*   Go does not have parentheses around the condition.
*   Go has the opening brace on the same line as the "for".
*   Go requires the braces even if the body only has 1 line of code.

  

### Iteration

In C#, the "foreach" loop is handy to iterate over a collection (in reality, anything that implements the IEnumerable interface). Go uses a "for" statement with a range to do this same thing.

  

C#

    // "weekdays" is an array with the days of the week

    foreach(var day in weekdays)

    {

        Console.WriteLine(day);

    }

  

Go

    // "weekdays is an array with the days of the week

    for index, day := range weekdays {

        fmt.Println(weekdays\[index\])

        fmt.Println(day)

    }

  

A big difference in Go is that "range" returns 2 values: the index and the item. If we use the index, then we can index into the collection to get a value out. But if that's what we're doing, we can instead use the value directly.

  

**Side note about unused variables**

In Go, if a variable is declared but not used, the result is a compiler error. With a "range", it is common to use the indexer \*or\* the item, but it is uncommon to use both. In that situation, we can use a "blank identifier" (the '\_' character) to note that we are not going to use that value. This is similar to using a "discard" (also the '\_' character) in C#.

  

Here is a "for" loop that is more equivalent to a "foreach" in C#:

  

Go

    // "weekdays" is an array with the days of the week

    for \_, day := range weekdays {

        fmt.Println(day)

    }

  

**Simple Iteration**

One other option with a "range" is to capture neither the indexer nor the item. This will run the body of the loop one time for each item in the range, but it does not use the index or the item in the body.

  

Go

    // Run a loop one time based on the length of the range

    for range weekdays {

        // do something here

    }

  

This is limited because we do not have access to the thing that we are iterating, but it does let us perform an action a certain number of times (based on the length of the collection).

  

### While Loops

The "for" statement in Go can also be used as a "while" loop.

  

C#

    while (command != "stop")

    {

        // do something with the command

        command = GetNextCommand();

    }

  

Go

    for command != "stop" {

        // do something with the command

        command = getNextCommand()

    }

  

The statements are similar between C# and Go. The condition is set with the "while" or "for", and the state that affects the condition is updated inside the loop.

  

**do / while**

There isn't really a direct way to do a "do / while" loop in Go. In C#, the body of a "do / while" loop will execute at least one time, and the condition is checked after the first iteration of the loop. Personally, I haven't seen a "do / while" loop in quite a while in C#. Generally a "do / while" can be refactored into a standard "while", so this is not a large issue.

  

### Endless Loops

Sometimes we need an endless loop -- okay, generally not endless, but a loop that runs until an explicit "break".

  

C#

    while (true)

    {

        // do something interesting

        if (stopCondition)

            break;

    }

  

Go

    for {

        // do something interesting

        if stopCondition {

            break

        }

    }

  

The "for" statement with no condition sets up an endless loop.

  

_Note: the above format is one way to refactor a "do / while" loop. The "do something interesting" section will run at least one time._

  

### "break" and "continue"

The "break" and "continue" statements in Go work the same as in C#. The "continue" statement will stop the current iteration of the loop and go to the next iteration. The "break" statement will break out of the loop entirely.

  

### Final Thoughts

There are a lot of interesting things about the Go language and the design decisions that were made. I think it's very interesting that the "for" statement can cover so many use cases -- things that require "for", "foreach", and "while" in C#. There are pros and cons to this approach.

  

One "pro" is that there's only one statement to worry about -- if you need a loop, you use "for".

  

The "con" that goes along with this is that there are many different things that can go in the condition, whether it is an indexer, a range, or an empty condition.

  

Personal preference, I kind of like the single "for" statement.

  

Even if you don't end up using Go as a primary language (or even at all), it is interesting to look at how other languages approach certain problems. It can give us ideas of how we can approach things differently in our primary programming language.

  

Happy Coding!
