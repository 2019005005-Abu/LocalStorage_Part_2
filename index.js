const addTocart=()=>{
    document.getElementById('add_btn').addEventListener('click',()=>{
        const product=document.getElementById('Key').value;
        const quality=document.getElementById('value').value;

        console.log(product,quality);
        disPlayProduct(product,quality)
        saveCart(product,quality)
    })
}

const disPlayProduct=(product,quality)=>{
  const mainDiv=document.getElementById('OlList');
  const li=document.createElement('li');
  li.innerText=`
    ${product}:${quality}
  `
  mainDiv.appendChild(li);
}

const storeddata=()=>{
    let store_cart=localStorage.getItem('mybox');
    let mybox={};
    console.log(store_cart)
    if(store_cart){
        mybox=JSON.parse(store_cart);
    }
    return mybox;

}


const saveCart=(product,quality)=>{
    const mybox=storeddata();
    console.log(mybox);
    mybox[product]=quality;
    console.log(product);
    //strinfied
    const stringified=JSON.stringify(mybox);
    console.log(stringified);

    //save
    localStorage.setItem('mybox',stringified);
    
}

const disPlayDataAll=()=>{
    const mybox=storeddata();
   for(let key in mybox){
    console.log(key);
    const value=mybox[key]
     console.log(key,value)

     disPlayProduct(key,value)
   }
}

//delete all data
const deleteAllDataInlocalstorage=()=>{
    document.getElementById('deleteLocalStaoage').addEventListener('click',()=>{
        localStorage.clear();
    })
}
deleteAllDataInlocalstorage()

disPlayDataAll()
addTocart();



//call the value using 
//
let count=0
const increment=document.getElementById("count")
let p=document.getElementById('zero_count');
//store data in the local storage
count=parseInt(localStorage.getItem('count')||0);
console.log(count)
const gettingIncrement=()=>{
  increment.addEventListener('click',()=>{
    count++
    localStorage.setItem('count',count);
    console.log(count)
    p.textContent= `Count:${count}`
    if(count>100 && count<0){
       alert("number  will not increment")
    }
  })

}
p.textContent=`Count:${count}`


//clear the localstorage
const clearLocalstorage=()=>{
    let clear=document.getElementById('clear');
    clear.addEventListener('click',()=>{
        localStorage.clear()
    })
}

clearLocalstorage()
gettingIncrement();



