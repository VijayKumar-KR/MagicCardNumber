({
	doInit : function(component, event, helper) {
        var getbackimgurl = $A.get('$Resource.Games_line') + '/technology-1531478253116-9295.jpg';
        component.set("v.backgroundImageURL",getbackimgurl);
		helper.onLoad(component, event, helper);
    },

    Onclickstart : function(component, event, helper) {
    	component.set("v.hideFloatingtext",false);
    },

    getValue1 : function(component, event, helper) {

    	if(component.get("v.borderColor1")){
            component.set("v.borderColor1",false);
            component.set("v.Table1MinValue",0);
        }else{
            component.set("v.borderColor1",true);

        var leastnumber = [];
        for (var [key, value] of component.get("v.Table1")) {
            leastnumber.push(value);
        } 

            Array.min = function( leastnumber ){
    			return Math.min.apply( Math, leastnumber );
    		};

		component.set("v.Table1MinValue",Array.min(leastnumber));
        }
    },

    getValue2 : function(component, event, helper) {

    	if(component.get("v.borderColor2")){
            component.set("v.borderColor2",false);
            component.set("v.Table2MinValue",0);
        }else{
            component.set("v.borderColor2",true);

            var leastnumber = [];
        for (var [key, value] of component.get("v.Table2")) {
            leastnumber.push(value);
        } 

            Array.min = function( leastnumber ){
                return Math.min.apply( Math, leastnumber );
            };

		component.set("v.Table2MinValue",Array.min(leastnumber));
        }
    },

    getValue3 : function(component, event, helper) {

    	if(component.get("v.borderColor3")){
            component.set("v.borderColor3",false);
            component.set("v.Table3MinValue",0);
        }else{
            component.set("v.borderColor3",true);

            var leastnumber = [];
        for (var [key, value] of component.get("v.Table3")) {
            leastnumber.push(value);
        } 

            Array.min = function( leastnumber ){
                return Math.min.apply( Math, leastnumber );
            };

		component.set("v.Table3MinValue",Array.min(leastnumber));
        }
    },

    getValue4 : function(component, event, helper) {

    	if(component.get("v.borderColor4")){
            component.set("v.borderColor4",false);
            component.set("v.Table4MinValue",0);
        }else{
            component.set("v.borderColor4",true);

            var leastnumber = [];
        for (var [key, value] of component.get("v.Table4")) {
            leastnumber.push(value);
        } 

            Array.min = function( leastnumber ){
                return Math.min.apply( Math, leastnumber );
            };

        component.set("v.Table4MinValue",Array.min(leastnumber));
        }
    },

    getValue5 : function(component, event, helper) {

    	if(component.get("v.borderColor5")){
            component.set("v.borderColor5",false);
            component.set("v.Table5MinValue",0);
        }else{
            component.set("v.borderColor5",true);

            var leastnumber = [];
        for (var [key, value] of component.get("v.Table5")) {
            leastnumber.push(value);
        } 

            Array.min = function( leastnumber ){
                return Math.min.apply( Math, leastnumber );
            };

		component.set("v.Table5MinValue",Array.min(leastnumber));
        }
    },

    getValue6 : function(component, event, helper) {

    	if(component.get("v.borderColor6")){
            component.set("v.borderColor6",false);
            component.set("v.Table6MinValue",0);
        }else{
            component.set("v.borderColor6",true);

            var leastnumber = [];
        for (var [key, value] of component.get("v.Table6")) {
            leastnumber.push(value);
        } 

            Array.min = function( leastnumber ){
                return Math.min.apply( Math, leastnumber );
            };

		component.set("v.Table6MinValue",Array.min(leastnumber));
        }
    },

    StartGame : function(component, event, helper){
        component.set("v.showModelforStart",false);
    },

    getMynumber : function(component, event, helper){

    	if(component.get("v.borderColor6") || component.get("v.borderColor5") || component.get("v.borderColor4") || 
    		component.get("v.borderColor3") || component.get("v.borderColor2") || component.get("v.borderColor1"))
    	{  
    		component.set("v.FinalNumber",component.get("v.Table6MinValue")+component.get("v.Table5MinValue")
    								 +component.get("v.Table4MinValue")+component.get("v.Table3MinValue")
    								 +component.get("v.Table2MinValue")+component.get("v.Table1MinValue"));
    	}
    	if(component.get("v.FinalNumber") != 0){
    		component.set("v.showModelforResult",true);
    	}else{
    		alert('Please select the box');
    		// var toastEvent = $A.get("e.force:showToast");
	     //        toastEvent.setParams({
	     //            "type"   : "error",
	     //            "title"  : "Error!",
	     //            "message": 'Please select the box'; 
	     //        });
      //       toastEvent.fire();
    	}

        component.set("v.borderColor1",false);
        component.set("v.borderColor2",false);
        component.set("v.borderColor3",false);
        component.set("v.borderColor4",false);
        component.set("v.borderColor5",false);
        component.set("v.borderColor6",false);
    },

    closeModal : function(component, event, helper){
    	component.set("v.FinalNumber",0);
    	component.set("v.borderColor1",false);
    	component.set("v.borderColor2",false);
    	component.set("v.borderColor3",false);
    	component.set("v.borderColor4",false);
    	component.set("v.borderColor5",false);
    	component.set("v.borderColor6",false);
    	component.set("v.Table1MinValue",0);
    	component.set("v.Table2MinValue",0);
    	component.set("v.Table3MinValue",0);
    	component.set("v.Table4MinValue",0);
    	component.set("v.Table5MinValue",0);
    	component.set("v.Table6MinValue",0);
    	component.set("v.showModelforResult",false);
        component.set("v.lstKey",null);
    	var spinner = component.find('initSpinner');
			$A.util.removeClass(spinner, "slds-hide");
			helper.onLoad(component, event, helper);
    }
})