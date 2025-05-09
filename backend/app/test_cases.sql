-- Test Cases for Java Questions

-- Easy Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to print numbers from 1 to 10
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'java'), '', '1
2
3
4
5
6
7
8
9
10', true),
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'java'), '', '1
2
3
4
5
6
7
8
9
10', false),

-- Question: Write a program to check if a number is prime
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '5', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '4', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '2', 'true', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '1', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '0', 'false', false),

-- Question: Write a program to reverse a string
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"hello"', '"olleh"', true),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"Java"', '"avaJ"', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '""', '""', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"12345"', '"54321"', false),

-- Question: Write a program to find the maximum number in an array
((SELECT id FROM problems WHERE question = 'Write a program to find the maximum number in an array' AND language = 'java'), '{1, 2, 3, 4, 5}', '5', true),
((SELECT id FROM problems WHERE question = 'Write a program to find the maximum number in an array' AND language = 'java'), '{-1, -2, -3, -4, -5}', '-1', false),
((SELECT id FROM problems WHERE question = 'Write a program to find the maximum number in an array' AND language = 'java'), '{10}', '10', false),
((SELECT id FROM problems WHERE question = 'Write a program to find the maximum number in an array' AND language = 'java'), '{}', 'Exception', false);



-- Medium Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement binary search tree
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search tree' AND language = 'java'), 'insert(5), insert(3), insert(7), contains(3)', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search tree' AND language = 'java'), 'insert(5), insert(3), insert(7), contains(4)', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search tree' AND language = 'java'), 'insert(5), delete(5), contains(5)', 'false', false);

-- Question: Write a program to implement stack using array
((SELECT id FROM problems WHERE question = 'Write a program to implement stack using array' AND language = 'java'), 'push(1), push(2), pop(), pop()', '2, 1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement stack using array' AND language = 'java'), 'push(1), push(2), push(3), pop()', '3', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement stack using array' AND language = 'java'), 'push(1), pop(), pop()', '1, Exception', false);

-- Hard Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement concurrent hash map
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'java'), 'put("key1", 1), get("key1")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'java'), 'put("key1", 1), put("key1", 2), get("key1")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'java'), 'put("key1", 1), remove("key1"), get("key1")', 'null', false);

-- Extreme Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement distributed blockchain system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'java'), 'addBlock("data1"), getBlock(0)', 'Block(data1)', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'java'), 'addBlock("data1"), addBlock("data2"), getBlock(1)', 'Block(data2)', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'java'), 'addBlock("data1"), validateChain()', 'true', false);

-- Test Cases for C++ Questions

-- Easy Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to print numbers from 1 to 10
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'cpp'), '', '1\n2\n3\n4\n5\n6\n7\n8\n9\n10', true),
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'cpp'), '', '1\n2\n3\n4\n5\n6\n7\n8\n9\n10', false),

-- Question: Write a program to check if a number is even
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '4', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '5', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '0', 'true', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '-2', 'true', false),

-- Question: Write a program to reverse an array
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{1, 2, 3}', '{3, 2, 1}', true),
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{10}', '{10}', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{}', '{}', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{1, 2, 3, 4, 5}', '{5, 4, 3, 2, 1}', false),

-- Question: Write a program to find the sum of array elements
((SELECT id FROM problems WHERE question = 'Write a program to find the sum of array elements' AND language = 'cpp'), '{1, 2, 3, 4, 5}', '15', true),
((SELECT id FROM problems WHERE question = 'Write a program to find the sum of array elements' AND language = 'cpp'), '{-1, -2, -3}', '-6', false),
((SELECT id FROM problems WHERE question = 'Write a program to find the sum of array elements' AND language = 'cpp'), '{}', '0', false),
((SELECT id FROM problems WHERE question = 'Write a program to find the sum of array elements' AND language = 'cpp'), '{100}', '100', false);

-- Question: Write a program to check if a number is even
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '4', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '5', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even' AND language = 'cpp'), '0', 'true', false),

