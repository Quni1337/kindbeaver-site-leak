const hide = (func, setShow) => {
    return function (...args) {
        setShow(false)
        setTimeout(() => {
            func(...args)
        }, 500)
    }
}


export {hide}