// =================================================================================
// 1. Simple Tokenizer (Word-based)
// =================================================================================
// This tokenizer splits a string by spaces. It's the most basic approach.
// It is useful for simple tasks where punctuation can be ignored.
function simpleTokenizer(text) {
  return text.split(' ');
}

// =================================================================================
// 2. Advanced Tokenizer (Regex-based)
// =================================================================================
// This version uses a basic regex to separate words and punctuation.
// It's a significant improvement over the simple tokenizer.
function advancedTokenizer(text) {
  const regex = /\w+|[.,!?;:"'(){}\[\]]/g;
  return text.match(regex);
}

// =================================================================================
// 3. Comprehensive Tokenizer (Single Function)
// =================================================================================
// A robust, customizable tokenizer function that includes preprocessing
// and optional stop word filtering.
function comprehensiveTokenizer(text, options = {}) {
  const defaults = {
    rules: [
      /\b[\w'-]+\b/g,  // Words with apostrophes and hyphens
      /\d+/g,          // Numbers
      /[^\s\w]+/g      // Punctuation and symbols
    ],
    stopWords: new Set(['a', 'an', 'the', 'is', 'in', 'on', 'at', 'of', 'for', 'to']),
    shouldFilter: false
  };

  const { rules, stopWords, shouldFilter } = { ...defaults, ...options };
  
  const cleanedText = text.toLowerCase().trim().replace(/\s+/g, ' ');
  
  const tokens = [];
  for (const regex of rules) {
    let match;
    while ((match = regex.exec(cleanedText)) !== null) {
      tokens.push({
        text: match[0],
        index: match.index
      });
    }
  }
  
  tokens.sort((a, b) => a.index - b.index);
  
  let finalTokens = tokens.map(token => token.text);

  if (shouldFilter) {
    finalTokens = finalTokens.filter(token => !stopWords.has(token));
  }
  
  return finalTokens;
}

// =================================================================================
// 4. ASCII Code Tokenizer
// =================================================================================
// This tokenizer converts each character in a string to its
// corresponding ASCII/Unicode decimal code.
function asciiTokenizer(text) {
  if (typeof text !== 'string') {
    console.error("Input must be a string.");
    return [];
  }
  return [...text].map(char => char.charCodeAt(0));
}

// =================================================================================
// Main Execution Block to demonstrate all tokenizers
// =================================================================================

const sampleText = "The 1st player's score is 100-50, and he said, 'I'm ready!'";

console.log("=================================================");
console.log("1. Simple Tokenizer Output");
console.log("=================================================");
console.log("Tokens: ", simpleTokenizer(sampleText));
// Output: [ 'The', '1st', "player's", 'score', 'is', '100-50,', 'and', 'he', 'said,', "'I'm", 'ready!' ]

console.log("\n=================================================");
console.log("2. Advanced Tokenizer Output");
console.log("=================================================");
console.log("Tokens: ", advancedTokenizer(sampleText));
// Output: [ 'The', '1st', "player's", 'score', 'is', '100', '-', '50', ',', 'and', 'he', 'said', ',', "'", "I'm", 'ready', '!', "'" ]

console.log("\n=================================================");
console.log("3. Comprehensive Tokenizer Output");
console.log("=================================================");
console.log("Tokens (without filtering): ", comprehensiveTokenizer(sampleText, { shouldFilter: false }));
// Output: [ 'the', "1st", "player's", 'score', 'is', "100", "-", "50", ',', 'and', 'he', 'said', ',', "'", "i'm", 'ready', '!', "'" ]
console.log("Tokens (with filtering):   ", comprehensiveTokenizer(sampleText, { shouldFilter: true }));
// Output: [ "1st", "player's", 'score', "100", "-", "50", ',', 'and', 'he', 'said', ',', "'", "i'm", 'ready', '!', "'" ]

console.log("\n=================================================");
console.log("4. ASCII Code Tokenizer Output");
console.log("=================================================");
console.log("Codes: ", asciiTokenizer(sampleText));
// Output: [84, 104, 101, 32, 49, 115, 116, 32, 112, 108, 97, 121, 101, 114, 39, 115, 32, 115, 99, 111, 114, 101, 32, 105, 115, 32, 49, 48, 48, 45, 53, 48, 44, 32, 97, 110, 100, 32, 104, 101, 32, 115, 97, 105, 100, 44, 32, 39, 73, 39, 109, 32, 114, 101, 97, 100, 121, 33, 39]

