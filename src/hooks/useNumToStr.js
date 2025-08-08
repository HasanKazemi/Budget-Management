const useNumToStr = (value, setFinal)=>{
    const toman = Math.floor(value / 10)
    if (toman === 0) {
        setFinal("")
    } else if (toman < 1000) {
        setFinal(toman + " تومان ")
    } else if (toman >= 1000 && toman < 1000000) {
        const thousand = Math.floor(toman / 1000) + " هزار "
        const hundred = (toman % 1000) === 0 ? "تومان" : Math.floor(toman % 1000) + "تومان"
        setFinal(thousand + hundred)
    } else if (toman >= 1000000 && toman < 1000000000) {
        const milion = Math.floor(toman / 1000000) + " میلیون "
        const thousand = Math.floor((toman % 1000000)/1000) === 0 ? "" : Math.floor((toman % 1000000)/1000) + " هزار"
        const hundred = Math.floor(toman % 1000) === 0 ? " تومان " : Math.floor(toman % 1000) + " تومان "
        setFinal(milion + thousand + hundred)
    } else {
        setFinal("مقدار بیش از حد مجاز")
    }
}
export default useNumToStr