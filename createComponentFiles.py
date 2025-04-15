import os

def create_angular_component(component_name):
    lower_name = component_name.lower()

    # Paths
    base_path = './src/app/'
    os.makedirs(base_path, exist_ok=True)

    css_path = f'{base_path}{lower_name}.component.css'
    html_path = f'{base_path}{lower_name}.component.html'
    ts_path = f'{base_path}{lower_name}.component.ts'

    # CSS
    with open(css_path, 'w') as f:
        f.write(f'.{lower_name} {{\n\t\n}}')

    # HTML
    with open(html_path, 'w') as f:
        f.write(f'<main class="{lower_name}">\n\t\n</main>\n')

    # TS
    ts_content = f"""import {{ Component }} from '@angular/core';

@Component({{
\tselector: '{lower_name}',
\ttemplateUrl: './{lower_name}.component.html',
\tstyleUrl: './{lower_name}.component.css'
}})
export class {component_name}Component {{
\t
}}
"""
    with open(ts_path, 'w') as f:
        f.write(ts_content)

    print("Component files created!")

# Input
if __name__ == "__main__":
    file_type = input("Is it a page or a component? (page/component): ").strip().lower()
    if file_type not in ['page', 'component']:
        print("Invalid input. Please enter 'page' or 'component'.")
        exit(1)

    name = input("Enter the component class name (e.g. MySuperCoolComponent but without the \"Component\") : ")
    create_angular_component(name)