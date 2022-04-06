const ls = [51, 56, 58, 59,61]

const func = (k,ls,t)=>{
    if(ls.length!==5){
        return null;
    }
    if(k>ls.length-1){
        return null;
    }
    const mainArr=[]
    let newArr = ls.slice(0,k)
    const endArr = ls.slice(k)
    const combArr = []
    mainArr.push(newArr)
    if(k==3){
        for (let i = 0;i<endArr.length;i++){
            for(let j =0;j<newArr.length;j++){
                if(j==newArr.length-1){
                    const arr = [...newArr];
                    arr[j] = endArr[i]
                    mainArr.push(arr)
                    combArr.push(arr)
                }
            }
        }
        for (let i = 0;i<combArr.length;i++){
            for (let j =0;j<combArr[i].length;j++){
                if(j!=0 && j!= combArr[i].length-1){
                    const ar = [...combArr[i]]
                    ar[j] = newArr[newArr.length-1]
                    mainArr.push(ar)
                }
            }
        }
        const ar = [...mainArr[mainArr.length-1]]
        ar[ar.length-2] = ls[ls.length-2]
        mainArr.push(ar)

        for(let i=0;i<endArr.length;i++){
            const othArr = ls.slice(1,3)
            othArr.push(endArr[i])
            mainArr.push(othArr)
        }


        for(let i=0;i<endArr.length;i++){
            const otherArr = ar.slice(1,3)
            otherArr.unshift(ls[i+1])
            mainArr.push(otherArr)
        }

        const sumArr=[]

        for(let i=0;i<mainArr.length;i++){
            let sum=0;
            for(let j=0;j<mainArr[i].length;j++){
                sum+=mainArr[i][j]
            }
            sumArr.push(sum)
        }

        const reversedArr = sumArr.reverse()

        for(let i=0;i<reversedArr.length;i++){
            if(reversedArr[i]<t || reversedArr[i]==t){
                console.log(reversedArr[i])
                return;
            }
        }
    }

    if(k==4){
        for(let i=0;i<newArr.length;i++){
            const arr = [...newArr]
            arr[i]=endArr[0]
            mainArr.push(arr)
        }
        const sumArr=[]

        for(let i=0;i<mainArr.length;i++){
            let sum=0;
            for(let j=0;j<mainArr[i].length;j++){
                sum+=mainArr[i][j]
            }
            sumArr.push(sum)
        }
        growthSort(sumArr)

        const reversedArr = sumArr.reverse()

        for(let i=0;i<reversedArr.length;i++){
            if(reversedArr[i]<t || reversedArr[i]==t){
                console.log(reversedArr[i])
                return;
            }
        }
    }
}

func(3,ls,228)

function growthSort(arr){
    arr.sort(function (a,b) {
        return a - b;
    })
}

