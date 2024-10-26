//2
    let num = 0
    const counter = () => {
       setTimeout(() => {
           num++
           console.log(num)
           if (num < 144) {
               requestAnimationFrame(counter)
           }
       }, 1000)
    }
    counter()

//3
    const url = ' https://fakestoreapi.com/products'
    const getPosts = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            data.forEach(item => {
                console.log(item.title);
            });
        } catch (error) {
            console.log(error)
        }
    }
    getPosts()

//7
    document.getElementById('fetchData').addEventListener('click', fetchData)

    async function fetchData() {
        try {
            const response = await fetch('prodacts.json')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

//6
    let count = 0
    const counterElement = document.getElementById('counter')

    const interval = setInterval(() => {
        count++
        counterElement.textContent = count

        if (count >= 100) {
            clearInterval(interval);
        }
    }, 1)

