# tableizer

A CLI tool that encodes strings into a table and indices format, with the ability to decode them back to the original message. The encoded data is stored in a JSON format and can be decoded back to the original message, which is then output in base64 format.

## Installation

```bash
# Install globally
npm install -g tableizer

# Or run directly with npx
npx tableizer
```

## Usage

### Encoding a message

```bash
# Using global installation
tableizer "Hello, World!"

# Using npx
npx tableizer "Hello, World!"
```

This will create a `data.json` file containing the encoded message.

### Decoding a message

```bash
# Using global installation
tableizer-decode

# Using npx
npx tableizer-decode

# Using npm script (alternative)
npm run decode
```

This will read the `data.json` file and create a `flag` file containing the decoded message in base64 format.

## How it works

The tool works by creating a table of unique characters from the input string and storing their indices. This creates a simple form of encoding that can be easily reversed.

### Data Format

The `data.json` file contains two main components:
- `table`: A string containing all unique characters from the input
- `indices`: An array of numbers representing positions in the table

Example:

Input:
```bash
npx tableizer "hello"
```

Generated `data.json`:
```json
{
  "table": "helo\0",
  "indices": [0, 1, 2, 3, 3, 4]
}
```

When decoded, this will reconstruct "hello" and output it in base64 format.

More examples:

1. Input: `npx tableizer "Hello, World!"`
   ```json
   {
     "table": "Helo, Wrd!\0",
     "indices": [0, 1, 2, 2, 3, 4, 5, 6, 3, 7, 2, 8, 9]
   }
   ```

2. Input: `npx tableizer "AABBCC"`
   ```json
   {
     "table": "ABC\0",
     "indices": [0, 0, 1, 1, 2, 2]
   }
   ```

## License

MIT License - See LICENSE file for details.