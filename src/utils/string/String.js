export class StringUtils {
    // Capitalizes the first letter of a string
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    // Converts a string into camel case
    static camelCase(str) {
      return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+|\_+|\-+|\b)/g, (match, index) =>
          index === 0 ? match.toLowerCase() : match.toUpperCase()
        )
        .replace(/\s+/g, '')
        .replace(/[\-_]+/g, '');
    }
  
    // Truncates a string to a given length, adding an ellipsis (...) if it's longer than the specified length
    static truncate(str, length = 100) {
      if (str.length <= length) return str;
      return str.substring(0, length) + '...';
    }
  
    // Reverses a string
    static reverseString(str) {
      return str.split('').reverse().join('');
    }
  
    // Checks if a string is a palindrome
    static isPalindrome(str) {
      const cleaned = str.replace(/\W/g, '').toLowerCase();
      return cleaned === cleaned.split('').reverse().join('');
    }
  
    // Counts how many times a substring appears in a string
    static countOccurrences(str, subStr) {
      return (str.match(new RegExp(subStr, 'g')) || []).length;
    }
  
    // Converts a string into a slug format (useful for URLs)
    static slugify(str) {
      return str
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // Remove invalid characters
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/-+/g, '-'); // Replace multiple dashes with a single dash
    }
  
    // Pads a string to a certain length with a specified character
    static padString(str, length, padChar = ' ') {
      return str.padStart((str.length + length) / 2, padChar).padEnd(length, padChar);
    }
  
    // Removes all whitespace from a string
    static removeWhitespace(str) {
      return str.replace(/\s+/g, '');
    }
  
    // Checks if a string is empty or contains only whitespace
    static isEmpty(str) {
      return !str.trim().length;
    }
  
    // Escapes special characters for HTML to prevent XSS attacks
    static escapeHTML(str) {
      const element = document.createElement('div');
      if (str) {
        element.innerText = str;
        element.textContent = str;
      }
      return element.innerHTML;
    }
  
    // Formats a phone number to a standard format (e.g., (123) 456-7890)
    static formatPhoneNumber(str) {
      const cleaned = ('' + str).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
      return null;
    }
  
    // Safely converts an object into a JSON string
    static stringifyObject(obj) {
      try {
        return JSON.stringify(obj);
      } catch (error) {
        console.error("Error stringifying object:", error);
        return null;
      }
    }
  
    // Replaces all occurrences of a substring in a string
    static replaceAll(str, target, replacement) {
      return str.split(target).join(replacement);
    }
  }
  