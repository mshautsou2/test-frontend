export const localStorageService = {
    setToken: (token: string) => {
        localStorage.setItem('token', token)
    },
    getToken: () => {
        return localStorage.getItem('token')
    }
}