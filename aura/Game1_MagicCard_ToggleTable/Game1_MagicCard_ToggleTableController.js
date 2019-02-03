({
	doInit : function(component, event, helper) {

		var myMap = component.get("v.map");
		var key = component.get("v.key");

		if(key % 8 == 0 && key != 0){
	    	component.set("v.ShowtrTab",true);
		}

		if(key != null && key != undefined){
			component.set("v.value",myMap.get(component.get("v.key")));
        }
	}
})