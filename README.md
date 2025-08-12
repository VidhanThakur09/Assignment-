# Custom JavaScript Tokenizers

This project provides a collection of custom-built tokenizers in JavaScript, designed to illustrate different approaches to breaking down a string of text into meaningful units (tokens). Each tokenizer serves a different purpose, from simple word-splitting to advanced, regex-based parsing and character-level ASCII conversion.

---

### Table of Contents

1.  [Introduction](#introduction)
2.  [Tokenizer Types](#tokenizer-types)
    -   [Simple Tokenizer](#simple-tokenizer)
    -   [Advanced Tokenizer](#advanced-tokenizer)
    -   [Comprehensive Tokenizer](#comprehensive-tokenizer)
    -   [ASCII Code Tokenizer](#ascii-code-tokenizer)
3.  [Usage](#usage)

---

### Introduction

Tokenization is a fundamental process in natural language processing (NLP) and data parsing. It involves segmenting a text string into smaller components, or "tokens," which can then be used for further analysis. This project offers a playground to understand how different tokenization strategies work and how they can be implemented from scratch in JavaScript.

---

### Tokenizer Types

Each tokenizer is a self-contained function that demonstrates a specific method of text processing.

#### 1. Simple Tokenizer

This is the most basic tokenizer. It splits a string of text by spaces. It's a great starting point for understanding the concept but has limitations, as it does not handle punctuation well.

**Function:** `simpleTokenizer(text)`

**Example Output:**
"Hello world!"  =>  ["Hello", "world!"]


#### 2. Advanced Tokenizer

This tokenizer uses a regular expression to separate words and common punctuation marks into distinct tokens. It provides more accurate and structured output than the simple tokenizer.

**Function:** `advancedTokenizer(text)`

**Example Output:**

​"Hello, world!" =>  ["Hello", ",", "world", "!"]

#### 3. Comprehensive Tokenizer

This is the most robust and flexible tokenizer. It's a configurable function that includes:
-   **Preprocessing:** Converts text to lowercase and cleans up extra whitespace.
-   **Advanced Rules:** Uses an array of regex patterns to handle words with apostrophes, numbers, and various punctuation.
-   **Stop Word Filtering:** Can optionally remove common words like "the," "is," and "a."

**Function:** `comprehensiveTokenizer(text, options)`

**Example Output (with filtering):**

​"The 1st score is 100!"  =>  ["1st", "score", "100", "!"]

#### 4. ASCII Code Tokenizer

This unique tokenizer operates at the character level. It converts each character in a string into its corresponding numerical ASCII/Unicode decimal code. This is useful for character-level data analysis and low-level text manipulation.

**Function:** `asciiTokenizer(text)`

**Example Output:**

​"Hello"  =>  [72, 101, 108, 108, 111]


### Usage
​You can copy the code by using git link , then cd to **tokenizers.js** and run it with Node.js to see all the tokenizers in action.

`node tokenizers.js`


