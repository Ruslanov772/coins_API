document.addEventListener('DOMContentLoaded', () => {
    const arr = document.querySelector('.wrapper');
    const prev = document.querySelector('#prev')
    const next = document.querySelector('#next')
    const btn = document.querySelector('.nav-btn');


    let count = 0;
    let limit = 5;
    let data = 1;

    btn.addEventListener('click', () => {
        myFunction()
    })

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const renderData = coins => {
        console.log(coins);
        coins.forEach(coinItem => {
            const arc = document.createElement('article');
            arc.className = 'coins';
            arc.innerHTML = `
                <img src="${coinItem['icon']}" alt="">
                    <div class="coins__name">
                        <h5>${coinItem['name']}</h5>
                        <p>${ (coinItem['priceBtc']).toFixed(3)} ${coinItem['symbol']} · $ ${Math.round(coinItem['price'])}</p>
                    </div>
                 <div class="coin__price">$ ${Math.round(coinItem['volume'] / 1000000000)}</div>
            `;
            arr.append(arc)
        })
    }


    const renderCoin =  chart => {
        const testArr = [];
        const net = document.querySelector('#net');
        net.innerHTML = `$ ${chart[chart.length -1][1].toFixed(2)}`
        chart.forEach(elm => {
            testArr.push(Math.round(elm[1]))
        })

        const labels = [];
        for (let testArrKey in testArr) {
            labels.push(testArrKey);
        }

        const ctx = document.getElementById('myChart').getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, 'rgba(99, 52, 254, 0.18)')
        gradient.addColorStop(1, 'rgba(99, 52, 254, 0)')
        let myChart = new Chart(ctx, {

            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    pointRadius: 0,
                    fillColor : gradient,
                    label: '',
                    data: testArr,
                    fill: 'start',
                    backgroundColor: [
                        gradient,
                    ],
                    borderColor: [
                        '#784FFE',
                    ],
                    tickColor: 'green',
                    borderWidth: 3,
                }]
            },
            options: {
                plugins: {
                    legend: {
                      display: false,
                    }
                },
                scales: {

                    x: {
                        display: false,
                        grid: {
                            display: false,
                        },
                        title: {
                            display: false,

                        },
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,

                        }
                    }
                }
            },

        })

    }


    const testRender = data => {
        const testArr = [];
        const income = document.querySelector('#income');

        let inc = data[0]['priceUsd'];
        let x = data[data.length -1]['priceUsd']
        console.log(x);
        let sum = (data[0]['priceUsd'] - data[data.length -1]['priceUsd']);
        income.innerHTML = `$ ${sum.toFixed(2)}`
        data.forEach(data => {
            testArr.push(Math.round(data['priceUsd']));
            console.log();
        })

        const labels = [];
        for (let testArrKey in testArr) {
            labels.push(testArrKey);
        }

        const ctx = document.getElementById('myChart2').getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, 'rgba(99, 52, 254, 0.18)')
        gradient.addColorStop(1, 'rgba(99, 52, 254, 0)')
        let myChart = new Chart(ctx, {

            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    pointRadius: 0,
                    fillColor : gradient,
                    label: '',
                    data: testArr,
                    fill: 'start',
                    backgroundColor: [
                        gradient,
                    ],
                    borderColor: [
                        '#784FFE',
                    ],
                    tickColor: 'green',
                    borderWidth: 3,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {

                    x: {
                        display: false,
                        grid: {
                            display: false,
                        },
                        title: {
                            display: false,

                        },
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,

                        }
                    }
                }
            },

        })
    }

    const testRender2 = data => {
        const testArr = [];
        const expenses = document.querySelector('#expenses');

        data.forEach(data => {
            testArr.push(Math.round(data['priceUsd']))
            expenses.innerHTML = testArr[testArr.length -1];
        })

        const labels = [];
        for (let testArrKey in testArr) {
            labels.push(testArrKey);
        }

        const ctx = document.getElementById('myChart3').getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0, 'rgba(99, 52, 254, 0.18)')
        gradient.addColorStop(1, 'rgba(99, 52, 254, 0)')
        let myChart = new Chart(ctx, {

            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    pointRadius: 0,
                    fillColor : gradient,
                    label: '',
                    data: testArr,
                    fill: 'start',
                    backgroundColor: [
                        gradient,
                    ],
                    borderColor: [
                        '#784FFE',
                    ],
                    tickColor: 'green',
                    borderWidth: 3,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {

                    x: {
                        display: false,
                        grid: {
                            display: false,
                        },
                        title: {
                            display: false,

                        },
                    },
                    y: {
                        display: false,
                        grid: {
                            display: false,

                        }
                    }
                }
            },

        })
    }

    const testRender3 = data => {
        const testArr = [];
        const expenses = document.querySelector('#expenses');

        data.forEach(data => {
            testArr.push(Math.round(data['priceUsd']))
            expenses.innerHTML = testArr[testArr.length -1];
        })

        const labels = [];
        for (let testArrKey in testArr) {
            labels.push(testArrKey);
        }

        const ctx = document.getElementById('myChart4').getContext('2d');

        let myChart = new Chart(ctx, {

            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    pointRadius: 0,
                    fillColor : '#724BF2',
                    label: '',
                    data: testArr,
                    fill: 'start',
                    backgroundColor: [
                        '#724BF2',
                    ],
                    borderColor: [
                        '#784FFE',
                    ],
                    tickColor: 'green',
                    borderWidth: 3,
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {

                    x: {
                        grid: {
                            display: false,
                        },

                    },

                }
            },

        })
    }

    const getData = async () => {
        try {
            const resp = await fetch(
                `https://api.coinstats.app/public/v1/coins?skip=${count}&limit=${limit}`
        )
            const data = await resp.json();
            const { coins } = data
            renderData(coins)
        } catch (e) {
            console.log(`Ошибка - ${e}`)
        }
    }

    getData();


    const getTest = async () => {
        try {
            const resp = await fetch(
                `https://api.coincap.io/v2/assets/bitcoin/history?interval=m1`
            )
            const test = await resp.json();
            const { data } = test;
            testRender(data)
            console.log(data);
        } catch (e) {
            console.log(`Ошибка - ${e}`)
        }
    }

    getTest()

    const getTest2 = async () => {
        try {
            const resp = await fetch(
                `https://api.coincap.io/v2/assets/bitcoin/history?interval=d1`
            )
            const test = await resp.json();
            const { data } = test;
            testRender2(data)
            testRender3(data)
            console.log(data);
        } catch (e) {
            console.log(`Ошибка - ${e}`)
        }
    }


    getTest2()

    const getCoin = async () => {
        try {
            const resp = await fetch(
                `https://api.coinstats.app/public/v1/charts?period=24h&coinId=bitcoin`
            )


            const coin = await resp.json();
            const { chart } = coin;
            renderCoin(chart)
        } catch (e) {
            console.log(`Ошибка - ${e}`)
        }
    }
    getCoin()



    next.addEventListener('click', () => {
        count += limit
        getData()
    })





})