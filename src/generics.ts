
function useState<T>(initialValue: T): [T, (newValue: T) => void] {
    let value = initialValue

    function setValue(newValue: T) {
        value = newValue
    }

    return [value, setValue]
}


useState<string>("Hello")
useState<number>(335)

interface user {
    name : string
    isLoggedIn : boolean
}

useState<user>({name : "Talukder", isLoggedIn : false}) //-- type is user here