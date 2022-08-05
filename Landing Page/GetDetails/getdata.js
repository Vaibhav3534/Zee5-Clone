
const getdata = async(url) =>{
    try {
        let res = await fetch (url)
        let data =await res.json();
        console.log(data)
        return data;
    } catch (error) {
        return console.log("error");
    }
}

export default getdata