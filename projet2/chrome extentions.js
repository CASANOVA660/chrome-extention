let inputVal=[];
let inputEL=document.getElementById("inputEl");
const saveBtn=document.getElementById("save-el");
const saveTab=document.getElementById("save--el")
let ulEL=document.getElementById("ul-el");
let deleteBtn=document.getElementById("delete-btn");
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("inputVal"));
if(leadsFromLocalStorage){
    inputVal=leadsFromLocalStorage;
    render(inputVal);
}
saveTab.addEventListener("click",function(){
    chrome.tabs.query({active:true , currentWindow:true},function(tabs){
        inputVal.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(inputVal));
        render(inputVal);
    })
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    inputVal=[];
    render(inputVal);


})
saveBtn.addEventListener("click",function(){
    inputVal.push(inputEL.value);
    inputEL.value="";
    localStorage.setItem("myArr",JSON.stringify(inputVal));
    render(inputVal);

})
function render(arr){
    let htmlDom=""
    for(let i=0;i<arr.length;i++){
        htmlDom+=` <li><a target='_blank' href="${arr[i]}">${arr[i]}</a></li>`;
    }
    ulEL.innerHTML=htmlDom;
}

