import { ReactNode } from 'react';

export interface Topic {
  title: string;
  content: string;
  code?: string;
  output?: string;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export const courseUnits: Unit[] = [
  {
    id: "1",
    title: "Unit 1: Basic Python Constructs",
    description: "History, Data Types, IO, Operators and Basics",
    topics: [
      {
        title: "Introduction, Origin & Applications",
        content: "Python is a high-level, general-purpose programming language conceived in the late 1980s by Guido van Rossum. It emphasizes code readability with significant indentation. It supports structured, object-oriented, and functional programming.\n\nMajor Applications:\n1. Web Development (Django, Flask)\n2. Data Science & Machine Learning\n3. Automation & Scripting\n4. Desktop GUI (Tkinter)\n\nDifferences from other languages: Unlike C++ or Java, Python is interpreted, dynamically typed (no need to declare variable types), and uses indentation instead of braces {} for code blocks.",
        code: `# The 'Zen of Python' highlights Python's design philosophy.\nimport this\n\nprint("\\n--- Python is dynamically typed ---")\nx = 10\nprint("x is", x, type(x))\nx = "Hello"\nprint("x is now", x, type(x))`,
        output: "The Zen of Python, by Tim Peters...\n(Beautiful is better than ugly, Explicit is better than implicit...)\n\n--- Python is dynamically typed ---\nx is 10 <class 'int'>\nx is now Hello <class 'str'>"
      },
      {
        title: "Features, Limitations & Environment",
        content: "Core Features:\n• Easy to Read, Learn and Write.\n• Free and Open Source.\n• Exceptionally Broad Standard Library.\n\nLimitations:\n• Slower Execution Speed compared to compiled languages.\n• High Memory Consumption.\n\nSetting up: You must install Python and set the PATH Environment Variable to run it from any command prompt. You can use the Interactive Help feature via the help() command.",
        code: `import sys\nimport os\n\nprint("Python Version:", sys.version.split()[0])\nprint("Executable PATH:", sys.executable)\n\n# Simulating interactive help\nprint("\\nSimulated help('print'):")\nprint("Help on built-in function print in module builtins:\\nprint(...) prints the values to a stream...")`,
        output: "Python Version: 3.12.x\nExecutable PATH: C:\\Python\\python.exe\n\nSimulated help('print'):\nHelp on built-in function print in module builtins:\nprint(...) prints the values to a stream..."
      },
      {
        title: "Syntax Basics: Indentation, Comments & Keywords",
        content: "Keywords are reserved words (e.g., 'if', 'while', 'import'). Identifiers are user-defined names for variables or functions.\n\nPython Statements: A statement is an instruction the interpreter can execute.\nIndentation: Whitespace is used to define blocks of code.\nDocumentation: Single-line comments use #. Multi-line strings \"\"\"...\"\"\" are used for docstrings.",
        code: `import keyword\n\nprint("Is 'if' a keyword?", keyword.iskeyword('if'))\nprint("Number of keywords:", len(keyword.kwlist))\n\ndef example_func():\n    """This is a docstring describing the function."""\n    # This is a standard comment\n    valid_identifier_1 = True\n    if valid_identifier_1:\n        print("Properly indented block!")\n\nexample_func()\nprint("Docstring:", example_func.__doc__)`,
        output: "Is 'if' a keyword? True\nNumber of keywords: 35\nProperly indented block!\nDocstring: This is a docstring describing the function."
      },
      {
        title: "Variables, Multiple Assignment & Data Types",
        content: "Variables are reserved memory locations to store values. Standard data types:\n1. Numeric (int, float, complex)\n2. Sequence (list, tuple, str)\n3. Boolean (bool)\n4. Set (set, frozenset)\n5. Mapping (dict)\n\nMultiple Assignment allows assigning values to several variables in one line.",
        code: `# Multiple Assignment\nx, y, z = 5, 10.5, "Python"\nprint(f"x: {x}, y: {y}, z: {z}")\n\n# Complex Numbers and Boolean\nc = 3 + 4j\nis_valid = True\n\nprint(f"Complex: {c}, Real part: {c.real}, Imaginary: {c.imag}")\nprint(f"Type of is_valid: {type(is_valid)}")`,
        output: "x: 5, y: 10.5, z: Python\nComplex: (3+4j), Real part: 3.0, Imaginary: 4.0\nType of is_valid: <class 'bool'>"
      },
      {
        title: "Data Type Conversion (Casting)",
        content: "Type conversion changes an entity of one data type into another.\n- Implicit Conversion: Python automatically converts compatible types (e.g., int + float = float).\n- Explicit Conversion (Casting): Using functions like int(), float(), str(), list(), tuple().",
        code: `# Implicit Conversion\nnum_int = 123\nnum_flo = 1.23\nresult = num_int + num_flo\nprint(f"Implicit: {num_int} + {num_flo} = {result} (Type: {type(result)})")\n\n# Explicit Conversion\nnum_str = "456"\ncasted_num = int(num_str)\nprint(f"Explicit int(): '{num_str}' becomes {casted_num} + 10 = {casted_num + 10}")\n\n# Sequence formatting\nword = "Hello"\nprint("List cast:", list(word))`,
        output: "Implicit: 123 + 1.23 = 124.23 (Type: <class 'float'>)\nExplicit int(): '456' becomes 456 + 10 = 466\nList cast: ['H', 'e', 'l', 'l', 'o']"
      },
      {
        title: "Input, Output & The Import Command",
        content: "I/O Functions: input() reads string data from standard input. print() outputs data, supporting formatting arguments like sep (separator) and end.\n\nThe import command allows accessing code from external modules (libraries).",
        code: `import math # Using the import command\n\n# Simulated Input\nradius_str = "5" # Mocking input("Enter radius: ")\nradius = float(radius_str)\n\narea = math.pi * (radius ** 2)\n\n# Output Formatting\nprint("Circle Area Calculation:")\nprint("Radius", radius, sep=": ", end=" units\\n")\nprint(f"Area: {area:.2f} square units")`,
        output: "Circle Area Calculation:\nRadius: 5.0 units\nArea: 78.54 square units"
      },
      {
        title: "Operators, Expressions & Precedence",
        content: "Operators perform computations on operands. Expressions are combinations of operators and operands.\n\nCategories:\n- Arithmetic: +, -, *, /, // (floor), % (modulus), ** (exponent)\n- Comparison: ==, !=, <, >, <=, >=\n- Assignment: =, +=, -=, etc.\n\nPrecedence (PEMDAS): ** is highest, then *, /, //, %, then +, -.\nAssociativity: Mostly Left-to-Right (e.g., 10 - 4 - 2 is (10 - 4) - 2). Exponentiation ** is Right-to-Left (e.g., 2 ** 3 ** 2 is 2 ** (3 ** 2)).",
        code: `a = 15\nb = 4\nprint(f'{a} // {b} = {a//b} (Floor Division)')\nprint(f'{a} % {b} = {a%b} (Modulus)')\n\n# Associativity Demonstration\nleft_to_right = 10 - 4 - 2\nprint(f"10 - 4 - 2 = {left_to_right}") # (10-4)-2 = 4\n\nright_to_left = 2 ** 3 ** 2\nexpr_explicit = 2 ** (3 ** 2)\nprint(f"2 ** 3 ** 2 = {right_to_left} (Same as 2 ** 9: {expr_explicit})")\n\n# Logical Operators\nprint("Logical (True and False):", True and False)`,
        output: "15 // 4 = 3 (Floor Division)\n15 % 4 = 3 (Modulus)\n10 - 4 - 2 = 4\n2 ** 3 ** 2 = 512 (Same as 2 ** 9: 512)\nLogical (True and False): False"
      }
    ]
  },
  {
    id: "2",
    title: "Unit 2: Control Statements and Native Data Types",
    description: "Decision making, Loops, Lists, Tuples, Sets, Dictionary, Strings",
    topics: [
      {
        title: "Decision Making Statements",
        content: "Decision-making statements in Python are used to control the flow of execution based on certain conditions. Python provides `if`, `elif`, and `else` statements for decision-making.\n\n- **if statement**: Evaluates a boolean expression. If True, executes its block.\n- **else statement**: Provides a fallback execution block if the `if` condition is False.\n- **elif statement**: Short for 'else if', it allows sequentially checking multiple conditions.\n\nPython does not have a `switch` statement (though Python 3.10+ introduced `match-case`, `elif` is standard). Instead, chained `if-elif-else` constructs handle multi-way branching. Logical operators (`and`, `or`, `not`) help combine conditions.",
        code: `# Example 1: Standard if-elif-else\nprint("--- Example 1: Age Category ---")\nage = 20\nif age < 13:\n    print("Category: Child")\nelif age >= 13 and age < 18:\n    print("Category: Teenager")\nelif age >= 18 and age < 65:\n    print("Category: Adult")\nelse:\n    print("Category: Senior Citizen")\n\n# Example 2: Nested Decision Making\nprint("\\n--- Example 2: Nested Conditions ---")\ncitizenship = "US"\nif age >= 18:\n    if citizenship == "US":\n        print("Status: Eligible to vote in US elections.")\n    else:\n        print("Status: Not a citizen, cannot vote.")\n\n# Example 3: Ternary Operator\nprint("\\n--- Example 3: Ternary Operator ---")\nstatus = "Eligible" if age >= 18 else "Not Eligible"\nprint(f"Compact Voting status: {status}")`,
        output: "--- Example 1: Age Category ---\nCategory: Adult\n\n--- Example 2: Nested Conditions ---\nStatus: Eligible to vote in US elections.\n\n--- Example 3: Ternary Operator ---\nCompact Voting status: Eligible"
      },
      {
        title: "Python Loops: For & While",
        content: "Loops execute a block of code repeatedly while a specified condition evaluates to true or sequences are exhausted.\n\n- **for loop**: Best for definite iterations over sequences (list, tuple, dictionary, set, string). Frequently paired with the `range(start, stop, step)` function.\n- **while loop**: Best for indefinite iterations where you don't know in advance how many times the loop will run. Execution continues as long as its condition is True.\n\nInterestingly, Python allows `else` blocks on loops, which trigger when the loop naturally terminates (not disrupted by a `break`).",
        code: `# Example 1: For loop with range\nprint("--- Example 1: For loop with range ---")\nfor i in range(2, 9, 2):  # start at 2, up to 9, step by 2\n    print(f"Even number: {i}")\nelse:\n    print("Loop completed normally.")\n\n# Example 2: While loop\nprint("\\n--- Example 2: While loop with else ---")\ncount = 3\nwhile count > 0:\n    print(f"System launch in... {count}")\n    count -= 1\nelse:\n    print("Liftoff!")\n\n# Example 3: Iterating over string\nprint("\\n--- Example 3: String Iteration ---")\nfor char in "PY":\n    print(f"Char: {char}")`,
        output: "--- Example 1: For loop with range ---\nEven number: 2\nEven number: 4\nEven number: 6\nEven number: 8\nLoop completed normally.\n\n--- Example 2: While loop with else ---\nSystem launch in... 3\nSystem launch in... 2\nSystem launch in... 1\nLiftoff!\n\n--- Example 3: String Iteration ---\nChar: P\nChar: Y"
      },
      {
        title: "Python Control Statements (Jump Statements)",
        content: "Control or Jump statements alter the standard sequential flow within loops.\n\n- **break**: Immediately terminates the current loop, skipping its `else` block if present.\n- **continue**: Skips the remaining code inside the current iteration and forces the loop to proceed to the next iteration.\n- **pass**: A null operation doing absolutely nothing. Used purely as a syntactic placeholder to prevent indentation errors in empty blocks.",
        code: `# Example 1: Using 'break'\nprint("--- Example 1: Demonstrating 'break' ---")\nfor target in [10, 20, 30, 40, 50]:\n    if target == 30:\n        print("Target 30 found! Breaking loop.")\n        break\n    print(f"Checking {target}...")\n\n# Example 2: Using 'continue'\nprint("\\n--- Example 2: Demonstrating 'continue' ---")\nfor num in range(1, 6):\n    if num % 2 == 0:\n        continue  # Skip even numbers\n    print(f"Odd number processed: {num}")\n\n# Example 3: Using 'pass'\nprint("\\n--- Example 3: Demonstrating 'pass' ---")\ndef incomplete_function():\n    pass # Keeps parser happy until written\n\nprint("Function definition bypassed cleanly.")`,
        output: "--- Example 1: Demonstrating 'break' ---\nChecking 10...\nChecking 20...\nTarget 30 found! Breaking loop.\n\n--- Example 2: Demonstrating 'continue' ---\nOdd number processed: 1\nOdd number processed: 3\nOdd number processed: 5\n\n--- Example 3: Demonstrating 'pass' ---\nFunction definition bypassed cleanly."
      },
      {
        title: "Python Native Data Types: Numbers & Strings",
        content: "Python handles numeric and string data seamlessly without declaration.\n\n**Numbers:** Include `int` (integers), `float` (decimals), and `complex` (real + imaginary).\n**Strings (`str`):** Arrays of unicode characters. They are completely immutable. \nString features:\n- **Slicing**: Extracting segments using `[start:stop:step]`.\n- **Methods**: Transform strings via `.upper()`, `.lower()`, `.strip()`, `.replace()`, `.join()`, and `.split()`.",
        code: `# Example 1: String Methods\nprint("--- Example 1: String Methods ---")\ntext = "  Python Programming is Fun!  "\nclean_text = text.strip()\nprint(f"Stripped: '{clean_text}'")\nprint(f"Replaced: '{clean_text.replace('Fun', 'Awesome')}'")\nword_list = clean_text.split(' ')\nprint(f"Split List: {word_list}")\n\n# Example 2: String Slicing\nprint("\\n--- Example 2: String Slicing ---")\nword = "PYTHON"\nprint(f"Word: {word}")\nprint(f"First 3 chars: {word[:3]}")\nprint(f"Last 2 chars: {word[-2:]}")\nprint(f"Reversed string: {word[::-1]}")\n\n# Example 3: Number Types\nprint("\\n--- Example 3: Numeric Types ---")\nprint(f"Integer: {10}, Float: {10.5}, Complex: {1+2j}")`,
        output: "--- Example 1: String Methods ---\nStripped: 'Python Programming is Fun!'\nReplaced: 'Python Programming is Awesome!'\nSplit List: ['Python', 'Programming', 'is', 'Fun!']\n\n--- Example 2: String Slicing ---\nWord: PYTHON\nFirst 3 chars: PYT\nLast 2 chars: ON\nReversed string: NOHTYP\n\n--- Example 3: Numeric Types ---\nInteger: 10, Float: 10.5, Complex: (1+2j)"
      },
      {
        title: "Lists (Mutable Sequence)",
        content: "A List is a versatile, ordered, and mutable sequence holding mixed data types inside `[]`. \n\nKey capabilities:\n- Memory efficiency by storing references.\n- Indexing (starts at 0) and negative indexing (starts at -1).\n- Adding items: `append()` (adds 1 to end), `extend()` (merges list), `insert()` (adds at index).\n- Removing items: `remove()` (by value), `pop()` (by index, defaults to end), `clear()`.",
        code: `# Example 1: Adding Items\nprint("--- Example 1: Adding Items ---")\ninventory = ["Sword", "Shield", "Potion"]\ninventory.append("Map")\ninventory.insert(1, "Bow")\nprint(f"Updated Inventory: {inventory}")\n\n# Example 2: Removing Items\nprint("\\n--- Example 2: Removing Items ---")\ninventory.remove("Shield")\ndropped = inventory.pop()\nprint(f"Removed 'Shield', popped '{dropped}'. Remaining: {inventory}")\n\n# Example 3: Nested Lists\nprint("\\n--- Example 3: Nested Lists ---")\nmatrix = [[1, 2], [3, 4]]\nprint(f"Matrix: {matrix}, Element [1][0]: {matrix[1][0]}")`,
        output: "--- Example 1: Adding Items ---\nUpdated Inventory: ['Sword', 'Bow', 'Shield', 'Potion', 'Map']\n\n--- Example 2: Removing Items ---\nRemoved 'Shield', popped 'Map'. Remaining: ['Sword', 'Bow', 'Potion']\n\n--- Example 3: Nested Lists ---\nMatrix: [[1, 2], [3, 4]], Element [1][0]: 3"
      },
      {
        title: "Tuples (Immutable Sequence)",
        content: "Tuples `()` act like lists but are absolutely **immutable**, meaning their content cannot shrink, grow, or change post-creation. They provide faster access speeds and map perfectly as dictionary keys.\n\nA tuple with a single item requires a trailing comma `(item,)`.\nOperations include unpacking mapping variables to tuple elements.",
        code: `# Example 1: Tuple Creation and Access\nprint("--- Example 1: Accessing Tuples ---")\ncoordinates = (10, 20, 30)\nprint(f"Coordinates: {coordinates}")\nprint(f"Extracted X: {coordinates[0]}")\n\n# Example 2: Tuple Unpacking\nprint("\\n--- Example 2: Unpacking ---")\nx, y, z = coordinates\nprint(f"Unpacked variables -> X: {x}, Y: {y}, Z: {z}")\n\n# Example 3: Tuple Methods\nprint("\\n--- Example 3: Tuple Methods ---")\nscores = (85, 90, 85, 100)\nprint(f"Score 85 appears {scores.count(85)} times.")\nprint(f"First occurrence of 100 is at index {scores.index(100)}.")`,
        output: "--- Example 1: Accessing Tuples ---\nCoordinates: (10, 20, 30)\nExtracted X: 10\n\n--- Example 2: Unpacking ---\nUnpacked variables -> X: 10, Y: 20, Z: 30\n\n--- Example 3: Tuple Methods ---\nScore 85 appears 2 times.\nFirst occurrence of 100 is at index 3."
      },
      {
        title: "Sets (Unordered Unique Collection)",
        content: "Sets `{}` manage unordered collections containing strictly distinct unique elements. Adding duplicates silently fails.\n\nSets excel mathematically, allowing high-performance membership testing and comparative operations:\n- `Union |`: Merges values.\n- `Intersection &`: Only shared values.\n- `Difference -`: Values in Set A absent from Set B.\n- `Symmetric Difference ^`: Values in one set, but not both.",
        code: `# Example 1: Mutating Sets\nprint("--- Example 1: Set Mutation ---")\nadmins = {"alice", "bob", "charlie"}\nadmins.add("frank")\nadmins.add("bob") # Duplicate ignored\nadmins.discard("bob") # Safe removal\nprint(f"Admins: {admins}")\n\n# Example 2: Set Operations (Union & Intersection)\nprint("\\n--- Example 2: Set Operations ---")\nmoderators = {"charlie", "dave", "eve"}\nprint(f"Union (All unique): {admins | moderators}")\nprint(f"Intersection (Shared): {admins & moderators}")\n\n# Example 3: Differences\nprint("\\n--- Example 3: Set Differences ---")\nprint(f"Difference (Admin-Only): {admins - moderators}")\nprint(f"Symmetric Difference (Non-Shared): {admins ^ moderators}")`,
        output: "--- Example 1: Set Mutation ---\nAdmins: {'alice', 'charlie', 'frank'}\n\n--- Example 2: Set Operations ---\nUnion (All unique): {'eve', 'dave', 'alice', 'charlie', 'frank'}\nIntersection (Shared): {'charlie'}\n\n--- Example 3: Set Differences ---\nDifference (Admin-Only): {'alice', 'frank'}\nSymmetric Difference (Non-Shared): {'eve', 'dave', 'alice', 'frank'}"
      },
      {
        title: "Dictionaries (Key-Value Mapping)",
        content: "Dictionaries `{key: value}` are mutable collections associating unique keys with mapped values. Keys are completely indexed, making lookup `O(1)` fast.\n\nKey features:\n- Methods: `.keys()`, `.values()`, and `.items()` return dictionary views.\n- Extraction: `dict.get(key, default)` safely returns a value without crashing if missing.\n- Updates: `dict.update()` merges new objects into the map.",
        code: `# Example 1: Creation and Updating\nprint("--- Example 1: Dict Updates ---")\nemployee = {"id": 101, "name": "Sarah"}\nemployee["salary"] = 85000\nprint(f"Employee Dict: {employee}")\nprint(f"Safe access (missing): {employee.get('dept', 'N/A')}")\n\n# Example 2: Iterating Dictionary\nprint("\\n--- Example 2: Key-Value Iteration ---")\nfor key, value in employee.items():\n    print(f" - {key.capitalize()}: {value}")\n\n# Example 3: Dict Views\nprint("\\n--- Example 3: Dictionary Views ---")\nprint(f"Keys: {list(employee.keys())}")\nprint(f"Values: {list(employee.values())}")`,
        output: "--- Example 1: Dict Updates ---\nEmployee Dict: {'id': 101, 'name': 'Sarah', 'salary': 85000}\nSafe access (missing): N/A\n\n--- Example 2: Key-Value Iteration ---\n - Id: 101\n - Name: Sarah\n - Salary: 85000\n\n--- Example 3: Dictionary Views ---\nKeys: ['id', 'name', 'salary']\nValues: [101, 'Sarah', 85000]"
      }
    ]
  },
  {
    id: "3",
    title: "Unit 3: Functions & Modules",
    description: "User-defined functions, Recursion, Packages",
    topics: [
      {
        title: "Introduction to Functions & Reusability",
        content: "A function in Python is a reusable block of code that performs a specific task. It helps in breaking a large program into smaller, manageable, and organized parts (Modularity). \n\n**Advantages of Functions:**\n1. **Code Reusability**: Write once, use multiple times.\n2. **Modularity**: Breaks large programs into smaller parts.\n3. **Improves Readability**: Makes code easy to understand.\n4. **Easy Debugging**: Errors are isolated and corrected easily.\n5. **Maintenance**: Changes can be made in one central place.\n\nA function is composed of a **Called Segment** (the definition using the `def` keyword) and a **Calling Segment** (where the execution gets requested).",
        code: `# Example 1: Basic Function Definition & Call
print("--- Example 1: Simple Function ---")
def display_message():
    # Called Segment
    print("Welcome to Python Programming!")

# Calling Segment
display_message()

# Example 2: Formal vs Actual Parameters
print("\\n--- Example 2: Parameters ---")
def calculate_total(price, quantity):  # price, quantity: Formal parameters
    return price * quantity

result = calculate_total(100, 3)       # 100, 3: Actual parameters
print("Total Amount =", result)

# Example 3: Different return types
print("\\n--- Example 3: Function variations ---")
def get_number():
    return 50 # Arguments: No, Return: Yes

print(f"Got number: {get_number()}")`,
        output: "--- Example 1: Simple Function ---\nWelcome to Python Programming!\n\n--- Example 2: Parameters ---\nTotal Amount = 300\n\n--- Example 3: Function variations ---\nGot number: 50"
      },
      {
        title: "Built-In vs Anonymous (Lambda) Functions",
        content: "**Built-in Functions:** Python provides several predefined functions (e.g., `max()`, `min()`, `sum()`, `len()`, `abs()`). You only need to call them without defining them.\n\n**Anonymous (Lambda) Functions:** Small, one-line functions defined without a proper name using the `lambda` keyword. They can take any number of arguments but only allow exactly one expression. Lambda functions are heavily used alongside `map()`, `filter()`, and `sorted()` calls.",
        code: `# Example 1: Using Built-in Functions
print("--- Example 1: Built-in functions ---")
numbers = [10, 25, 5, 30, 15]
print("Max value:", max(numbers))
print("Min value:", min(numbers))
print("Sum of values:", sum(numbers))
print("Absolute diff:", abs(max(numbers) - min(numbers)))

# Example 2: Simple Lambda Function
print("\\n--- Example 2: Basic Lambda ---")
square = lambda x: x * x
print("Square of 6:", square(6))

# Example 3: Lambda with Multiple Arguments
print("\\n--- Example 3: Mathematical Lambda ---")
add_three = lambda a, b, c: a + b + c
print("Sum of 2, 4, 6:", add_three(2, 4, 6))`,
        output: "--- Example 1: Built-in functions ---\nMax value: 30\nMin value: 5\nSum of values: 85\nAbsolute diff: 25\n\n--- Example 2: Basic Lambda ---\nSquare of 6: 36\n\n--- Example 3: Mathematical Lambda ---\nSum of 2, 4, 6: 12"
      },
      {
        title: "Pass by Value vs Pass by Reference",
        content: "**Pass by Value:** Applies to **Immutable** types (int, float, string, tuple). A copy of the value is passed into the function. Changes made inside do *not* affect the original variable.\n\n**Pass by Reference:** Applies to **Mutable** types (list, dict, set). The actual object reference is passed. Any changes made inside the function directly alter the original object outside.",
        code: `# Example 1: Pass by Value (Immutable)
print("--- Example 1: Pass by Value (int) ---")
def modify_number(x):
    x = x + 10
    print("  Inside function (x):", x)

num = 5
modify_number(num)
print("Outside function (num):", num, "<- Unchanged!")

# Example 2: Pass by Reference (Mutable)
print("\\n--- Example 2: Pass by Reference (list) ---")
def modify_list(lst):
    lst.append(100)
    print("  Inside function (lst):", lst)

numbers_list = [1, 2, 3]
modify_list(numbers_list)
print("Outside function (numbers):", numbers_list, "<- Modified!")

# Example 3: Attempting to reset a referenced list
print("\\n--- Example 3: Reference re-assignment ---")
def reset_list(lst):
    lst = [9, 9, 9] # Overwrites the local variable copy, not original
    print("  Inside function:", lst)

reset_list(numbers_list)
print("Outside function:", numbers_list)`,
        output: "--- Example 1: Pass by Value (int) ---\n  Inside function (x): 15\nOutside function (num): 5 <- Unchanged!\n\n--- Example 2: Pass by Reference (list) ---\n  Inside function (lst): [1, 2, 3, 100]\nOutside function (numbers): [1, 2, 3, 100] <- Modified!\n\n--- Example 3: Reference re-assignment ---\n  Inside function: [9, 9, 9]\nOutside function: [1, 2, 3, 100]"
      },
      {
        title: "Variable Scope and Lifetime",
        content: "Variables have a specific scope (where they can be accessed) and lifetime (how long they exist in memory).\n\n1. **Local Variables:** Defined inside a function. Accessible only inside that function.\n2. **Global Variables:** Defined outside any function. Accessible everywhere.\n3. **The `global` Keyword:** Used inside a function to modify a global variable instead of creating a local one.",
        code: `# Example 1: Local vs Global Scope
print("--- Example 1: Scopes ---")
global_var = "I am Global"

def display_scopes():
    local_var = "I am Local"
    print(global_var)
    print(local_var)
display_scopes()
# print(local_var) -> This would cause an Error!

# Example 2: Modifying Global Variables
print("\\n--- Example 2: Keyword 'global' ---")
count = 0
def increment():
    global count
    count += 5
increment()
print("Global count is now:", count)

# Example 3: Variable Lifetime
print("\\n--- Example 3: Lifetime ---")
def lifecycle():
    x = 10 # Born here
    print(f"x is {x} alive inside function")
    # x dies here
lifecycle()
print("Outside, x is destroyed and forgotten.")`,
        output: "--- Example 1: Scopes ---\nI am Global\nI am Local\n\n--- Example 2: Keyword 'global' ---\nGlobal count is now: 5\n\n--- Example 3: Lifetime ---\nx is 10 alive inside function\nOutside, x is destroyed and forgotten."
      },
      {
        title: "Recursion",
        content: "Recursion is a process in which a function calls itself to solve a smaller part of the same problem until a stopping condition is reached. Every recursive function **must** have a base case to prevent a crash (infinite recursion error).\n\n**Key Components:**\n1. **Base Case:** the stopping condition.\n2. **Recursive Call:** calling itself with simpler values.\nRecursion uses stack memory and can make code shorter and elegant.",
        code: `# Example 1: Factorial using recursion
print("--- Example 1: Factorial ---")
def factorial(n):
    if n == 1: # Base Case
        return 1
    else:
        return n * factorial(n - 1) # Recursive Case

print("Factorial of 5:", factorial(5))
# Process: 5*(4*(3*(2*(1)))) = 120

# Example 2: Countdown Recursion
print("\\n--- Example 2: Countdown ---")
def countdown(n):
    if n <= 0:
        print("Blastoff!")
    else:
        print(n)
        countdown(n - 1)

countdown(3)

# Example 3: Recursive Sum
print("\\n--- Example 3: Sum Sequence ---")
def sum_to(x):
    if x == 0: return 0
    return x + sum_to(x - 1)
print("Sum 1 to 4:", sum_to(4))`,
        output: "--- Example 1: Factorial ---\nFactorial of 5: 120\n\n--- Example 2: Countdown ---\n3\n2\n1\nBlastoff!\n\n--- Example 3: Sum Sequence ---\nSum 1 to 4: 10"
      },
      {
        title: "Creating, Importing and Path Searching of Modules",
        content: "A **Module** is just a Python file (`.py`) containing code. We use them for code organization.\n\n- **Creating a module:** Simply save code in a file (e.g., `mymodule.py`).\n- **Importing:** Use `import mymodule` or `from mymodule import function_name`.\n- **Path Searching:** Python looks for modules in current directory, `PYTHONPATH`, and standard library directories (via `sys.path`).\n- **Module Reloading:** Done via the `importlib` module to refresh changes dynamically without restarting.",
        code: `# Example 1: Examining Module Paths
print("--- Example 1: sys.path ---")
import sys
print("Python searches these paths for modules:")
for path in sys.path[:3]: # Printing top 3 paths
    print(f" -> {path}")

# Example 2: Module Aliasing
print("\\n--- Example 2: Module 'as' Aliasing ---")
import math as m
print(f"Using m.pi: {m.pi}")

# Example 3: Module Reloading (Concept)
print("\\n--- Example 3: Module Reloading ---")
import importlib
import math
importlib.reload(math)
print("Math module successfully reloaded in memory!")`,
        output: "--- Example 1: sys.path ---\nPython searches these paths for modules:\n -> D:\\Python notes\n -> C:\\Python3\\Lib\n -> C:\\Python3\\Lib\\site-packages\n\n--- Example 2: Module 'as' Aliasing ---\nUsing m.pi: 3.141592653589793\n\n--- Example 3: Module Reloading ---\nMath module successfully reloaded in memory!"
      },
      {
        title: "Python Packages: Standard vs User-Defined",
        content: "A **Python Package** is a folder containing a collection of related modules, requiring an `__init__.py` file to be recognized by Python.\n\n- **Writing Python Packages:** Create a folder, add `__init__.py`, and save modules inside. Import via `import package.module`.\n- **Standard Libraries:** Python includes vast external standard packages. Commonly in data science: `NumPy` limits looping overhead, and `matplotlib` helps with chart visualization.",
        code: `# Example 1: Simulating User-Defined Package
print("--- Example 1: User Package Architecture ---")
print("Folder Structure required:")
print("my_package/")
print("   |-- __init__.py")
print("   |-- math_tools.py")
print("Usage: from my_package.math_tools import add_calc")

# Example 2: Standard Package - NumPy (Concept)
print("\\n--- Example 2: Standard Package (NumPy) ---")
print(">> import numpy as np")
print(">> matrix = np.array([[1, 2], [3, 4]])")
print("NumPy runs fast C-backend multidimensional arrays.")

# Example 3: Standard Package - Matplotlib (Concept)
print("\\n--- Example 3: Charting (Matplotlib) ---")
print(">> import matplotlib.pyplot as plt")
print(">> plt.plot([1, 2, 3], [4, 5, 1])")
print(">> plt.show()")
print("Matplotlib handles full 2D graphic rendering.")`,
        output: "--- Example 1: User Package Architecture ---\nFolder Structure required:\nmy_package/\n   |-- __init__.py\n   |-- math_tools.py\nUsage: from my_package.math_tools import add_calc\n\n--- Example 2: Standard Package (NumPy) ---\n>> import numpy as np\n>> matrix = np.array([[1, 2], [3, 4]])\nNumPy runs fast C-backend multidimensional arrays.\n\n--- Example 3: Charting (Matplotlib) ---\n>> import matplotlib.pyplot as plt\n>> plt.plot([1, 2, 3], [4, 5, 1])\n>> plt.show()\nMatplotlib handles full 2D graphic rendering."
      }
    ]
  },
  {
    id: "4",
    title: "Unit 4: Exception Handling & File Processing",
    description: "Exception handling methods and file operations",
    topics: [
      {
        title: "Introduction to Exceptions & Built-in Exceptions",
        content: "Errors in Python occur in two forms: **Syntax Errors** (incorrect grammar before execution) and **Exceptions** (errors occurring during execution). Exception handling is essential because it helps the program manage errors safely instead of crashing immediately. It allows developers to log, notify, or recover from errors.\n\nPython provides several **Built-in Exceptions** triggered automatically:\n- `ZeroDivisionError`: Dividing by zero.\n- `ValueError`: Invalid sequence value passed (e.g., `int('abc')`).\n- `TypeError`: Operations applied to an inappropriate type (e.g., `'Text' + 5`).\n- `IndexError`: Accessing a list out of bounds.\n- `KeyError`: Key not found in a dictionary.\n- `FileNotFoundError`: Accessing a file that does not exist.\n- `NameError`: Variable not defined before use.",
        code: `# Example 1: Division by Zero
print("--- Example 1: ZeroDivisionError ---")
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Caught: Cannot divide by zero.")

# Example 2: Type, Index, and Name Errors
print("\\n--- Example 2: Common Built-in Errors ---")
try:
    my_list = [1, 2, 3]
    print(my_list[5]) # IndexError
except IndexError:
    print("Caught IndexError: List index out of range!")

try:
    print(undefined_variable) # NameError
except NameError:
    print("Caught NameError: Variable not defined!")

# Example 3: KeyError & ValueError
print("\\n--- Example 3: Value and Key Errors ---")
try:
    data = {"name": "Alice"}
    print(data["age"]) # KeyError
except KeyError:
    print("Caught KeyError: Key not found in dictionary")

try:
    number = int("abc") # ValueError
except ValueError:
    print("Caught ValueError: Invalid input, please enter a number")`,
        output: "--- Example 1: ZeroDivisionError ---\nCaught: Cannot divide by zero.\n\n--- Example 2: Common Built-in Errors ---\nCaught IndexError: List index out of range!\nCaught NameError: Variable not defined!\n\n--- Example 3: Value and Key Errors ---\nCaught KeyError: Key not found in dictionary\nCaught ValueError: Invalid input, please enter a number"
      },
      {
        title: "Handling Exceptions (try, except, else, finally)",
        content: "Python handles exceptions robustly using five core keywords: `try`, `except`, `else`, `finally`, and `raise`.\n- **`try`**: Holds the code that may cause an error.\n- **`except`**: Handles the error if it occurs.\n- **`else`**: Runs *only* if no error occurs in the try block.\n- **`finally`**: Always executes, whether an error occurs or not. Used for cleanup.",
        code: `# Example 1: Try, Except, and Else
print("--- Example 1: No Error (Else block runs) ---")
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error")
else:
    print(f"Result is {result}")

# Example 2: Catching Errors
print("\\n--- Example 2: Except Block ---")
try:
    a = 10
    b = 0
    print(a/b)
except:
    print("Error occurred while dividing")

# Example 3: The Finally Block
print("\\n--- Example 3: Using Finally ---")
try:
    print("Processing...")
    raise TypeError("Forced Error")
except TypeError:
    print("Handled TypeError.")
finally:
    print("Program finished (finally block always runs)")`,
        output: "--- Example 1: No Error (Else block runs) ---\nResult is 5.0\n\n--- Example 2: Except Block ---\nError occurred while dividing\n\n--- Example 3: Using Finally ---\nProcessing...\nHandled TypeError.\nProgram finished (finally block always runs)"
      },
      {
        title: "User-Defined Exceptions & Case Study",
        content: "You can raise custom exceptions to handle specific logic rules using the `raise` keyword. \n\n**Case Study Assignment:** *Student Marks Management System*.\nThe program must manage student marks (between 0 and 100). If text is entered, handle `ValueError`. If marks are >100 or <0, trigger a custom exception using `raise`. Finally block must execute to complete the sequence.",
        code: `# Example 1: Using 'raise' Keyword for Age
print("--- Example 1: Validating Age ---")
age = 15
try:
    if age < 18:
        raise Exception("You are not eligible")
    else:
        print("You are eligible")
except Exception as e:
    print(f"Exception Caught: {e}")

# Example 2: Custom Exception Definition
print("\\n--- Example 2: Custom Exception Class ---")
class InvalidMarksError(Exception):
    pass # Simple custom exception definition
print("Custom defined 'InvalidMarksError' successfully.")

# Example 3: Case Study - Student Marks System
print("\\n--- Example 3: Marks Case Study System ---")
marks_input = "105" # Simulating user input
try:
    marks = int(marks_input) # May cause ValueError
    if marks < 0 or marks > 100:
        raise InvalidMarksError("Marks must be between 0 and 100!")
    print(f"Student scored: {marks}")
except ValueError:
    print("Error: Please enter a valid number, not text.")
except InvalidMarksError as e:
    print(f"System Error: {e}")
finally:
    print("Session completely closed.")`,
        output: "--- Example 1: Validating Age ---\nException Caught: You are not eligible\n\n--- Example 2: Custom Exception Class ---\nCustom defined 'InvalidMarksError' successfully.\n\n--- Example 3: Marks Case Study System ---\nSystem Error: Marks must be between 0 and 100!\nSession completely closed."
      },
      {
        title: "Concept of Files and Reading/Writing Data",
        content: "File processing enables data persistence. Python treats files as objects and accesses them using the `open(filename, mode)` function. Modes include:\n- **`r` (Read):** Default. Opens for reading. Fails if file doesn't exist.\n- **`w` (Write):** Opens for writing. Overwrites existing data or creates new.\n- **`a` (Append):** Opens for writing. Adds data to the end of the file.\n\nEvery opened file should ideally be closed using `close()` to protect memory, though Python's `with open()` statement handles automatic closing.",
        code: `# Example 1: Writing Data to a File
print("--- Example 1: Writing File ('w') ---")
with open("test.txt", "w") as file:
    file.write("Hello, File Handling!\\n")
    file.write("Second line writing test.")
print("Created and wrote to 'test.txt'")

# Example 2: Appending Data
print("\\n--- Example 2: Appending File ('a') ---")
with open("test.txt", "a") as file:
    file.write("\\nThird line automatically appended.")
print("Appended successfully.")

# Example 3: Reading the Entire File
print("\\n--- Example 3: Reading File ('r') ---")
with open("test.txt", "r") as file:
    data = file.read()
print("File Contents:\\n" + data)`,
        output: "--- Example 1: Writing File ('w') ---\nCreated and wrote to 'test.txt'\n\n--- Example 2: Appending File ('a') ---\nAppended successfully.\n\n--- Example 3: Reading File ('r') ---\nFile Contents:\nHello, File Handling!\nSecond line writing test.\nThird line automatically appended."
      },
      {
        title: "File Handling Functions (open, close, read, write)",
        content: "Python provides multiple granular methods to handle stream data correctly:\n- **`read(size)`**: Reads a specified number of bytes or the entire file if omitted.\n- **`readline()`**: Reads only a single line until a newline `\\n`.\n- **`readlines()`**: Reads all lines and returns them as a python List.\n- **`write()` vs `writelines()`**: `write` inserts strings, while `writelines` inserts lists of strings.",
        code: `# Setup mock file
with open("data.txt", "w") as f: f.write("Line1\\nLine2\\nLine3")

# Example 1: Using readline()
print("--- Example 1: reading singles ---")
file = open("data.txt", "r")
print("First:", file.readline().strip())
print("Second:", file.readline().strip())
file.close() # Managing closure manually

# Example 2: Using readlines() List
print("\\n--- Example 2: reading lists ---")
with open("data.txt", "r") as file:
    lines = file.readlines() # Generates a list
print("Lines List:", lines)

# Example 3: Writing Lists
print("\\n--- Example 3: using writelines ---")
with open("data.txt", "w") as file:
    file.writelines(["A\\n", "B\\n", "C"])
with open("data.txt", "r") as file:
    print("New state:\\n" + file.read())`,
        output: "--- Example 1: reading singles ---\nFirst: Line1\nSecond: Line2\n\n--- Example 2: reading lists ---\nLines List: ['Line1\\n', 'Line2\\n', 'Line3']\n\n--- Example 3: using writelines ---\nNew state:\nA\nB\nC"
      },
      {
        title: "File Pointers (seek & tell) & OS Directories",
        content: "**Pointer Adjustments:** The `tell()` method returns the exact current byte position of the file pointer. The `seek(offset)` method explicitly moves the pointer to a target byte.\n\n**OS Modules:** Through the `os` module, you can manage files operating system-wide (e.g., `os.rename(old, new)`, `os.remove(file)`, `os.mkdir(dir)`).",
        code: `# Example 1: File Pointers
print("--- Example 1: seek() and tell() ---")
with open("demo.txt", "w") as f: f.write("Python Programming")

with open("demo.txt", "r") as f:
    print("Start position:", f.tell())
    f.seek(7) # Move cursor right past 'Python '
    print("New position:", f.tell())
    print("Read rest:", f.read())

# Example 2: Renaming & Deleting Files
print("\\n--- Example 2: OS file management ---")
import os
# We create a dummy file to interact with
open('dummy.txt', 'w').close() 

os.rename("dummy.txt", "renamed.txt")
print("Successfully renamed 'dummy.txt' to 'renamed.txt'")

os.remove("renamed.txt")
print("Successfully deleted 'renamed.txt'")

# Example 3: Creating Directories
print("\\n--- Example 3: OS directories ---")
# os.mkdir("NewFolder")  (simulated logic to prevent actual OS littering)
print("os.mkdir('NewFolder') executed. Folder generated.")
print("os.rmdir('NewFolder') executed. Folder deleted.")`,
        output: "--- Example 1: seek() and tell() ---\nStart position: 0\nNew position: 7\nRead rest: Programming\n\n--- Example 2: OS file management ---\nSuccessfully renamed 'dummy.txt' to 'renamed.txt'\nSuccessfully deleted 'renamed.txt'\n\n--- Example 3: OS directories ---\nos.mkdir('NewFolder') executed. Folder generated.\nos.rmdir('NewFolder') executed. Folder deleted."
      }
    ]
  },
  {
    id: "5",
    title: "Unit 5: Tkinter GUI Programming",
    description: "Building interactive desktop applications with Python GUI",
    topics: [
      {
        title: "Introduction to Tkinter",
        content: "**What is Tkinter?**\nTkinter is Python's standard Graphical User Interface (GUI) library that comes built-in with Python. It allows developers to build desktop applications with windows, buttons, forms, and interactive components without any additional installation.\n\n**Why Use Tkinter?**\n- Built-in: No external dependencies required\n- Cross-platform: Works on Windows, Mac, and Linux\n- Lightweight: Minimal resource usage, ideal for beginners\n- Simple: Easy syntax for quick prototyping\n\n**Common Uses:**\n1. Desktop Applications (Calculators, Notepads, Text Editors)\n2. Form-Based Applications (Login, Registration, Data Entry)\n3. Educational Tools (Quiz Applications, Learning Simulations)\n4. File Management Applications (File Explorers, Backup Tools)\n5. Simple Games (Tic-Tac-Toe, Snake, Puzzle Games)\n6. Database Front-ends (Student/Employee Management Systems)\n7. Automation Tools (Script runners with GUI controls)",
        code: `# Example 1: Creating a Basic Tkinter Window
print("--- Example 1: Simple Window ---")
print("import tkinter as tk")
print("root = tk.Tk()")
print("root.title('My Application')")
print("root.geometry('400x300')")
print("root.mainloop()")

# Example 2: Understanding the Core Steps
print("\\n--- Example 2: Tkinter Workflow ---")
print("Step 1: Import tkinter module")
print("Step 2: Create root window using tk.Tk()")
print("Step 3: Set window properties (title, size, color)")
print("Step 4: Create and place widgets (buttons, labels, etc.)")
print("Step 5: Start event loop with mainloop()")

# Example 3: Why Tkinter Matters
print("\\n--- Example 3: Benefits for Students ---")
print("- Learn GUI concepts practically")
print("- Build real desktop applications")
print("- Understand event-driven programming")
print("- No external packages needed to get started")`,
        output: "--- Example 1: Simple Window ---\nimport tkinter as tk\nroot = tk.Tk()\nroot.title('My Application')\nroot.geometry('400x300')\nroot.mainloop()\n\n--- Example 2: Tkinter Workflow ---\nStep 1: Import tkinter module\nStep 2: Create root window using tk.Tk()\nStep 3: Set window properties (title, size, color)\nStep 4: Create and place widgets (buttons, labels, etc.)\nStep 5: Start event loop with mainloop()\n\n--- Example 3: Benefits for Students ---\n- Learn GUI concepts practically\n- Build real desktop applications\n- Understand event-driven programming\n- No external packages needed to get started"
      },
      {
        title: "Layout Managers: pack(), grid(), place()",
        content: "To organize widgets in a Tkinter window, three geometry managers are available:\n\n**1. pack() Method:**\nOrganizes widgets in blocks (Top, Bottom, Left, Right). Simple and intuitive.\n\n**2. grid() Method:**\nOrganizes widgets in a tabular row-column format. Most flexible for complex layouts.\n\n**3. place() Method:**\nPositions widgets at absolute (x, y) coordinates. Precise but requires manual positioning.\n\n**Important:** Never mix pack() and grid() in the same parent window!",
        code: `# Example 1: Using pack() Manager
print("--- Example 1: pack() Layout ---")
print("import tkinter as tk")
print("root = tk.Tk()")
print("tk.Label(root, text='Top').pack(side='top', fill='x')")
print("tk.Label(root, text='Bottom').pack(side='bottom', fill='x')")
print("tk.Label(root, text='Left').pack(side='left', fill='y')")
print("root.mainloop()")

# Example 2: Using grid() Manager for Forms
print("\\n--- Example 2: grid() for Forms ---")
print("tk.Label(root, text='Username:').grid(row=0, column=0)")
print("tk.Entry(root).grid(row=0, column=1)")
print("tk.Label(root, text='Password:').grid(row=1, column=0)")
print("tk.Entry(root).grid(row=1, column=1)")

# Example 3: Using place() for Absolute Positioning
print("\\n--- Example 3: place() Positioning ---")
print("tk.Label(root, text='Fixed at X,Y').place(x=50, y=50)")
print("tk.Button(root, text='Bottom Right').place(x=300, y=250)")`,
        output: "--- Example 1: pack() Layout ---\nimport tkinter as tk\nroot = tk.Tk()\ntk.Label(root, text='Top').pack(side='top', fill='x')\ntk.Label(root, text='Bottom').pack(side='bottom', fill='x')\ntk.Label(root, text='Left').pack(side='left', fill='y')\nroot.mainloop()\n\n--- Example 2: grid() for Forms ---\ntk.Label(root, text='Username:').grid(row=0, column=0)\ntk.Entry(root).grid(row=0, column=1)\ntk.Label(root, text='Password:').grid(row=1, column=0)\ntk.Entry(root).grid(row=1, column=1)\n\n--- Example 3: place() Positioning ---\ntk.Label(root, text='Fixed at X,Y').place(x=50, y=50)\ntk.Button(root, text='Bottom Right').place(x=300, y=250)"
      },
      {
        title: "Priority Widget 1: Scrollbar",
        content: "A **Scrollbar** is a widget that provides a slide control mechanism for navigating large content within windows (Text, Listbox, Canvas, Frame). It displays a slider and arrow buttons to scroll vertically or horizontally.\n\n**How to Link a Scrollbar:**\n1. Create a Scrollbar widget\n2. Configure the content widget's `yscrollcommand` parameter to point to the scrollbar\n3. Configure the scrollbar's `command` parameter to call the content widget's yview/xview method\n4. Arrange them side-by-side using pack() or grid()",
        code: `# Example 1: Scrollbar with Listbox
import tkinter as tk
root = tk.Tk()
root.title("Scrollbar Example")
root.geometry("300x200")

# Create scrollbar on the right
scrollbar = tk.Scrollbar(root)
scrollbar.pack(side="right", fill="y")

# Create listbox linked to scrollbar
listbox = tk.Listbox(root, yscrollcommand=scrollbar.set)
for i in range(1, 31):
    listbox.insert("end", f"Item {i}")
listbox.pack(side="left", fill="both", expand=True)

# Link scrollbar to listbox
scrollbar.config(command=listbox.yview)

# Example 2: Scrollbar with Text Widget
print("--- Example 2: Scrollbar with Text ---")
# text = tk.Text(root, yscrollcommand=scrollbar.set)
# text.pack(fill="both", expand=True)
# scrollbar.config(command=text.yview)

# Example 3: Horizontal Scrollbar
print("--- Example 3: Horizontal Scrollbar ---")
# hscroll = tk.Scrollbar(root, orient="horizontal")
# entry = tk.Entry(root, xscrollcommand=hscroll.set)
# hscroll.config(command=entry.xview)

root.mainloop()`,
        output: "Simulator: Displaying Listbox with Items 1-30 and a working vertical Scrollbar."
      },
      {
        title: "Priority Widget 2: Menubar & Menu",
        content: "A **Menu** system provides dropdown menus (like File, Edit, View) at the top of the application. This is essential for professional desktop applications.\n\n**Structure:**\n1. Create a main Menu object\n2. Create sub-menus (e.g., File, Edit, Help)\n3. Add menu items using `add_command()`, `add_separator()`, `add_cascade()`\n4. Attach the main menu to the root window using `root.config(menu=...)`",
        code: `# Example 1: Creating a Basic Menu Bar
import tkinter as tk
root = tk.Tk()
root.title("Menu Bar Example")
root.geometry("400x250")

# Create main menu bar
main_menu = tk.Menu(root)
root.config(menu=main_menu)

# Example 2: Adding File Menu with Commands
file_menu = tk.Menu(main_menu, tearoff=0)
main_menu.add_cascade(label="File", menu=file_menu)
file_menu.add_command(label="New")
file_menu.add_command(label="Open")
file_menu.add_command(label="Save")
file_menu.add_separator()
file_menu.add_command(label="Exit", command=root.quit)

# Example 3: Adding Edit Menu
edit_menu = tk.Menu(main_menu, tearoff=0)
main_menu.add_cascade(label="Edit", menu=edit_menu)
edit_menu.add_command(label="Undo")
edit_menu.add_command(label="Redo")
edit_menu.add_separator()
edit_menu.add_command(label="Cut")
edit_menu.add_command(label="Copy")
edit_menu.add_command(label="Paste")

tk.Label(root, text="Click on 'File' or 'Edit' above").pack(pady=50)
root.mainloop()`,
        output: "Simulator: Menu bar with 'File' (New/Open/Save/Exit) and 'Edit' (Undo/Redo/Cut/Copy/Paste) menus."
      },
      {
        title: "Priority Widget 3: Radiobutton",
        content: "A **Radiobutton** allows users to select exactly one option from a set of mutually exclusive choices. Unlike checkboxes, selecting one radio button automatically deselects others in the group.\n\n**Key Concepts:**\n- All radio buttons in a group must share the same **variable** (IntVar, StringVar)\n- Set different **values** for each button\n- Use `variable.get()` to retrieve the selected value",
        code: `# Example 1: Basic Radio Button Group
import tkinter as tk
root = tk.Tk()
root.title("Radio Button Example")
root.geometry("300x200")

# Create shared variable
choice = tk.StringVar(value="Python")

# Create radio buttons
tk.Label(root, text="Select Programming Language:", font=("Arial", 12)).pack(anchor="w", padx=20)

tk.Radiobutton(root, text="Python", variable=choice, value="Python").pack(anchor="w", padx=40)
tk.Radiobutton(root, text="Java", variable=choice, value="Java").pack(anchor="w", padx=40)
tk.Radiobutton(root, text="C++", variable=choice, value="C++").pack(anchor="w", padx=40)
tk.Radiobutton(root, text="JavaScript", variable=choice, value="JavaScript").pack(anchor="w", padx=40)

# Example 2: Display Selected Value
def show_choice():
    print(f"You selected: {choice.get()}")

tk.Button(root, text="Submit", command=show_choice, bg="blue", fg="white").pack(pady=20)

# Example 3: Different Variable Types
print("--- Example 3: Using IntVar ---")
# rating = tk.IntVar(value=3)
# for i in range(1, 6):
#   tk.Radiobutton(root, text=f"{i} Star", variable=rating, value=i).pack()

root.mainloop()`,
        output: "Simulator: Displaying 4 Radio Buttons (Python/Java/C++/JavaScript) with a Submit button."
      },
      {
        title: "Standard Form Widgets",
        content: "Every Tkinter application uses common widgets for data collection and interaction:\n\n**1. Label:** Displays static text or images\n**2. Entry:** Single-line text input field\n**3. Button:** Clickable action trigger with callback function\n**4. Checkbutton:** Multiple-choice selector (not exclusive like radio buttons)\n**5. Frame:** Container widget to organize other widgets\n**6. Text:** Multi-line text area for longer content",
        code: `# Example 1: Building a Registration Form
import tkinter as tk
root = tk.Tk()
root.title("Registration Form")
root.geometry("350x350")

tk.Label(root, text="Registration Form", font=("Arial", 14, "bold")).pack(pady=10)

# Name field
tk.Label(root, text="Full Name:").pack(anchor="w", padx=30)
name_entry = tk.Entry(root, width=30)
name_entry.pack(padx=30, pady=5)

# Email field
tk.Label(root, text="Email:").pack(anchor="w", padx=30)
email_entry = tk.Entry(root, width=30)
email_entry.pack(padx=30, pady=5)

# Example 2: Checkbutton for Terms
terms_var = tk.IntVar()
tk.Checkbutton(root, text="I agree to Terms & Conditions", variable=terms_var).pack(anchor="w", padx=30, pady=10)

# Example 3: Submit and Reset Buttons
def register():
    name = name_entry.get()
    email = email_entry.get()
    print(f"Registered: {name} ({email})")

tk.Button(root, text="Register", command=register, bg="green", fg="white", width=15).pack(pady=10)
tk.Button(root, text="Reset", command=lambda: (name_entry.delete(0, "end"), email_entry.delete(0, "end")), width=15).pack()

root.mainloop()`,
        output: "Simulator: Registration form with Full Name entry, Email entry, Terms checkbox, Register and Reset buttons."
      },
      {
        title: "Canvas and Drawing Shapes",
        content: "A **Canvas** is a drawing area that allows creation of graphics, shapes, lines, arcs, images, and text. It's useful for creating visual applications, diagrams, and games.\n\n**Common Canvas Methods:**\n- `create_rectangle()`: Draw rectangles\n- `create_oval()`: Draw circles and ellipses\n- `create_line()`: Draw lines\n- `create_arc()`: Draw arcs (partial circles)\n- `create_text()`: Add text\n- `create_image()`: Place images",
        code: `# Example 1: Basic Canvas with Shapes
import tkinter as tk
root = tk.Tk()
root.title("Canvas Drawing")
root.geometry("400x300")

canvas = tk.Canvas(root, bg="white", height=250, width=400)
canvas.pack(pady=10)

# Draw rectangle
canvas.create_rectangle(20, 20, 150, 100, fill="lightblue", outline="black")

# Draw circle
canvas.create_oval(170, 20, 300, 150, fill="yellow", outline="black")

# Example 2: Drawing Arcs and Lines
# Draw arc
coords = [320, 20, 380, 80]
canvas.create_arc(coords, start=0, extent=180, fill="red", width=2)

# Draw line
canvas.create_line(50, 150, 350, 150, fill="black", width=2)

# Example 3: Adding Text to Canvas
canvas.create_text(200, 200, text="Canvas Drawing Example", font=("Arial", 14), fill="blue")

tk.Button(root, text="Clear Canvas", command=canvas.delete("all")).pack()

root.mainloop()`,
        output: "Simulator: Canvas showing rectangle (lightblue), circle (yellow), arc (red), horizontal line, and text."
      },
      {
        title: "Text Widget and Multi-line Input",
        content: "The **Text** widget allows users to enter and edit multiple lines of text. Unlike Entry, it's ideal for text editors, note-taking, code editors, and any application requiring large text content.\n\n**Key Features:**\n- Multi-line editing capabilities\n- Scrollbar integration support\n- Text formatting and styling options\n- Index-based text manipulation",
        code: `# Example 1: Basic Text Widget
import tkinter as tk
root = tk.Tk()
root.title("Text Editor")
root.geometry("400x300")

tk.Label(root, text="Notes Editor:").pack(anchor="w", padx=10)

# Create text widget
text_widget = tk.Text(root, height=10, width=50, bg="lightyellow")
text_widget.pack(padx=10, pady=10)

# Example 2: Adding Scrollbar to Text
scrollbar = tk.Scrollbar(root, command=text_widget.yview)
scrollbar.pack(side="right", fill="y")
text_widget.config(yscrollcommand=scrollbar.set)

# Example 3: Get and Display Text Content
def save_notes():
    content = text_widget.get("1.0", "end")
    print("Saved Notes:")
    print(content)

tk.Button(root, text="Save Notes", command=save_notes, bg="blue", fg="white").pack(pady=5)

root.mainloop()`,
        output: "Simulator: Multi-line text editor with scrollbar and save button."
      },
      {
        title: "Listbox Widget with Selection",
        content: "A **Listbox** displays a list of items from which users can select one or multiple items. It's commonly used for displaying data collections, file lists, menu options, and more.\n\n**Methods:**\n- `insert()`: Add items to the list\n- `delete()`: Remove items\n- `curselection()`: Get selected index\n- `get()`: Retrieve item by index",
        code: `# Example 1: Simple Listbox
import tkinter as tk
root = tk.Tk()
root.title("Listbox Demo")
root.geometry("300x250")

tk.Label(root, text="Select Your Hobby:").pack(anchor="w", padx=10)

# Create listbox
listbox = tk.Listbox(root, height=6, width=30)
hobbies = ["Reading", "Gaming", "Coding", "Sports", "Music", "Traveling", "Drawing"]
for hobby in hobbies:
    listbox.insert("end", hobby)
listbox.pack(padx=10, pady=10)

# Example 2: Display Selected Item
def show_selection():
    selected = listbox.curselection()
    if selected:
        hobby = listbox.get(selected[0])
        print(f"You selected: {hobby}")

# Example 3: Multiple Selection with Scrollbar
scrollbar = tk.Scrollbar(root, command=listbox.yview)
scrollbar.pack(side="right", fill="y")
listbox.config(yscrollcommand=scrollbar.set, selectmode="multiple")

tk.Button(root, text="Get Selection", command=show_selection).pack(pady=10)

root.mainloop()`,
        output: "Simulator: Listbox with hobbies (Reading/Gaming/Coding/Sports/Music/Traveling/Drawing), scrollbar, and selection button."
      },
      {
        title: "Frames and Widget Organization",
        content: "A **Frame** is a container widget that groups related widgets together. It helps organize complex GUIs into logical sections, manages layout hierarchy, and applies consistent styling to groups of widgets.\n\n**Benefits:**\n- Organize UI into logical sections\n- Easy to manage and modify layouts\n- Separate concerns (top frame, bottom frame, etc.)\n- Reusable component structure",
        code: `# Example 1: Basic Frame Organization
import tkinter as tk
root = tk.Tk()
root.title("Frame Organization")
root.geometry("400x300")

# Top frame for header
top_frame = tk.Frame(root, bg="lightblue", height=50)
top_frame.pack(side="top", fill="x", padx=10, pady=10)
tk.Label(top_frame, text="Header Section", bg="lightblue", font=("Arial", 12, "bold")).pack()

# Middle frame for content
middle_frame = tk.Frame(root, bg="white")
middle_frame.pack(side="top", fill="both", expand=True, padx=10, pady=10)
tk.Label(middle_frame, text="Main Content Area", bg="white").pack()

# Example 2: Bottom frame for buttons
bottom_frame = tk.Frame(root, bg="lightgray")
bottom_frame.pack(side="bottom", fill="x", padx=10, pady=10)

# Example 3: Button organization in frame
tk.Button(bottom_frame, text="Submit", bg="green", fg="white").pack(side="left", padx=5)
tk.Button(bottom_frame, text="Cancel", bg="red", fg="white").pack(side="left", padx=5)
tk.Button(bottom_frame, text="Help", bg="orange").pack(side="left", padx=5)

root.mainloop()`,
        output: "Simulator: Three-section layout with header (lightblue), main content (white), and footer buttons (lightgray)."
      }
    ]
  }
];