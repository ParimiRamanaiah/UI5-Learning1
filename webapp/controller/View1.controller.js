sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
  "sap/ui/model/odata/v2/ODataModel",
], (Controller,JSONModel, ODataModel) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            this.txt=this.getView().byId("title").getText();

            //var myJsonModel=new JSONModel();
            //console.log(myJsonModel);

            /*var myJsonModel=new JSONModel({
                "welcomeTxt":"Welcome To SAP UI5",
                "txt":"Hello"
            })*/

                this.myJsonModel=new JSONModel({
                    "welcomeTxt":"Welcome To SAP UI5",
                    "txt":"Hello"
                })

            this.getView().setModel(this.myJsonModel,"jsonModel");

            this.welcome=this.myJsonModel.getProperty("/welcomeTxt")

        },

        onPressButton:function(){
            this.getOwnerComponent().getRouter().navTo("User");
    },



onPressBack:function(){
        this.getOwnerComponent().getRouter().navTo("RouteUser");

        //history.go(-1);
},

onChange:function(){
    var newTxt="Hello"+"-"+this.txt;
    //var txt=this.getView().byId("title").getText();
    this.getView().byId("title").setText(newTxt);

},

onChangeJson:function(){
    var name=this.myJsonModel.getProperty("/txt");
    console.log(name);
    var newTxt=name+" "+" -"+this.welcome;
    this.myJsonModel.setProperty("/welcomeTxt",newTxt);
},

onPressAction:function(){
    var num=this.byId("idNum").getValue();
    var name=this.byId("idName").getValue();

    if(num===""){
        //MessageBox.error("Employee Id is mandatory field, Please fill!");
        //MessageBox.success("Employee Id is mandatory field, Please fill!");
        MessageBox.warning("Employee Id is mandatory field, Please fill!")


    //this.getView().byId("idNum").setValueState("Error");
    //this.getView().byId("idNum").setValueStateText("Employee Id is mandatory field, Please fill!");
    }

    if(!name){
    this.getView().byId("idName").setValueState("Error");
    this.getView().byId("idName").setValueStateText("Employee Name is mandatory field, Please fill!");
    }
}
    });
});