-- Question: Write a program to reverse an array
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{1, 2, 3}', '{3, 2, 1}', true),
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{10}', '{10}', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse an array' AND language = 'cpp'), '{}', '{}', false);

-- Medium Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement binary search
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search' AND language = 'cpp'), '{1, 2, 3, 4, 5}, 3', '2', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search' AND language = 'cpp'), '{1, 2, 3, 4, 5}, 6', '-1', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search' AND language = 'cpp'), '{1}, 1', '0', false),

-- Question: Write a program to implement stack using array
((SELECT id FROM problems WHERE question = 'Write a program to implement stack using array' AND language = 'cpp'), 'push(1), push(2), pop(), pop()', '2, 1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement stack using array' AND language = 'cpp'), 'push(1), push(2), push(3), pop()', '3', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement stack using array' AND language = 'cpp'), 'push(1), pop(), pop()', '1, Exception', false);

-- Hard Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement concurrent hash map
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'cpp'), 'put("key1", 1), get("key1")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'cpp'), 'put("key1", 1), put("key1", 2), get("key1")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'cpp'), 'put("key1", 1), remove("key1"), get("key1")', 'null', false);

-- Extreme Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement distributed blockchain system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'cpp'), 'addBlock("data1"), getBlock(0)', 'Block(data1)', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'cpp'), 'addBlock("data1"), addBlock("data2"), getBlock(1)', 'Block(data2)', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'cpp'), 'addBlock("data1"), validateChain()', 'true', false);

-- Test Cases for React Questions

-- Easy Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a component to display a heading
((SELECT id FROM problems WHERE question = 'Write a component to display a heading' AND language = 'react'), '<Heading text="Hello" />', '<h1>Hello</h1>', true),
((SELECT id FROM problems WHERE question = 'Write a component to display a heading' AND language = 'react'), '<Heading text="" />', '<h1></h1>', false),
((SELECT id FROM problems WHERE question = 'Write a component to display a heading' AND language = 'react'), '<Heading text="123" />', '<h1>123</h1>', false),

-- Question: Write a component to display a list of items
((SELECT id FROM problems WHERE question = 'Write a component to display a list of items' AND language = 'react'), '<ItemList items={["a", "b", "c"]} />', '<ul><li>a</li><li>b</li><li>c</li></ul>', true),
((SELECT id FROM problems WHERE question = 'Write a component to display a list of items' AND language = 'react'), '<ItemList items={[]} />', '<ul></ul>', false),
((SELECT id FROM problems WHERE question = 'Write a component to display a list of items' AND language = 'react'), '<ItemList items={[1, 2, 3]} />', '<ul><li>1</li><li>2</li><li>3</li></ul>', false),

-- Question: Write a component to handle form submission
((SELECT id FROM problems WHERE question = 'Write a component to handle form submission' AND language = 'react'), '<Form onSubmit={(data) => data} />', 'Form component with onSubmit handler', true),
((SELECT id FROM problems WHERE question = 'Write a component to handle form submission' AND language = 'react'), '<Form onSubmit={(data) => data} />', 'Form component with onSubmit handler', false),
((SELECT id FROM problems WHERE question = 'Write a component to handle form submission' AND language = 'react'), '<Form onSubmit={(data) => data} />', 'Form component with onSubmit handler', false);

-- Medium Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a component to implement pagination
((SELECT id FROM problems WHERE question = 'Write a component to implement pagination' AND language = 'react'), '<Pagination total={100} pageSize={10} />', 'Pagination component with 10 pages', true),
((SELECT id FROM problems WHERE question = 'Write a component to implement pagination' AND language = 'react'), '<Pagination total={5} pageSize={10} />', 'Pagination component with 1 page', false),
((SELECT id FROM problems WHERE question = 'Write a component to implement pagination' AND language = 'react'), '<Pagination total={101} pageSize={10} />', 'Pagination component with 11 pages', false),

