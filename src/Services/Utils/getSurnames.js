export const getSurnames = (apellidos="") => {
    return apellidos.split(' ').filter(item => item.length !== 0)
}