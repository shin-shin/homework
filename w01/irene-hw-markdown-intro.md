## Cheatsheet for Bash Commands

* **pwd**  
displays the shell's current working directory

* **ls**  
list files in a directory

* **cd**  
changes the shell's working directory to the given directory; can be a relative or absolute path

* **mkdir**  
creates a new directory with the given name

* **rmdir**  
removes the directory with the given name (the directory must be empty)

--- 
* **cp**  
copies a file/directory

* **mv**  
moves (or renames) a file/directory

* **rm**  
deletes a file

* **touch**  
create an empty file

* **open**  
open a file in its default application

* **diff**  
output differences between two files



---
* **locate**  
search for files by name on the entire system

* **which**  
shows the complete path of a command or file


---

* **clear**  
clear all previous commands' output text from the terminal

* **alias, unalias**  
give a pseudonym to another command 
(you may need to enclose the command in quotes if it contains spaces or operators)

* **pico, nano**  
simple text editors

* **echo, printf**  
like println for the shell; outputs a message or value
* **read**  
reads a value from standard input
* **set, unset**  
give values to a variable, or delete a variable
* **export**  
sets a variable that any sub-programs launched by this shell can see
* **let**  
for computing integer variable values
* **source**  
executes commands/statements stored in another file 
(useful for re-loading .bash_profile without logging out)
* **if, [, for, while**  
bash control statements
* **seq**  
outputs a sequence of integers (used with for loops)

---
* **^C or ^\/**  
terminates the currently running process

* **&**  
(special character) when & is placed at the end of a command, that command is run in the background (shell does not wait for the command to finish before returning to the input prompt)

* **bg, fg**  
starts a suspended process running in the background or foreground

---
[Reference](https://courses.cs.washington.edu/courses/cse390a/14au/bash.html