-- Question: Write a component to implement a search filter
((SELECT id FROM problems WHERE question = 'Write a component to implement a search filter' AND language = 'react'), '<SearchFilter items={["apple", "banana", "orange"]} search="a" />', 'Filtered items: ["apple"]', true),
((SELECT id FROM problems WHERE question = 'Write a component to implement a search filter' AND language = 'react'), '<SearchFilter items={["apple", "banana", "orange"]} search="" />', 'All items: ["apple", "banana", "orange"]', false),
((SELECT id FROM problems WHERE question = 'Write a component to implement a search filter' AND language = 'react'), '<SearchFilter items={[]} search="a" />', 'No items found', false);

-- Hard Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a component to implement a virtualized list
((SELECT id FROM problems WHERE question = 'Write a component to implement a virtualized list' AND language = 'react'), '<VirtualList items={Array(1000).fill(0)} />', 'Virtual list with 1000 items', true),
((SELECT id FROM problems WHERE question = 'Write a component to implement a virtualized list' AND language = 'react'), '<VirtualList items={[]} />', 'Empty virtual list', false),
((SELECT id FROM problems WHERE question = 'Write a component to implement a virtualized list' AND language = 'react'), '<VirtualList items={Array(10000).fill(0)} />', 'Virtual list with 10000 items', false),

-- Question: Write a component to implement a real-time chat
((SELECT id FROM problems WHERE question = 'Write a component to implement a real-time chat' AND language = 'react'), '<ChatRoom messages={["Hello", "Hi"]} />', 'Chat component with 2 messages', true),
((SELECT id FROM problems WHERE question = 'Write a component to implement a real-time chat' AND language = 'react'), '<ChatRoom messages={[]} />', 'Empty chat component', false),
((SELECT id FROM problems WHERE question = 'Write a component to implement a real-time chat' AND language = 'react'), '<ChatRoom messages={["Hello", "Hi"]} />', 'Chat component with message handling', false);

-- Extreme Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a component to implement a distributed real-time editor
((SELECT id FROM problems WHERE question = 'Write a component to implement a distributed real-time editor' AND language = 'react'), '<Editor text="Hello" />', 'Editor component with real-time collaboration', true),
((SELECT id FROM problems WHERE question = 'Write a component to implement a distributed real-time editor' AND language = 'react'), '<Editor text="" />', 'Empty editor component', false),
((SELECT id FROM problems WHERE question = 'Write a component to implement a distributed real-time editor' AND language = 'react'), '<Editor text="Hello" />', 'Editor component with collaboration handling', false);

-- Test Cases for JavaScript Questions

-- Easy Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a function to check if a number is even
((SELECT id FROM problems WHERE question = 'Write a function to check if a number is even' AND language = 'javascript'), '4', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a function to check if a number is even' AND language = 'javascript'), '5', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a function to check if a number is even' AND language = 'javascript'), '0', 'true', false),

-- Question: Write a function to reverse a string
((SELECT id FROM problems WHERE question = 'Write a function to reverse a string' AND language = 'javascript'), '"hello"', '"olleh"', true),
((SELECT id FROM problems WHERE question = 'Write a function to reverse a string' AND language = 'javascript'), '"JavaScript"', '"tpircSavaJ"', false),
((SELECT id FROM problems WHERE question = 'Write a function to reverse a string' AND language = 'javascript'), '""', '""', false),

-- Question: Write a function to find maximum element in an array
((SELECT id FROM problems WHERE question = 'Write a function to find maximum element in an array' AND language = 'javascript'), '[1, 2, 3, 4, 5]', '5', true),
((SELECT id FROM problems WHERE question = 'Write a function to find maximum element in an array' AND language = 'javascript'), '[-1, -2, -3, 0]', '0', false),
((SELECT id FROM problems WHERE question = 'Write a function to find maximum element in an array' AND language = 'javascript'), '[10]', '10', false),

