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
        
        var svg5  = component.find("svg_content5");
        var value5 = svg5.getElement().innerText;
        value5 = value5.replace("", "");
        svg5.getElement().innerHTML = value5;
        
        var svg6  = component.find("svg_content6");
        var value6 = svg6.getElement().innerText;
        value6 = value6.replace("", "");
        svg6.getElement().innerHTML = value6;
        
        var svg7  = component.find("svg_content7");
        var value7 = svg7.getElement().innerText;
        value7 = value7.replace("", "");
        svg7.getElement().innerHTML = value7;
        
        var svg8  = component.find("svg_content8");
        var value8 = svg8.getElement().innerText;
        value8 = value8.replace("", "");
        svg8.getElement().innerHTML = value8;
        
        var svg9  = component.find("svg_content9");
        var value9 = svg9.getElement().innerText;
        value9 = value9.replace("", "");
        svg9.getElement().innerHTML = value9;
	}
})