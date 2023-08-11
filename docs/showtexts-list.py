import csv
import regex
import os
import sys

# The PCRE regex pattern with the named groups
pattern = regex.compile(r'(?:(?<=[^`\\])|^)\[(?=[^@\]]+\]\([#a-z0-9_-]*@[:a-z0-9_-]*\))(?P<showtext>[^\n\]@]+)\]\((?P<id>[a-z0-9_-]+)?(?:#(?P<trait>[a-z0-9_-]+))?@(?P<scopetag>[a-z0-9_-]+)?(?::(?P<vsntag>[a-z0-9_-]+))?\)')

# Default field name
field_name = 'showtext'

# Parse command-line arguments
args = sys.argv[1:]

# Check for help option
if '-h' in args:
    print('Usage: python script_name.py [options] [start_path]')
    print('Options:')
    print('-h\t\tShow help text')
    sys.exit()

# Set to store unique field values
unique_fields = set()

# Get the directory containing the script
script_directory = os.path.dirname(os.path.abspath(sys.argv[0]))

# Get the starting path for traversal (provided as command-line argument, if available)
start_directory = args[-1] if args and not args[-1].startswith('-') else script_directory

# Check if the field name exists in the regex pattern
if field_name not in pattern.groupindex:
    print(f"Error: Field '{field_name}' does not exist in the regex pattern.")
    sys.exit(1)

# Make the starting path absolute, relative to the script directory
start_path = os.path.join(script_directory, start_directory)

# Recursive traversal of the repository, inspecting Markdown files only
for root, dirs, files in os.walk(start_path):
    for file_name in files:
        _, file_ext = os.path.splitext(file_name)
        if file_ext.lower() in ('.md', '.mdx'):
            file_path = os.path.join(root, file_name)

            with open(file_path, 'r', encoding='utf-8') as file:
                contents = file.read()

            matches = pattern.finditer(contents)
            for match in matches:
                if 'id' in match.groupdict() and match.group('id') is not None:
                    unique_fields.add(match.group('id'))
                elif match.group(field_name) is not None:
                    unique_fields.add(match.group(field_name))

# Remove None values and sort the unique fields
unique_fields = sorted([i for i in unique_fields if i is not None])

# Prepare to write to CSV
with open('unique_fields.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['original', 'processed']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for field in unique_fields:
        # Lowercase the field
        lower_field = field.lower()

        # Replace character sequences not in [a-z0-9_-] with -
        replaced_field = regex.sub(r'[^a-z0-9_-]+', '-', lower_field)

        # Replace sequences of - with single -
        single_dash_field = regex.sub(r'-+', '-', replaced_field)

        # Remove leading or trailing dashes
        final_field = single_dash_field.strip('-')

        writer.writerow({'original': field, 'processed': final_field})

# Print or write the listing to a file
print('\n'.join(unique_fields))
