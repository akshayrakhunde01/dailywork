let btn = document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');

btn.addEventListener('click',()=>{
    //create 
    let item = document.createElement('li');
    let dele = document.createElement('button')
    dele.innerText="delete"
    dele.classList.add('delete')
    item.innerText=inp.value;
    
    ul.appendChild(item);
    item.appendChild(dele);
    inp.value=""


})

ul.addEventListener('click',(event)=>{
    if(event.target.nodeName=='BUTTON'){
        let lsitem = event.target.parentElement;
        lsitem.remove();
    }

    // console.log(event.target.nodeName ,"cliked");

})


// let deltask = document.querySelectorAll('.delete');

// for(deltask of deltask){
//     deltask.addEventListener('click',()=>{
//         let para = deltask.parentElement;
//         // console.log(para);
//         para.remove();

//     })
// }