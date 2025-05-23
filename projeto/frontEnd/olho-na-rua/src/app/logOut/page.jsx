"use client"

export default function logOut() {
    function logOut() {
        localStorage.clear()
        window.location.replace('/login')
    }
    logOut()
}