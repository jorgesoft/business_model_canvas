// Save to file functionality
document.getElementById('save-to-file').addEventListener('click', () => {
    const data = {
        'Business Name': document.getElementById('business-name').value,
        'Key Partnerships': document.getElementById('key-partnerships-text').value,
        'Key Activities': document.getElementById('key-activities-text').value,
        'Key Resources': document.getElementById('key-resources-text').value,
        'Value Propositions': document.getElementById('value-propositions-text').value,
        'Customer Relationships': document.getElementById('customer-relationships-text').value,
        'Channels': document.getElementById('channels-text').value,
        'Customer Segments': document.getElementById('customer-segments-text').value,
        'Cost Structure': document.getElementById('cost-structure-text').value,
        'Revenue Streams': document.getElementById('revenue-streams-text').value,
        'Business Hypothesis': document.getElementById('business-hypothesis').value,
        'Key Assumptions': document.getElementById('key-assumptions').value
    };

    const yamlStr = jsyaml.dump(data);
    const blob = new Blob([yamlStr], { type: 'application/x-yaml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'business_model_canvas.yaml';
    a.click();
    URL.revokeObjectURL(url);
});

// Copy YAML to clipboard functionality
document.getElementById('copy-yaml').addEventListener('click', () => {
    const data = {
        'Business Name': document.getElementById('business-name').value,
        'Key Partnerships': document.getElementById('key-partnerships-text').value,
        'Key Activities': document.getElementById('key-activities-text').value,
        'Key Resources': document.getElementById('key-resources-text').value,
        'Value Propositions': document.getElementById('value-propositions-text').value,
        'Customer Relationships': document.getElementById('customer-relationships-text').value,
        'Channels': document.getElementById('channels-text').value,
        'Customer Segments': document.getElementById('customer-segments-text').value,
        'Cost Structure': document.getElementById('cost-structure-text').value,
        'Revenue Streams': document.getElementById('revenue-streams-text').value,
        'Business Hypothesis': document.getElementById('business-hypothesis').value,
        'Key Assumptions': document.getElementById('key-assumptions').value
    };

    const yamlStr = jsyaml.dump(data);

    navigator.clipboard.writeText(yamlStr).then(() => {
        alert('YAML content copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy YAML: ', err);
    });
});

// Load YAML from file functionality
document.getElementById('load-from-file').addEventListener('click', () => {
    const fileInput = document.getElementById('yaml-file');
    fileInput.click();

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const data = jsyaml.load(reader.result);
            document.getElementById('business-name').value = data['Business Name'] || '';
            document.getElementById('key-partnerships-text').value = data['Key Partnerships'] || '';
            document.getElementById('key-activities-text').value = data['Key Activities'] || '';
            document.getElementById('key-resources-text').value = data['Key Resources'] || '';
            document.getElementById('value-propositions-text').value = data['Value Propositions'] || '';
            document.getElementById('customer-relationships-text').value = data['Customer Relationships'] || '';
            document.getElementById('channels-text').value = data['Channels'] || '';
            document.getElementById('customer-segments-text').value = data['Customer Segments'] || '';
            document.getElementById('cost-structure-text').value = data['Cost Structure'] || '';
            document.getElementById('revenue-streams-text').value = data['Revenue Streams'] || '';
            document.getElementById('business-hypothesis').value = data['Business Hypothesis'] || '';
            document.getElementById('key-assumptions').value = data['Key Assumptions'] || '';
        };

        reader.readAsText(file);
    });
});

// Paste YAML functionality
document.getElementById('paste-yaml').addEventListener('click', () => {
    const yamlInput = prompt('Paste your YAML content here:');

    if (yamlInput) {
        try {
            const data = jsyaml.load(yamlInput);
            document.getElementById('business-name').value = data['Business Name'] || '';
            document.getElementById('key-partnerships-text').value = data['Key Partnerships'] || '';
            document.getElementById('key-activities-text').value = data['Key Activities'] || '';
            document.getElementById('key-resources-text').value = data['Key Resources'] || '';
            document.getElementById('value-propositions-text').value = data['Value Propositions'] || '';
            document.getElementById('customer-relationships-text').value = data['Customer Relationships'] || '';
            document.getElementById('channels-text').value = data['Channels'] || '';
            document.getElementById('customer-segments-text').value = data['Customer Segments'] || '';
            document.getElementById('cost-structure-text').value = data['Cost Structure'] || '';
            document.getElementById('revenue-streams-text').value = data['Revenue Streams'] || '';
            document.getElementById('business-hypothesis').value = data['Business Hypothesis'] || '';
            document.getElementById('key-assumptions').value = data['Key Assumptions'] || '';
        } catch (error) {
            alert('Invalid YAML format. Please try again.');
            console.error('Error parsing YAML:', error);
        }
    }
});

// Initialize Bootstrap tooltips
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

// Light-dark mode functinality
const themeSwitch = document.getElementById('darkModeSwitch');
const themeIcon = document.getElementById('theme-icon');

// Set initial theme to light
document.body.classList.add('light-mode');

// Toggle theme
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('bi-brightness-high');
        themeIcon.classList.add('bi-moon');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-brightness-high');
    }
});
