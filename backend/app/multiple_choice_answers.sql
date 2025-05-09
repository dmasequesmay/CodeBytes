-- Sample multiple choice answers for Python questions

-- Easy Multiple Choice Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
-- Question: What is the output of print(2 + 2 * 3)?
((SELECT id FROM problems WHERE question = 'What is the output of print(2 + 2 * 3)?' AND language = 'python'), '8', true, 1),
((SELECT id FROM problems WHERE question = 'What is the output of print(2 + 2 * 3)?' AND language = 'python'), '12', false, 2),
((SELECT id FROM problems WHERE question = 'What is the output of print(2 + 2 * 3)?' AND language = 'python'), '6', false, 3),
((SELECT id FROM problems WHERE question = 'What is the output of print(2 + 2 * 3)?' AND language = 'python'), '14', false, 4),

-- Question: What is the correct way to create a dictionary in Python?
((SELECT id FROM problems WHERE question = 'What is the correct way to create a dictionary in Python?' AND language = 'python'), 'dict = {"key": "value"}', true, 1),
((SELECT id FROM problems WHERE question = 'What is the correct way to create a dictionary in Python?' AND language = 'python'), 'dict = ["key", "value"]', false, 2),
((SELECT id FROM problems WHERE question = 'What is the correct way to create a dictionary in Python?' AND language = 'python'), 'dict = ("key", "value")', false, 3),
((SELECT id FROM problems WHERE question = 'What is the correct way to create a dictionary in Python?' AND language = 'python'), 'dict = ["key" => "value"]', false, 4),

-- Question: What does the len() function do?
((SELECT id FROM problems WHERE question = 'What does the len() function do?' AND language = 'python'), 'Returns the length of a sequence or collection', true, 1),
((SELECT id FROM problems WHERE question = 'What does the len() function do?' AND language = 'python'), 'Converts to integer', false, 2),
((SELECT id FROM problems WHERE question = 'What does the len() function do?' AND language = 'python'), 'Converts to string', false, 3),
((SELECT id FROM problems WHERE question = 'What does the len() function do?' AND language = 'python'), 'Sorts the elements', false, 4),

-- Medium Multiple Choice Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
-- Question: What is the difference between deep copy and shallow copy?
((SELECT id FROM problems WHERE question = 'What is the difference between deep copy and shallow copy?' AND language = 'python'), 'Deep copy creates a new independent copy, shallow copy creates references to original objects', true, 1),
((SELECT id FROM problems WHERE question = 'What is the difference between deep copy and shallow copy?' AND language = 'python'), 'They both create independent copies', false, 2),
((SELECT id FROM problems WHERE question = 'What is the difference between deep copy and shallow copy?' AND language = 'python'), 'Deep copy is faster than shallow copy', false, 3),
((SELECT id FROM problems WHERE question = 'What is the difference between deep copy and shallow copy?' AND language = 'python'), 'Shallow copy creates a new independent copy', false, 4),

-- Question: Explain Python decorators with an example.
((SELECT id FROM problems WHERE question = 'Explain Python decorators with an example.' AND language = 'python'), 'Decorators are functions that modify the functionality of other functions without changing their code', true, 1),
((SELECT id FROM problems WHERE question = 'Explain Python decorators with an example.' AND language = 'python'), 'Decorators are used to create new functions', false, 2),
((SELECT id FROM problems WHERE question = 'Explain Python decorators with an example.' AND language = 'python'), 'Decorators are used to modify class attributes', false, 3),
((SELECT id FROM problems WHERE question = 'Explain Python decorators with an example.' AND language = 'python'), 'Decorators are used to create new classes', false, 4),

-- Hard Multiple Choice Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
-- Question: Explain Python garbage collection.
((SELECT id FROM problems WHERE question = 'Explain Python garbage collection.' AND language = 'python'), 'Python uses reference counting and generational garbage collection to manage memory', true, 1),
((SELECT id FROM problems WHERE question = 'Explain Python garbage collection.' AND language = 'python'), 'Python uses manual memory management', false, 2),
((SELECT id FROM problems WHERE question = 'Explain Python garbage collection.' AND language = 'python'), 'Python uses only reference counting', false, 3),
((SELECT id FROM problems WHERE question = 'Explain Python garbage collection.' AND language = 'python'), 'Python uses only generational garbage collection', false, 4),

-- Question: What is the difference between __new__ and __init__?
((SELECT id FROM problems WHERE question = 'What is the difference between __new__ and __init__?' AND language = 'python'), '__new__ creates the instance, __init__ initializes it', true, 1),
((SELECT id FROM problems WHERE question = 'What is the difference between __new__ and __init__?' AND language = 'python'), 'They are the same', false, 2),
((SELECT id FROM problems WHERE question = 'What is the difference between __new__ and __init__?' AND language = 'python'), '__init__ creates the instance', false, 3),
((SELECT id FROM problems WHERE question = 'What is the difference between __new__ and __init__?' AND language = 'python'), '__new__ initializes the instance', false, 4),

-- Extreme Multiple Choice Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
-- Question: Explain Python bytecode and how it works.
((SELECT id FROM problems WHERE question = 'Explain Python bytecode and how it works.' AND language = 'python'), 'Python code is compiled to bytecode which is then executed by the Python virtual machine', true, 1),
((SELECT id FROM problems WHERE question = 'Explain Python bytecode and how it works.' AND language = 'python'), 'Python code is directly executed by the CPU', false, 2),
((SELECT id FROM problems WHERE question = 'Explain Python bytecode and how it works.' AND language = 'python'), 'Python code is compiled to machine code', false, 3),
((SELECT id FROM problems WHERE question = 'Explain Python bytecode and how it works.' AND language = 'python'), 'Python code is interpreted line by line', false, 4),

-- Java Multiple Choice Questions
INSERT INTO multiple_choice_answers (problem_id, choice_text, is_correct, choice_order) VALUES
-- Question: What is the difference between == and equals()?
((SELECT id FROM problems WHERE question = 'What is the difference between == and equals()?' AND language = 'java'), '== compares object references, equals() compares object contents', true, 1),
((SELECT id FROM problems WHERE question = 'What is the difference between == and equals()?' AND language = 'java'), 'They are the same', false, 2),
((SELECT id FROM problems WHERE question = 'What is the difference between == and equals()?' AND language = 'java'), 'equals() compares object references', false, 3),
((SELECT id FROM problems WHERE question = 'What is the difference between == and equals()?' AND language = 'java'), '== compares object contents', false, 4),

-- Question: What is the difference between class and interface?
((SELECT id FROM problems WHERE question = 'What is the difference between class and interface?' AND language = 'java'), 'Class defines implementation, interface defines contract', true, 1),
((SELECT id FROM problems WHERE question = 'What is the difference between class and interface?' AND language = 'java'), 'They are the same', false, 2),
((SELECT id FROM problems WHERE question = 'What is the difference between class and interface?' AND language = 'java'), 'Class defines contract, interface defines implementation', false, 3),
((SELECT id FROM problems WHERE question = 'What is the difference between class and interface?' AND language = 'java'), 'Interface can have implementation', false, 4);
