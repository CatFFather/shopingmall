const clothes = [
    {
        color: 'blue',
        kind:'pants',
        size:'small',
        sex:'man',
        img:'img/blue_p.png'
    },
    {
        color: 'blue',
        kind:'skirt',
        size:'small',
        sex:'female',
        img:'img/blue_s.png'
    },
    {
        color: 'blue',
        kind:'shirt',
        size:'large',
        sex:'male',
        img:'img/blue_t.png'
    },
    {
        color: 'yellow',
        kind:'pants',
        size:'large',
        sex:'man',
        img:'img/yellow_p.png'
    },
    {
        color: 'yellow',
        kind:'skirt',
        size:'large',
        sex:'female',
        img:'img/yellow_s.png'
    },
    {
        color: 'yellow',
        kind:'shirt',
        size:'large',
        sex:'male',
        img:'img/yellow_t.png'
    },
    {
        color: 'pink',
        kind:'pants',
        size:'small',
        sex:'female',
        img:'img/pink_p.png'
    },
    {
        color: 'pink',
        kind:'skirt',
        size:'small',
        sex:'female',
        img:'img/pink_s.png'
    },
    {
        color: 'pink',
        kind:'shirt',
        size:'large',
        sex:'female',
        img:'img/pink_t.png'
    }
]

let itmesList = document.querySelector('.contents .itmesList ul')

// 필터링 할 type, value를 파라미터로 받아준다. (kind or color)
function getList(type,value){
    itmesList.innerHTML=''
    const newClothes = clothes.filter((clothe,index)=>{
        return clothe[type]==value
    })
    newClothes.forEach((clothe,index)=>{
        console.log(clothe)
        let li = document.createElement('li');
        let img = document.createElement('img');
        let sexAndSize = document.createElement('span');
        img.src = clothe.img
        sexAndSize.innerHTML=`${clothe.sex}, ${clothe.size} size `
        itmesList.appendChild(li);
        li.appendChild(img);
        li.appendChild(sexAndSize);
    })
}



