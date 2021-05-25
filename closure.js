var accountInfoList = [];
var modAccount =function (pAccountName, pBalance){
    function addAccount(){
        var account = {pAccountName: pBalance};
        accountInfoList[accountInfoList.length] = account;
    }
    addAccount();
};

function createAccount(){
    var pAccountName = document.getElementById("account").value;
    var pBalance = document.getElementById("amount").value;
    modAccount(pAccountName, pBalance);

    var log = document.getElementById("log").innerHTML;
    log = log + "\n" + "Account name: " + pAccountName + "  Balance: " + pBalance;
    document.getElementById("log").innerHTML = log;
}