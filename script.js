document.getElementById('save-btn').addEventListener('click', () => {
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
        'Revenue Streams': document.getElementById('revenue-streams-text').value
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

document.getElementById('load-btn').addEventListener('click', () => {
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
        };

        reader.readAsText(file);
    });
});

// Initialize Bootstrap tooltips
document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