-- Medium Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a function to implement debounce
((SELECT id FROM problems WHERE question = 'Write a function to implement debounce' AND language = 'javascript'), 'debounce(() => console.log("Hello"), 1000)()', 'Function debounced', true),
((SELECT id FROM problems WHERE question = 'Write a function to implement debounce' AND language = 'javascript'), 'debounce(() => console.log("Hello"), 1000)()', 'Function debounced', false),
((SELECT id FROM problems WHERE question = 'Write a function to implement debounce' AND language = 'javascript'), 'debounce(() => console.log("Hello"), 1000)()', 'Function debounced', false),

-- Question: Write a function to implement memoization
((SELECT id FROM problems WHERE question = 'Write a function to implement memoization' AND language = 'javascript'), 'memoize((x) => x * x)(2)', '4', true),
((SELECT id FROM problems WHERE question = 'Write a function to implement memoization' AND language = 'javascript'), 'memoize((x) => x * x)(2)', '4', false),
((SELECT id FROM problems WHERE question = 'Write a function to implement memoization' AND language = 'javascript'), 'memoize((x) => x * x)(3)', '9', false),

-- Hard Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a function to implement a distributed cache
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed cache' AND language = 'javascript'), 'set("key1", 1), get("key1")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed cache' AND language = 'javascript'), 'set("key1", 1), set("key1", 2), get("key1")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed cache' AND language = 'javascript'), 'set("key1", 1), delete("key1"), get("key1")', 'null', false),

-- Question: Write a function to implement a distributed task queue
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed task queue' AND language = 'javascript'), 'addTask("task1"), getTask()', 'task1', true),
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed task queue' AND language = 'javascript'), 'addTask("task1"), addTask("task2"), getTask()', 'task1', false),
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed task queue' AND language = 'javascript'), 'addTask("task1"), completeTask("task1"), getTask()', 'null', false),

-- Extreme Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a function to implement a distributed real-time analytics system
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed real-time analytics system' AND language = 'javascript'), 'processData([1, 2, 3])', 'Statistics calculated', true),
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed real-time analytics system' AND language = 'javascript'), 'processData([1, 2, 3]), getStats()', '{"mean": 2, "std": 0.816}', false),
((SELECT id FROM problems WHERE question = 'Write a function to implement a distributed real-time analytics system' AND language = 'javascript'), 'processData([1, 2, 3]), streamData()', 'Data streaming', false);

-- Test Cases for Python Questions

