import request from "request"

const url = "http://api.weatherstack.com/current?access_key=2cda9ffdf470c188d8d2e42bbb24ad24&query=New%20York"

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})