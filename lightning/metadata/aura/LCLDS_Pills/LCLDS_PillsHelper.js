({
    setup: function(component) {
        // Replace the CDATA block with svg element
        // Workaround for bug in Aura Framework
        
        var svg1 = component.find("svg_content1");
        var value1 = svg1.getElement().innerText;
        value1 = value1.replace("", "");
        svg1.getElement().innerHTML = value1;
        
        var svg2 = component.find("svg_content2");
        var value2 = svg2.getElement().innerText;
        value2 = value2.replace("", "");
        svg2.getElement().innerHTML = value2;
        
        var svg3 = component.find("svg_content3");
        var value3 = svg3.getElement().innerText;
        value3 = value3.replace("", "");
        svg3.getElement().innerHTML = value3;
        
        var svg4  = component.find("svg_content4");
        var value4 = svg4.getElement().innerText;
        value4 = value4.replace("", "");
        svg4.getElement().innerHTML = value4;
    }
})