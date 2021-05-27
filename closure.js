
var account = (function (){
    let accountInfoList = [];
    let addAccount = function (pAccountName, pBalance){
        let bankAccount  ={"name": pAccountName, "balace": pBalance};
        accountInfoList.push(bankAccount);
        wlog();
    }
    let wlog = function(){
        var log = "";
        for(let i = 0 ; i<accountInfoList.length;i++){
            let bankAccount = accountInfoList[i];
            log +="Account name: " + bankAccount.name ;
            log +="  Balance: " + bankAccount.balace 
            log += "\n";
        }

        document.getElementById("log").innerHTML = log;
    }
    return {
        addAccount: addAccount,
        writeLog: wlog
    }
})();

function createAccount(){
    
    var pAccountName = document.getElementById("account").value;
    var pBalance = document.getElementById("amount").value;
    var acnt = account;
    
    acnt.addAccount(pAccountName, pBalance);
}