sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nico.teste.novo.controller.S1", {
            onInit: function () {

            },


            onItemPress:function (oEvent) {
                var parametro = oEvent.getParameters();
                var oListItem = parametro.listItem;
                // var sId = oListItem.getIntro();

                var oContexto = oListItem.getBindingContext();
                var oCompra = oContexto.getObject();
                var sId = oCompra.ProductID;

                // alert(sId);
                this.getOwnerComponent().getRouter().navTo("detail",{ProductID:sId});
            }




        });
    });
