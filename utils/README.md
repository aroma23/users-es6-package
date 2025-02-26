# StringUtils


## Features

```
console.log(StringUtils.capitalize("hello")); // "Hello"
console.log(StringUtils.camelCase("hello world")); // "helloWorld"
console.log(StringUtils.truncate("This is a long string", 10)); // "This is a..."
console.log(StringUtils.reverseString("hello")); // "olleh"
console.log(StringUtils.isPalindrome("A man a plan a canal Panama")); // true
console.log(StringUtils.countOccurrences("hello world, hello everyone", "hello")); // 2
console.log(StringUtils.slugify("Hello World! How are you?")); // "hello-world-how-are-you"
console.log(StringUtils.padString("hello", 10, "*")); // "**hello***"
console.log(StringUtils.removeWhitespace("  hello  world  ")); // "helloworld"
console.log(StringUtils.isEmpty("   ")); // true
console.log(StringUtils.escapeHTML("<script>alert('XSS')</script>")); // "&lt;script&gt;alert('XSS')&lt;/script&gt;"
console.log(StringUtils.formatPhoneNumber("1234567890")); // "(123) 456-7890"
console.log(StringUtils.stringifyObject({ name: "Alice", age: 30 })); // '{"name":"Alice","age":30}'
console.log(StringUtils.replaceAll("hello world", "world", "there")); // "hello there"

```