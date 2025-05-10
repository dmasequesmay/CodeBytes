-- Test Cases for Java Questions

-- Easy Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '5', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '4', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '2', 'true', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '1', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to check if a number is prime' AND language = 'java'), '0', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"hello"', '"olleh"', true),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"Java"', '"avaJ"', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '""', '""', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"12345"', '"54321"', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"CodeBytes"', '"setyBedoC"', false),
((SELECT id FROM problems WHERE question = 'Write a program to reverse a string' AND language = 'java'), '"Test"', '"tseT"', false);

-- Medium Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search tree' AND language = 'java'), 'insert(5), insert(3), insert(7), contains(3)', 'true', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search tree' AND language = 'java'), 'insert(5), insert(3), insert(7), contains(4)', 'false', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement binary search tree' AND language = 'java'), 'insert(5), delete(5), contains(5)', 'false', false);

-- Hard Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'java'), 'put(""key1"", 1), get(""key1"")', '1', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'java'), 'put(""key1"", 1), put(""key1"", 2), get(""key1"")', '2', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement concurrent hash map' AND language = 'java'), 'put(""key1"", 1), remove(""key1""), get(""key1"")', 'null', false);

-- Extreme Coding Questions
INSERT INTO test_cases (problem_id, input, expected_output, is_sample) VALUES
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'java'), 'addBlock(""data1""), getBlock(0)', 'Block(data1)', true),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'java'), 'addBlock(""data1""), addBlock(""data2""), getBlock(1)', 'Block(data2)', false),
((SELECT id FROM problems WHERE question = 'Write a program to implement distributed blockchain system' AND language = 'java'), 'addBlock(""data1""), validateChain()', 'true', false);