-- Easy Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a function that takes a list and returns its length
((SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'), '[1, 2, 3]', '3', true),
((SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'), '[]', '0', false),
((SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'), '["a", "b", "c", "d"]', '4', false),
((SELECT id FROM problems WHERE question = 'Write a function that takes a list and returns its length.' AND language = 'python'), '[1, [2, 3], 4]', '3', false),

-- Question: Write a program to check if a number is even or odd
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even or odd' AND language = 'python'), '4', 'even', true),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even or odd' AND language = 'python'), '5', 'odd', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even or odd' AND language = 'python'), '0', 'even', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is even or odd' AND language = 'python'), '-3', 'odd', false),

-- Question: Write a function to find the maximum number in a list
((SELECT id FROM problems WHERE question = 'Write a function to find the maximum number in a list' AND language = 'python'), '[1, 2, 3, 4, 5]', '5', true),
((SELECT id FROM problems WHERE question = 'Write a function to find the maximum number in a list' AND language = 'python'), '[-1, -2, -3, 0]', '0', false),
((SELECT id FROM problems WHERE question = 'Write a function to find the maximum number in a list' AND language = 'python'), '[10]', '10', false),

-- Question: Write a program to print numbers from 1 to 10
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'python'), '', '1
2
3
4
5
6
7
8
9
10', true),
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'python'), '', '1
2
3
4
5
6
7
8
9
10', false),
((SELECT id FROM problems WHERE question = 'Write a program to print numbers from 1 to 10' AND language = 'python'), '', '1
2
3
4
5
6
7
8
9
10', false),

-- Question: Write a function to check if a string is palindrome
((SELECT id FROM problems WHERE question = 'Write a function to check if a string is palindrome' AND language = 'python'), '"level"', 'True', true),
((SELECT id FROM problems WHERE question = 'Write a function to check if a string is palindrome' AND language = 'python'), '"hello"', 'False', false),
((SELECT id FROM problems WHERE question = 'Write a function to check if a string is palindrome' AND language = 'python'), '"A man a plan a canal Panama"', 'True', false),

-- Question: Write a program to remove duplicates from a list
((SELECT id FROM problems WHERE question = 'Write a program to remove duplicates from a list' AND language = 'python'), '[1, 2, 2, 3, 4, 4, 4, 5]', '[1, 2, 3, 4, 5]', true),
((SELECT id FROM problems WHERE question = 'Write a program to remove duplicates from a list' AND language = 'python'), '["a", "b", "a", "c", "b"]', '["a", "b", "c"]', false),
((SELECT id FROM problems WHERE question = 'Write a program to remove duplicates from a list' AND language = 'python'), '[1, 1, 1, 1]', '[1]', false);

-- Medium Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement binary search
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search' AND language = 'python'), '[1, 2, 3, 4, 5], 3', '2', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search' AND language = 'python'), '[1, 2, 3, 4, 5], 6', '-1', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search' AND language = 'python'), '[1], 1', '0', false),

-- Question: Write a function to find all permutations of a string
((SELECT id FROM problems WHERE question = 'Write a function to find all permutations of a string' AND language = 'python'), '"abc"', '"abc", "acb", "bac", "bca", "cab", "cba"', true),
((SELECT id FROM problems WHERE question = 'Write a function to find all permutations of a string' AND language = 'python'), '"a"', '"a"', false),
((SELECT id FROM problems WHERE question = 'Write a function to find all permutations of a string' AND language = 'python'), '"aa"', '"aa"', false),

-- Question: Write a program to implement a stack using list
((SELECT id FROM problems WHERE question = 'Write a program to implement a stack using list' AND language = 'python'), 'push(1), push(2), pop(), pop()', '2, 1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement a stack using list' AND language = 'python'), 'push(1), push(2), push(3), pop()', '3', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement a stack using list' AND language = 'python'), 'push(1), pop(), pop()', '1, Error', false),

-- Question: Write a function to find the longest common subsequence
((SELECT id FROM problems WHERE question = 'Write a function to find the longest common subsequence' AND language = 'python'), '"abcde", "ace"', '"ace"', true),
((SELECT id FROM problems WHERE question = 'Write a function to find the longest common subsequence' AND language = 'python'), '"abc", "def"', '""', false),
((SELECT id FROM problems WHERE question = 'Write a function to find the longest common subsequence' AND language = 'python'), '"abc", "abc"', '"abc"', false),

-- Question: Write a program to implement a queue using linked list
((SELECT id FROM problems WHERE question = 'Write a program to implement a queue using linked list' AND language = 'python'), 'enqueue(1), enqueue(2), dequeue(), dequeue()', '1, 2', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement a queue using linked list' AND language = 'python'), 'enqueue(1), enqueue(2), enqueue(3), dequeue()', '1', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement a queue using linked list' AND language = 'python'), 'enqueue(1), dequeue(), dequeue()', '1, Error', false),

-- Question: Write a function to implement a hash table
((SELECT id FROM problems WHERE question = 'Write a function to implement a hash table' AND language = 'python'), 'put("key1", 1), get("key1")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a function to implement a hash table' AND language = 'python'), 'put("key1", 1), put("key1", 2), get("key1")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a function to implement a hash table' AND language = 'python'), 'put("key1", 1), remove("key1"), get("key1")', 'None', false);

-- Hard Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement concurrent hash map
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'python'), 'put("key1", 1), get("key1")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'python'), 'put("key1", 1), put("key1", 2), get("key1")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'python'), 'put("key1", 1), remove("key1"), get("key1")', 'None', false),

-- Question: Write a program to implement distributed cache
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed cache' AND language = 'python'), 'set("key1", 1), get("key1")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed cache' AND language = 'python'), 'set("key1", 1), set("key1", 2), get("key1")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed cache' AND language = 'python'), 'set("key1", 1), delete("key1"), get("key1")', 'None', false),

