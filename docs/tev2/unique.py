import os
import pandas as pd
import shutil

def process_excel_row(row):
    # Capitalize the first character of every word in 'original'
    original = ' '.join(word.capitalize() for word in row['original'].split())

    # Replace empty or None values with empty string
    termid = str(row['termid']) or ''          # Convert to string and handle NaN
    formphrase = str(row['formphrase']) or ''  # Convert to string and handle NaN
    synonymOf = str(row['synonymOf']) or ''    # Convert to string and handle NaN
    grouptags = str(row['grouptags']) or ''    # Convert to string and handle NaN

    today = pd.Timestamp.today().strftime('%Y%m%d')

    # Filenames of files to process and to write
    term_file_path = os.path.join('terms', f'{termid}.md')
    new_term_file_path = os.path.join('terms', f'_{termid}.md')

    # Check if a term file already exists for the given termid
    if os.path.exists(term_file_path):
        # Read the existing content of the term file
        with open(term_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # If 'formphrase' is not empty, replace the 'formPhrases' line in the frontmatter
        if formphrase.strip():
            frontmatter_start = content.find('---') + 3
            frontmatter_end = content.find('---', frontmatter_start)
            frontmatter = content[frontmatter_start:frontmatter_end].strip()
            frontmatter_lines = frontmatter.split('\n')
            updated_frontmatter_lines = [line.strip() if line.startswith('formPhrases:') else line for line in frontmatter_lines]
            updated_frontmatter_lines.append(f'formPhrases: {formphrase}')
            updated_frontmatter = '\n'.join(updated_frontmatter_lines)
            content = content[:frontmatter_start] + updated_frontmatter + content[frontmatter_end:]

        # Create the new term file with updated content
        with open(new_term_file_path, 'w', encoding='utf-8') as f:
            f.write(content)
    else:
        # Create a new term file with the specified template and replace variable placeholders
        template = f"""---
# Docusaurus header
id: {termid}
# TEv2 Curated Text Header
term: {termid}
termType: concept
isa:
glossaryTerm: {original}
glossaryText: "glossary-text for '{{original}}'."
hoverText: "hover-text for '{{original}}'."
synonymOf: {synonymOf}
grouptags:
formPhrases: {formphrase}
# Curation status
status: proposed
created: {today}
updated: {today}
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs/tev2)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# {original}

:::caution
The entire section on Terminology Engine v 2 (TEv2) is still under construction.<br/>
As TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.<br/>[readers](@) will need to see through some (currently unprocessed) notational conventions.
:::

### Summary

:::info Editor's Note
This file has been automatically created; it's header needs to be revised and its contents needs to be properly written.
:::
"""
        template = template.replace('{{original}}', original)
        template = template.replace('{{termid}}', termid)
        template = template.replace('{{formphrase}}', formphrase)
        template = template.replace('{{synonymOf}}', synonymOf)
        template = template.replace('{{grouptags}}', grouptags)
        template = template.replace('{{today}}', today)

        with open(new_term_file_path, 'w', encoding='utf-8') as f:
            f.write(template)

def main():
    # Read the excel file into a DataFrame
    excel_file = 'unique_fields.xlsx'
    df = pd.read_excel(excel_file)

    # Process each row in the DataFrame (excluding the header)
    for _, row in df[1:].iterrows():
        process_excel_row(row)

if __name__ == '__main__':
    main()
