({
    setup: function(component) {
        // Replace the CDATA block with svg element
        // Workaround for bug in Aura Framework
        
        var svg1 = component.find("svg_content1");
        var value1 = svg1.getElement().innerText;
        value1 = value1.replace("", "");
        svg1.getElement().innerHTML = value1;
    }
})