-- Question: Write a program to implement distributed database
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed database' AND language = 'python'), 'insert("user", {"name": "John"}), get("user")', '{"name": "John"}', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed database' AND language = 'python'), 'insert("user", {"name": "John"}), insert("user", {"name": "Jane"}), get("user")', '[{"name": "John"}, {"name": "Jane"}]', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed database' AND language = 'python'), 'insert("user", {"name": "John"}), delete("user"), get("user")', '[]', false),

-- Question: Write a program to implement distributed file system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed file system' AND language = 'python'), 'write("file.txt", "Hello"), read("file.txt")', 'Hello', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed file system' AND language = 'python'), 'write("file.txt", "Hello"), write("file.txt", "World"), read("file.txt")', 'World', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed file system' AND language = 'python'), 'write("file.txt", "Hello"), delete("file.txt"), read("file.txt")', 'Error', false),

-- Question: Write a program to implement distributed task queue
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed task queue' AND language = 'python'), 'add_task("task1"), get_task()', 'task1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed task queue' AND language = 'python'), 'add_task("task1"), add_task("task2"), get_task()', 'task1', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed task queue' AND language = 'python'), 'add_task("task1"), complete_task("task1"), get_task()', 'None', false),

-- Question: Write a program to implement distributed messaging system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed messaging system' AND language = 'python'), 'send("channel1", "message1"), receive("channel1")', 'message1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed messaging system' AND language = 'python'), 'send("channel1", "message1"), send("channel1", "message2"), receive("channel1")', 'message1', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed messaging system' AND language = 'python'), 'send("channel1", "message1"), delete_channel("channel1"), receive("channel1")', 'Error', false);

-- Extreme Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
-- Question: Write a program to implement distributed blockchain system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'python'), 'add_block("data1"), get_block(0)', 'Block(data1)', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'python'), 'add_block("data1"), add_block("data2"), get_block(1)', 'Block(data2)', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'python'), 'add_block("data1"), validate_chain()', 'True', false),

-- Question: Write a program to implement distributed AI training system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed AI training system' AND language = 'python'), 'train_model([1, 2, 3], [4, 5, 6])', 'Model trained', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed AI training system' AND language = 'python'), 'train_model([1, 2, 3], [4, 5, 6]), predict([1])', '4', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed AI training system' AND language = 'python'), 'train_model([1, 2, 3], [4, 5, 6]), save_model()', 'Model saved', false),

-- Question: Write a program to implement distributed real-time analytics system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed real-time analytics system' AND language = 'python'), 'process_data([1, 2, 3])', 'Statistics calculated', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed real-time analytics system' AND language = 'python'), 'process_data([1, 2, 3]), get_stats()', '{"mean": 2, "std": 0.816}', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed real-time analytics system' AND language = 'python'), 'process_data([1, 2, 3]), stream_data()', 'Data streaming', false),

-- Question: Write a program to implement distributed deep learning system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed deep learning system' AND language = 'python'), 'train_model([1, 2, 3], [4, 5, 6])', 'Model trained', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed deep learning system' AND language = 'python'), 'train_model([1, 2, 3], [4, 5, 6]), predict([1])', '4', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed deep learning system' AND language = 'python'), 'train_model([1, 2, 3], [4, 5, 6]), save_model()', 'Model saved', false),

-- Question: Write a program to implement distributed cloud storage system
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed cloud storage system' AND language = 'python'), 'upload("file.txt", "Hello"), download("file.txt")', 'Hello', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed cloud storage system' AND language = 'python'), 'upload("file.txt", "Hello"), upload("file.txt", "World"), download("file.txt")', 'World', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed cloud storage system' AND language = 'python'), 'upload("file.txt", "Hello"), delete("file.txt"), download("file.txt")', 'Error', false);
