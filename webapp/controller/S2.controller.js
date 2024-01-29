sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nico.teste.novo.controller.S2", {
            onInit: function () {
                this._oRouter = this.getOwnerComponent().getRouter(); 
                this._oRouter.getRoute("detail").attachPatternMatched(this.onPatternMatched,this)



            },


            onPatternMatched:function(oEvent){
          


                var sId = oEvent.getParameters().arguments.ProductID;
                this.getView().bindElement( {
                    path:"/Products("+sId+")"});
            },

            onNavButtonPress: function(oEvent){


                this._oRouter.navTo("default");


            }
        });
    });
