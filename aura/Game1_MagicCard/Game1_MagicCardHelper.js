({  
    onLoad: function(component, event, helper) { 

        var Table1 = [];
        for(var i = 1; i <= 63; i++){
            if(i<10){
                i='\xa0\xa0'+i;
            } 
            Table1.push(i);
            i++;
        }
        var shuffledTable1 = shuffle(Table1);
        component.set("v.shuffledTable1",shuffledTable1);

        var myMap1 = new Map();
        for(var i in shuffledTable1){
            myMap1.set(i, shuffledTable1[i]);
        }

        var arrayOfMapKeys = [];
        for (var [key, value] of myMap1) {
            arrayOfMapKeys.push(key);
        }              

        var Table2 = [];
        var j = 0;
        for(var i = 0; i<63; i++){
            if(i%2 == 0 ){
                j += 2;
            }else{
                if(j<=63){
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table2.push(j);
                    j++;
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table2.push(j);
                    j++;
                }
            }
        }

        var shuffledTable2 = shuffle(Table2);
        component.set("v.shuffledTable1",shuffledTable1);

        var myMap2 = new Map();
        for(var i in shuffledTable2){
            myMap2.set(i, shuffledTable2[i]);
        }

        var Table3 = [];
        var j = 0;
        for(var i = 0; i<63; i++){
            if(i%3 == 0 ){
                j += 4;
            }else{
                if(j<=63){
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table3.push(j);
                    j++;
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table3.push(j);
                    j++;
                }
            }
        }
        var shuffledTable3 = shuffle(Table3);
        component.set("v.shuffledTable3",shuffledTable3);

        var myMap3 = new Map();
        for(var i in shuffledTable3){
            myMap3.set(i, shuffledTable3[i]);
        }

        var Table4 = [];
        var j = 0;
        for(var i = 0; i<63; i++){
            if(i%5 == 0 ){
                j += 8;
            }else{
                if(j<=63){
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table4.push(j);
                    j++;
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table4.push(j);
                    j++;
                }
            }
        }
        var shuffledTable4 = shuffle(Table4);
        component.set("v.shuffledTable4",shuffledTable4);

        var myMap4 = new Map();
        for(var i in shuffledTable4){
            myMap4.set(i, shuffledTable4[i]);
        }

        var Table5 = [];
        var j = 0;
        for(var i = 0; i<63; i++){
            if(i%9 == 0 ){
                j += 16;
            }else{
                if(j<=63){
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table5.push(j);
                    j++;
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table5.push(j);
                    j++;
                }
            }
        }
        var shuffledTable5 = shuffle(Table5);
        component.set("v.shuffledTable5",shuffledTable5);

        var myMap5 = new Map();
        for(var i in shuffledTable5){
            myMap5.set(i, shuffledTable5[i]);
        }

        var Table6 = [];
        var j = 0;
        for(var i = 0; i<63; i++){
            if(i%17 == 0 ){
                j += 32;
            }else{
                if(j<=63){
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table6.push(j);
                    j++;
                    if(j<10){
                        j='\xa0\xa0'+j;
                    }
                    Table6.push(j);
                    j++;
                }
            }
        }
        var shuffledTable6 = shuffle(Table6);
        component.set("v.shuffledTable6",shuffledTable6);

        var myMap6 = new Map();
        for(var i in shuffledTable6){
            myMap6.set(i, shuffledTable6[i]);
        }

        component.set("v.ArrayofShuffulledTables",shuffle([myMap1, myMap2, myMap3, myMap4, myMap5, myMap6]));

        var ShuffuledArrayIndex = shuffle([0, 1, 2, 3, 4, 5]);

        component.set("v.Table1",component.get("v.ArrayofShuffulledTables")[ShuffuledArrayIndex[0]]);
        component.set("v.Table2",component.get("v.ArrayofShuffulledTables")[ShuffuledArrayIndex[1]]);
        component.set("v.Table3",component.get("v.ArrayofShuffulledTables")[ShuffuledArrayIndex[2]]);
        component.set("v.Table4",component.get("v.ArrayofShuffulledTables")[ShuffuledArrayIndex[3]]);
        component.set("v.Table5",component.get("v.ArrayofShuffulledTables")[ShuffuledArrayIndex[4]]);
        component.set("v.Table6",component.get("v.ArrayofShuffulledTables")[ShuffuledArrayIndex[5]]);

        component.set("v.lstKey",arrayOfMapKeys);

        // Start generic Function to get shuffled values for all 6 table values... 
        function shuffle(generictablevalues) {
            var currentIndex = generictablevalues.length, temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = generictablevalues[currentIndex];
                generictablevalues[currentIndex] = generictablevalues[randomIndex];
                generictablevalues[randomIndex] = temporaryValue;
            }

        return generictablevalues;
        }
        // End generic Function to get shuffled values for all 6 table values...


            var spinner = component.find('initSpinner');
            $A.util.addClass(spinner, "slds-hide");

    }
})